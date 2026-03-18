using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using LoanManagementSystem.Data;
using LoanManagementSystem.DTOs;

namespace LoanManagementSystem.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/profile")]
    public class ProfileController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProfileController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetProfile()
        {
            var email = User.Identity.Name;

            var user = _context.Users.FirstOrDefault(x=>x.Email==email);

            return Ok(user);
        }

        [HttpPut]
        public IActionResult UpdateProfile(UpdateProfileDTO dto)
        {
            var email = User.Identity.Name;

            var user = _context.Users.FirstOrDefault(x=>x.Email==email);

            user.Name = dto.Name;
            user.Phone = dto.Phone;

            _context.SaveChanges();

            return Ok("Profile Updated");
        }
    }
}