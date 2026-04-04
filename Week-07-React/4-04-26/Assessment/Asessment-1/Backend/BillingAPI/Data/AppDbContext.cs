using Microsoft.EntityFrameworkCore;
using BillingAPI.Models;

namespace BillingAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Bill> Bills { get; set; }
        public DbSet<BillItem> BillItems { get; set; }
        public DbSet<CatalogItem> CatalogItems { get; set; }
    }
}