using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
namespace JwtRoleAuthAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        [HttpGet("daShboard")]
        [Authorize(Roles = "Manager") ]
        public IActionResult GetAdminDashboard()
        {
            return Ok(new { message = "Welcome to the Manager Dashboard!" });
        }
        [HttpGet("reports")]
        [Authorize(Roles = "Manager")]
        public IActionResult GetManagerReports()
        {
            return Ok("Here are your reports!");
        }
    }
}