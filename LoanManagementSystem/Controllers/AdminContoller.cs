using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using LoanManagementSystem.Data;

namespace LoanManagementSystem.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/admin")]
    public class AdminController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AdminController(AppDbContext context)
        {
            _context = context;
        }

        // Get all users
        [HttpGet("users")]
        public IActionResult GetUsers()
        {
            var users = _context.Users
                .Select(u => new
                {
                    u.Id,
                    u.Name,
                    u.Email,
                    u.Phone,
                    u.Role,
                    u.CreatedAt
                })
                .ToList();

            return Ok(users);
        }

        // Search users
        [HttpGet("users/search")]
        public IActionResult SearchUsers(string keyword)
        {
            var users = _context.Users
                .Where(u => u.Name.Contains(keyword) || u.Email.Contains(keyword))
                .Select(u => new
                {
                    u.Id,
                    u.Name,
                    u.Email,
                    u.Phone,
                    u.Role
                })
                .ToList();

            return Ok(users);
        }

        // Filter by role
        
      [HttpGet("users/filter")]
public IActionResult FilterUsers(string role)
{
    var validRoles = new[] { "Admin", "Customer" };

    if (!validRoles.Contains(role))
    {
        return BadRequest("Invalid role. Allowed roles are: Admin, Customer");
    }

    var users = _context.Users
        .Where(u => u.Role == role)
        .Select(u => new
        {
            u.Id,
            u.Name,
            u.Email,
            u.Phone,
            u.Role
        })
        .ToList();

    return Ok(users);
}
    }
}