using System.ComponentModel.DataAnnotations;

namespace BankingApi.Models
{
    public class Transaction
    {
        [Key]
        public int Id { get; set; }

        public string Date { get; set; }
        public string Description { get; set; }
        public int Type { get; set; }
        public double Amount { get; set; }
        public string Balance { get; set; }
    }
}