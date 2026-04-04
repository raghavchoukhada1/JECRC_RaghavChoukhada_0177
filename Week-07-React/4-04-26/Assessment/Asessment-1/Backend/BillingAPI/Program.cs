using Microsoft.EntityFrameworkCore;
using BillingAPI.Data;
using BillingAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// 🔥 Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 🔥 DB connection
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// 🔥 CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();

// 🔥 Use CORS
app.UseCors("AllowAll");

// 🔥 Swagger
app.UseSwagger();
app.UseSwaggerUI();

// 🔥 Controllers
app.MapControllers();


// 🔥 SEED DATA (IMPORTANT)
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    if (!db.CatalogItems.Any())
    {
        db.CatalogItems.AddRange(

            // 🎫 Entrance
            new CatalogItem { Type = CatalogType.Entrance, Name = "Adult", Price = 100 },
            new CatalogItem { Type = CatalogType.Entrance, Name = "Child", Price = 50 },
            new CatalogItem { Type = CatalogType.Entrance, Name = "Senior", Price = 70 },
            new CatalogItem { Type = CatalogType.Entrance, Name = "VIP", Price = 200 },

            // 💰 Donation
            new CatalogItem { Type = CatalogType.Donation, Name = "Donate ₹100", Price = 100, AllowCustomPrice = true },
            new CatalogItem { Type = CatalogType.Donation, Name = "Donate ₹500", Price = 500, AllowCustomPrice = true },
            new CatalogItem { Type = CatalogType.Donation, Name = "Donate ₹1000", Price = 1000, AllowCustomPrice = true },

            // 🛒 Products
            new CatalogItem { Type = CatalogType.Product, Name = "T-Shirt", Price = 300 },
            new CatalogItem { Type = CatalogType.Product, Name = "Food Combo", Price = 150 }
        );

        db.SaveChanges();
    }
}

app.Run();