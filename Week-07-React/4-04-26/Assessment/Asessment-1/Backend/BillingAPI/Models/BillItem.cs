namespace BillingAPI.Models
{
    public class BillItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public bool IsCustom { get; set; }
        public int BillId { get; set; }
    }
}