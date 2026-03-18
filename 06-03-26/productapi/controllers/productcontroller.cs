using Microsoft.AspNetCore.Mvc;
using ProductAPI.Data;
using ProductAPI.Models;

namespace ProductAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
public IActionResult GetAllProducts()
{
    var products = _context.Products.ToList();
    return Ok(products);
}

        [HttpGet("{id}")]
        public IActionResult GetProducts(int id)
        {
            var product = _context.Products.Find(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        [HttpPost]
        public IActionResult AddProduct(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();

            return Ok(product);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, Product updateproduct)
        {
            var product = _context.Products.Find(id);

            if (product == null)
            {
                return NotFound();
            }

            product.Name = updateproduct.Name;
            product.Price = updateproduct.Price;
            product.Quantity = updateproduct.Quantity;

            _context.SaveChanges();

            return Ok(product);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);

            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            _context.SaveChanges();

            return NoContent();
        }
        [HttpGet("search/{name}")]
public IActionResult SearchProduct(string name)
{
    var products = _context.Products
        .Where(p => p.Name.Contains(name))
        .ToList();

    if (products.Count == 0)
    {
        return NotFound("No product found");
    }

    return Ok(products);
}
    }
}