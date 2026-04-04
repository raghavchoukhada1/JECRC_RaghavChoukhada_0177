namespace BillingAPI.Models
{
    public enum CatalogType
    {
        Entrance,
        Donation,
        Product
    }

    public class CatalogItem
    {
        public int Id { get; set; }
        public CatalogType Type { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public bool AllowCustomPrice { get; set; }
    }
}