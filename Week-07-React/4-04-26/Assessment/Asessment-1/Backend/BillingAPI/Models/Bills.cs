using System;
using System.Collections.Generic;

namespace BillingAPI.Models
{
    public class Bill
    {
        public int Id { get; set; }
        public string InvoiceNumber { get; set; }
        public List<BillItem> Items { get; set; } = new();
        public decimal Total { get; set; }
        public decimal Discount { get; set; }
        public string DiscountType { get; set; }
        public decimal Tax { get; set; }
        public decimal FinalAmount { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}