using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        
        int[] arr = { 1,3,2,3,3,4,5,3,6,7,8,9,10,3 };

        int k = 2;

        Console.WriteLine("--- Access Pattern Analysis ---\n");
        HashSet<int> set = new HashSet<int>(arr);

        int longestLength = 0;
        int start = 0;

        foreach (int num in set)
        {
            // Start only if previous number not present
            if (!set.Contains(num - 1))
            {
                int currentNum = num;
                int currentLength = 1;

                while (set.Contains(currentNum + 1))
                {
                    currentNum++;
                    currentLength++;
                }

                if (currentLength > longestLength)
                {
                    longestLength = currentLength;
                    start = num;
                }
            }
        }

        Console.Write("Longest Consecutive Sequence: ");

        List<int> sequence = new List<int>();

        for (int i = 0; i < longestLength; i++)
        {
            sequence.Add(start + i);
        }
        Console.WriteLine($"{string.Join(",", sequence)} (Length: {longestLength})");
        Dictionary<int, int> freq =
            new Dictionary<int, int>();
        foreach (int num in arr)
        {
            if (freq.ContainsKey(num))
            {
                freq[num]++;
            }
            else
            {
                freq[num] = 1;
            }
        }

        var mostFrequent =
            freq.OrderByDescending(x => x.Value).First();

        Console.WriteLine(
            $"\nMost Frequent Element: {mostFrequent.Key} " +
            $"(appears {mostFrequent.Value} times)");

        // -------------------------------------------------
        // 3. First Non-Repeating Element
        // -------------------------------------------------

        int firstNonRepeating = -1;

        foreach (int num in arr)
        {
            if (freq[num] == 1)
            {
                firstNonRepeating = num;
                break;
            }
        }

        Console.WriteLine(
            $"\nFirst Non-Repeating Element: {firstNonRepeating}");

        // -------------------------------------------------
        // 4. Pairs with Difference K
        // -------------------------------------------------

        Console.WriteLine($"\nPairs with Difference {k}:");

        List<string> pairs = new List<string>();

        foreach (int num in set)
        {
            if (set.Contains(num + k))
            {
                pairs.Add($"({num}, {num + k})");
            }
        }

        Console.WriteLine(string.Join(", ", pairs));

        // -------------------------------------------------
        // 5. Majority Element
        // -------------------------------------------------

        int n = arr.Length;

        var majority =
            freq.OrderByDescending(x => x.Value).First();

        double percentage =
            (double)majority.Value / n * 100;

        if (majority.Value > n / 2)
        {
            Console.WriteLine(
                $"\nMajority Element: {majority.Key}");
        }
        else
        {
            Console.WriteLine(
                $"\nMajority Element: {majority.Key} " +
                $"(appears {majority.Value} out of {n} times - " +
                $"{percentage:F1}% - No majority)");
        }
    }
}