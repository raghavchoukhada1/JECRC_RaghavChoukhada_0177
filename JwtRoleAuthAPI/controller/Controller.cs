using Microsoft.EntityFrameworkCore;
using JwtRoleAuthAPI.Data;
using Microsoft.AspNetCore.Mvc;
namespace JwtRoleAuthAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Controller : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;

        public Controller(AppDbContext context)
        {
            _context = context;
        }

    };
    [HttpPost("register")]
    public IActionResult Register([FromBody]User user)
    {
        if (_context.Users.Any(u => u.Username == user.Username))
        {
            return BadRequest(new { message = "Username already exists" });
        }
        _context.Users.Add(user);
        _context.SaveChanges();
        return Ok(new { message = "User registered successfully" });
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody]User user)
    {
        var user = _context.Users.FirstOrDefault(u => u.Username == user.Username && u.Password == user.Password);
        if(user == null)
        {
            return BadRequest(Unauthorized("    Invalid username or password"));
        }
        var token = GenerateJwtToken(user);
        return Ok(new { token });
    }
    private string GenerateJwtToken(User user)
    {
    var claims =new[]{
        new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.Name, user.Username),
        new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.Role, user.Role)
    };
    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

    var token = new System.IdentityModel.Tokens.Jwt.JwtSecurityToken(
        issuer: _config["Jwt:Issuer"],
        audience: _config["Jwt:Audience"],
        claims: claims,
        expires: DateTime.Now.AddMinutes(30),
        signingCredentials: creds);
  
  return new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler().WriteToken(token);
  
  }
}
