using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<int, int> stock = new Dictionary<int, int>();

        int n = int.Parse(Console.ReadLine());

        for (int i = 0; i < n; i++)
        {
            string input = Console.ReadLine();

            string[] parts = input.Split(' ');

            string operation = parts[0];

            // ADD operation
            if (operation == "ADD")
            {
                int productId = int.Parse(parts[1]);
                int quantity = int.Parse(parts[2]);

                if (stock.ContainsKey(productId))
                {
                    stock[productId] += quantity;
                }
                else
                {
                    stock[productId] = quantity;
                }
            }

            // REMOVE operation
            else if (operation == "REMOVE")
            {
                int productId = int.Parse(parts[1]);
                int quantity = int.Parse(parts[2]);

                if (stock.ContainsKey(productId))
                {
                    if (stock[productId] >= quantity)
                    {
                        stock[productId] -= quantity;
                    }
                    else
                    {
                        Console.WriteLine("Not enough stock");
                    }
                }
                else
                {
                    Console.WriteLine("Product not found");
                }
            }

            // CHECK operation
            else if (operation == "CHECK")
            {
                int productId = int.Parse(parts[1]);

                if (stock.ContainsKey(productId))
                {
                    Console.WriteLine(
                        $"Product {productId}: {stock[productId]} units");
                }
                else
                {
                    Console.WriteLine(
                        $"Product {productId}: 0 units");
                }
            }

            // BULK operation
            else if (operation == "BULK")
            {
                string[] items = parts[1].Split(',');

                foreach (string item in items)
                {
                    string[] productData = item.Split(':');

                    int productId = int.Parse(productData[0]);
                    int quantity = int.Parse(productData[1]);

                    if (stock.ContainsKey(productId))
                    {
                        stock[productId] += quantity;
                    }
                    else
                    {
                        stock[productId] = quantity;
                    }
                }
            }

            // DISPLAY operation
            else if (operation == "DISPLAY")
            {
                Console.WriteLine("--- Current Inventory ---");

                foreach (var item in stock)
                {
                    if (item.Value > 0)
                    {
                        Console.WriteLine(
                            $"{item.Key}: {item.Value} units");
                    }
                }
            }
        }
    }
}