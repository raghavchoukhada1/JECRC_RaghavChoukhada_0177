using Microsoft.AspNetCore.Mvc;
using BankingApi.Data;
using BankingApi.Models;

namespace BankingApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TransactionController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_context.Transactions.ToList());
        }

        [HttpGet("filter")]
        public IActionResult Filter(string date)
        {
            if (string.IsNullOrEmpty(date))
                return BadRequest("Date required");

            var data = _context.Transactions
                .Where(t => t.Date == date)
                .ToList();

            return Ok(data);
        }

        [HttpGet("sort")]
        public IActionResult Sort()
        {
            var data = _context.Transactions
                .OrderBy(t => t.Amount)
                .ToList();

            return Ok(data);
        }

        [HttpPost("seed")]
        public IActionResult Seed()
        {
            if (_context.Transactions.Any())
                return Ok("Already seeded");

            var data = new List<Transaction>
    {
        new Transaction { Date="2019-12-01", Description="THE HACKERUNIVERSITY DES: CCD+ ID:0000232343", Type=0, Amount=1000, Balance="$12,234.45" },
        new Transaction { Date="2019-11-25", Description="HACKERBANK DES:DEBIT ID:000098794578789789", Type=1, Amount=2450.45, Balance="$12,234.45" },
        new Transaction { Date="2019-11-29", Description="HACKERBANK DES: CREDIT ID:1223232323", Type=1, Amount=999, Balance="$10,928" },
        new Transaction { Date="2019-12-03", Description="HACKERBANK INC. DES:CCD+ ID:33375894749", Type=0, Amount=1985.4, Balance="$12,234.45" },
        new Transaction { Date="2019-11-29", Description="HACKERBANK1 BP DES: MERCH PMT ID:1358570", Type=0, Amount=1520.34, Balance="$12,234.45" },
        new Transaction { Date="2019-11-29", Description="HACKERBANK DES: DEBIT ID:00097494729", Type=0, Amount=564, Balance="$12,234.45" },
        new Transaction { Date="2019-11-30", Description="CREDIT CARD PAYMENT ID:222349083", Type=1, Amount=1987, Balance="$12,234.45" }
    };

            _context.Transactions.AddRange(data);
            _context.SaveChanges();

            return Ok("Data seeded");
        }
        [HttpDelete("clear")]
        public IActionResult Clear()
        {
            var data = _context.Transactions.ToList();
            _context.Transactions.RemoveRange(data);
            _context.SaveChanges();

            return Ok("All data cleared");
        }
        [HttpPost]
        public IActionResult Add(Transaction t)
        {
            t.Id = 0; // IMPORTANT
            _context.Transactions.Add(t);
            _context.SaveChanges();
            return Ok(t);
        }
    }
}