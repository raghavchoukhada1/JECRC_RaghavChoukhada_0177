using Microsoft.AspNetCore.Mvc;
using BillingAPI.Data;
using BillingAPI.Models;
[ApiController]
[Route("api/[controller]")]
public class CatalogController : ControllerBase
{
    private readonly AppDbContext _context;

    public CatalogController(AppDbContext context)
    {
        _context = context;
    }

    // GET ALL
    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_context.CatalogItems);
    }

    // ADD ITEM
    [HttpPost]
    public IActionResult Add(CatalogItem item)
    {
        _context.CatalogItems.Add(item);
        _context.SaveChanges();
        return Ok(item);
    }

    // UPDATE ITEM
    [HttpPut("{id}")]
    public IActionResult Update(int id, CatalogItem updated)
    {
        var item = _context.CatalogItems.Find(id);

        if (item == null) return NotFound();

        item.Name = updated.Name;
        item.Price = updated.Price;
        item.Type = updated.Type;

        _context.SaveChanges();
        return Ok(item);
    }

    // DELETE ITEM
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var item = _context.CatalogItems.Find(id);

        if (item == null) return NotFound();

        _context.CatalogItems.Remove(item);
        _context.SaveChanges();

        return Ok();
    }
}