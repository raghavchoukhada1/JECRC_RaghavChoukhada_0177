
using BillingAPI.Data;
using BillingAPI.Models;
using Microsoft.AspNetCore.Mvc;
[ApiController]
[Route("api/[controller]")]
public class BillController : ControllerBase
{
    private readonly BillService _service;
    private readonly AppDbContext _context;

    public BillController(BillService service, AppDbContext context)
    {
        _service = service;
        _context = context;
    }

    // CREATE BILL
    [HttpPost]
    public IActionResult Create(Bill bill)
    {
        return Ok(_service.Create(bill));
    }

    // GET ALL
    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_context.Bills
            .OrderByDescending(b => b.CreatedAt)
            .ToList());
    }

    // SEARCH
    [HttpGet("search")]
    public IActionResult Search(string query)
    {
        return Ok(_context.Bills
            .Where(b => b.InvoiceNumber.Contains(query))
            .ToList());
    }

    // DAILY SUMMARY
    [HttpGet("daily")]
    public IActionResult Daily()
    {
        var today = DateTime.Today;

        var total = _context.Bills
            .Where(b => b.CreatedAt.Date == today)
            .Sum(b => b.FinalAmount);

        return Ok(total);
    }

    // DELETE
   [HttpDelete("{id}")]
public IActionResult Delete(int id)
{
    var bill = _context.Bills.Find(id);

    if (bill == null)
        return NotFound();

    _context.Bills.Remove(bill);
    _context.SaveChanges();

    return Ok();
}
}