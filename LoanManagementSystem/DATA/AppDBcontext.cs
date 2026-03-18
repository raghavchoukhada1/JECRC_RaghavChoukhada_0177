using Microsoft.EntityFrameworkCore;
using LoanManagementSystem.Models;

namespace LoanManagementSystem.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<PasswordResetOTP> PasswordResetOTPs { get; set; }
    }
}