using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace LoanManagementSystem.Models
{
    [Index(nameof(Email), IsUnique = true)]
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        public string PasswordHash { get; set; }

        public string Phone { get; set; }

        public string Role { get; set; } = "Customer";

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}