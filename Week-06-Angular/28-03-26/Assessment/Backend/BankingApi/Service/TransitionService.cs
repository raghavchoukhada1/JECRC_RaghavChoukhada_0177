using BankingApi.Models;

namespace BankingApi.Services
{
    public class TransactionService
    {
        private List<Transaction> transactions = new List<Transaction>
        {
            new Transaction
            {
                Date = "2019-12-03",
                Description = "HACKERBANK INC. DES:CCD+ ID: 33375894749",
                Type = 0,
                Amount = 1985.4,
                Balance = "$12,234.45"
            },
            new Transaction
            {
                Date = "2019-12-04",
                Description = "AMAZON PURCHASE",
                Type = 1,
                Amount = 200,
                Balance = "$12,034.45"
            },
            new Transaction
            {
                Date = "2019-12-03",
                Description = "SALARY CREDIT",
                Type = 0,
                Amount = 5000,
                Balance = "$17,034.45"
            }
        };

        public List<Transaction> GetAll()
        {
            return transactions;
        }

        public List<Transaction> FilterByDate(string date)
        {
            return transactions
                .Where(t => t.Date == date)
                .ToList();
        }

        public List<Transaction> SortByAmount()
        {
            return transactions
                .OrderBy(t => t.Amount)
                .ToList();
        }
    }
}