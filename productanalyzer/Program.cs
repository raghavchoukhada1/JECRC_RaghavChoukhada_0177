using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        Console.Write("Enter number of prices: ");
        int n = int.Parse(Console.ReadLine());

        int[] prices = new int[n];

        Console.WriteLine("Enter prices:");

        for (int i = 0; i < n; i++)
        {
            prices[i] = int.Parse(Console.ReadLine());
        }

        Console.Write("Enter target sum: ");
        int target = int.Parse(Console.ReadLine());

        Console.WriteLine("\n--- Product Price Analysis ---\n");

        // -------------------------------------------------
        // Original Prices
        // -------------------------------------------------

        Console.WriteLine(
            "Original Prices: " +
            string.Join(", ", prices));

        // -------------------------------------------------
        // Bubble Sort
        // -------------------------------------------------

        int[] sorted = (int[])prices.Clone();

        for (int i = 0; i < sorted.Length - 1; i++)
        {
            for (int j = 0; j < sorted.Length - i - 1; j++)
            {
                if (sorted[j] > sorted[j + 1])
                {
                    int temp = sorted[j];
                    sorted[j] = sorted[j + 1];
                    sorted[j + 1] = temp;
                }
            }
        }

        Console.WriteLine(
            "\nSorted Prices (Ascending): " +
            string.Join(", ", sorted));

        // -------------------------------------------------
        // Binary Search
        // -------------------------------------------------

        Console.WriteLine("\nBinary Search Results:\n");

        int search1 = 399;
        int search2 = 500;

        int index1 = BinarySearch(sorted, search1);
        int index2 = BinarySearch(sorted, search2);

        if (index1 != -1)
        {
            Console.WriteLine(
                $"Price {search1} found at index {index1}");
        }
        else
        {
            Console.WriteLine(
                $"Price {search1} not found");
        }

        if (index2 != -1)
        {
            Console.WriteLine(
                $"Price {search2} found at index {index2}");
        }
        else
        {
            Console.WriteLine(
                $"Price {search2} not found");
        }

        // -------------------------------------------------
        // Pairs with target sum
        // -------------------------------------------------

        Console.WriteLine(
            $"\nPairs that sum to {target}:\n");

        HashSet<int> seen = new HashSet<int>();

        foreach (int num in sorted)
        {
            int complement = target - num;

            if (seen.Contains(complement))
            {
                Console.WriteLine(
                    $"({complement}, {num})");
            }

            seen.Add(num);
        }

        // -------------------------------------------------
        // Longest Increasing Subsequence
        // -------------------------------------------------

        Console.WriteLine(
            "\nLongest Increasing Subsequence:\n");

        List<int> lis = LongestIncreasingSubsequence(prices);

        Console.WriteLine(
            $"{string.Join(", ", lis)} " +
            $"(Length: {lis.Count})");

        // -------------------------------------------------
        // Statistics
        // -------------------------------------------------

        Console.WriteLine("\nStatistics:\n");

        int lowest = sorted.Min();
        int highest = sorted.Max();

        double average = sorted.Average();

        double median;

        if (sorted.Length % 2 == 0)
        {
            median =
                (sorted[sorted.Length / 2 - 1] +
                 sorted[sorted.Length / 2]) / 2.0;
        }
        else
        {
            median = sorted[sorted.Length / 2];
        }

        Console.WriteLine($"Lowest Price: {lowest}");
        Console.WriteLine($"Highest Price: {highest}");
        Console.WriteLine($"Average Price: {average:F2}");
        Console.WriteLine($"Median Price: {median:F2}");
    }

    // -------------------------------------------------
    // Binary Search Method
    // -------------------------------------------------

    static int BinarySearch(int[] arr, int target)
    {
        int left = 0;
        int right = arr.Length - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;

            if (arr[mid] == target)
            {
                return mid;
            }
            else if (arr[mid] < target)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return -1;
    }

    // -------------------------------------------------
    // Longest Increasing Subsequence
    // -------------------------------------------------

    static List<int> LongestIncreasingSubsequence(int[] arr)
    {
        int n = arr.Length;

        int[] dp = new int[n];
        int[] prev = new int[n];

        for (int i = 0; i < n; i++)
        {
            dp[i] = 1;
            prev[i] = -1;
        }

        int maxLength = 1;
        int lastIndex = 0;

        for (int i = 1; i < n; i++)
        {
            for (int j = 0; j < i; j++)
            {
                if (arr[j] < arr[i] &&
                    dp[j] + 1 > dp[i])
                {
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                }
            }

            if (dp[i] > maxLength)
            {
                maxLength = dp[i];
                lastIndex = i;
            }
        }

        List<int> lis = new List<int>();

        while (lastIndex != -1)
        {
            lis.Add(arr[lastIndex]);
            lastIndex = prev[lastIndex];
        }

        lis.Reverse();

        return lis;
    }
}