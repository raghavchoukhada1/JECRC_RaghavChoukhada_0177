public class BillService
{
    private readonly AppDbContext _context;

    public BillService(AppDbContext context)
    {
        _context = context;
    }

    public Bill Create(Bill bill)
    {
        decimal total = bill.Items.Sum(i => i.Price * i.Quantity);

        decimal discountAmount = bill.DiscountType == "percent"
            ? total * (bill.Discount / 100)
            : bill.Discount;

        decimal taxAmount = (total - discountAmount) * (bill.Tax / 100);

        bill.Total = total;
        bill.FinalAmount = total - discountAmount + taxAmount;
        bill.InvoiceNumber = $"INV-{DateTime.Now.Ticks}";
        bill.CreatedAt = DateTime.Now;

        foreach (var item in bill.Items)
        {
            item.Id = 0;
        }

        _context.Bills.Add(bill);
        _context.SaveChanges();

        return bill;
    }
}