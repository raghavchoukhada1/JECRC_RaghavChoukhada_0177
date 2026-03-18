using Microsoft.AspNetCore.Mvc;
using LoanManagementSystem.Data;
using LoanManagementSystem.Models;
using LoanManagementSystem.DTOs;
using LoanManagementSystem.Services;

namespace LoanManagementSystem.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly TokenService _tokenService;

        public AuthController(AppDbContext context, TokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        // Register user
        [HttpPost("register")]
        public IActionResult Register(RegisterDTO dto)
        {
            var existingUser = _context.Users
                .FirstOrDefault(x => x.Email == dto.Email);

            if (existingUser != null)
                return BadRequest("Email already exists");

            var hash = BCrypt.Net.BCrypt.HashPassword(dto.Password);

            var user = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                Phone = dto.Phone,
                PasswordHash = hash,
                Role = "Customer",
                CreatedAt = DateTime.Now
            };

            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok("User Registered Successfully");
        }

        // Login
        [HttpPost("login")]
        public IActionResult Login(LoginDTO dto)
        {
            var user = _context.Users
                .FirstOrDefault(x => x.Email == dto.Email);

            if (user == null)
                return Unauthorized("Invalid email or password");

            bool valid = BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash);

            if (!valid)
                return Unauthorized("Invalid email or password");

            var token = _tokenService.CreateToken(user);

            return Ok(new
            {
                token
            });
        }

        // Forgot password
      [HttpPost("forgot-password")]
        public IActionResult ForgotPassword(string email)
        {
            var otp = new Random().Next(100000,999999).ToString();

            var record = new PasswordResetOTP
            {
                Email = email,
                OTP = otp,
                ExpiryTime = DateTime.Now.AddMinutes(10),
                IsUsed = false
            };

            _context.PasswordResetOTPs.Add(record);
            _context.SaveChanges();

            return Ok($"OTP : {otp}");
        }

        // Reset password
        [HttpPost("reset-password")]
        public IActionResult ResetPassword(ResetPasswordDTO dto)
        {
            var otpRecord = _context.PasswordResetOTPs
                .FirstOrDefault(x => x.Email == dto.Email 
                && x.OTP == dto.OTP 
                && !x.IsUsed);

            if (otpRecord == null)
                return BadRequest("Invalid OTP");

            if (otpRecord.ExpiryTime < DateTime.Now)
                return BadRequest("OTP expired");

            var user = _context.Users
                .FirstOrDefault(x => x.Email == dto.Email);

            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.NewPassword);

            otpRecord.IsUsed = true;

            _context.SaveChanges();

            return Ok("Password Updated Successfully");
        }
    }
}