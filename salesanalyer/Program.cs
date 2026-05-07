using System;
using System.Collections.Generic;
using System.Linq;

class Sale
{
    public string ProductId;
    public string Region;
    public int Amount;

    public Sale(string productId, string region, int amount)
    {
        ProductId = productId;
        Region = region;
        Amount = amount;
    }
}

class Program
{
    static void Main()
    {
        List<Sale> sales = new List<Sale>();

        Console.Write("Enter number of records: ");
        int n = int.Parse(Console.ReadLine());

        for (int i = 0; i < n; i++)
        {
            Console.WriteLine(
                "\nEnter ProductId Region Amount:");

            string[] input = Console.ReadLine().Split();

            string productId = input[0];
            string region = input[1];
            int amount = int.Parse(input[2]);
            sales.Add(new Sale(productId, region, amount));
        }

        Console.Write("\nEnter threshold: ");
        int threshold = int.Parse(Console.ReadLine());

        Console.WriteLine(
            "\n--- Sales Report by Product and Region ---\n");

        // -------------------------------------------------
        // Group by Product
        // -------------------------------------------------

        var groupedProducts =
            sales.GroupBy(s => s.ProductId);

        foreach (var productGroup in groupedProducts)
        {
            Console.WriteLine(
                $"Product {productGroup.Key}:\n");

            foreach (var sale in productGroup)
            {
                Console.WriteLine(
                    $"  {sale.Region}: ${sale.Amount}");
            }

            int total =
                productGroup.Sum(x => x.Amount);

            double average =
                productGroup.Average(x => x.Amount);

            int min =
                productGroup.Min(x => x.Amount);

            int max =
                productGroup.Max(x => x.Amount);

            Console.WriteLine(
                $"  Total: ${total}, " +
                $"Average: ${average:F2}, " +
                $"Min: ${min}, Max: ${max}\n");
        }

        // -------------------------------------------------
        // Best Selling Product by Region
        // -------------------------------------------------

        Console.WriteLine(
            "--- Best Selling Product by Region ---\n");

        var groupedRegions =
            sales.GroupBy(s => s.Region);

        foreach (var regionGroup in groupedRegions)
        {
            var bestProduct =
                regionGroup
                .OrderByDescending(x => x.Amount)
                .First();

            Console.WriteLine(
                $"{regionGroup.Key}: " +
                $"{bestProduct.ProductId} " +
                $"(${bestProduct.Amount})");
        }

        // -------------------------------------------------
        // Underperforming Products
        // -------------------------------------------------

        Console.WriteLine(
            $"\n--- Underperforming Products (< ${threshold} average) ---\n");

        foreach (var productGroup in groupedProducts)
        {
            double average =
                productGroup.Average(x => x.Amount);

            if (average < threshold)
            {
                Console.WriteLine(
                    $"{productGroup.Key} (${average:F2})");
            }
        }
    }
}