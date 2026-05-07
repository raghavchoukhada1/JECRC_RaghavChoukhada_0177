using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

class Program
{
    static void Main()
    {
        // Read paragraph
        string text = Console.ReadLine();

        // Read N
        int n = int.Parse(Console.ReadLine());

        // Convert to lowercase
        text = text.ToLower();

        // Remove punctuation
        text = Regex.Replace(text, @"[^\w\s]", "");

        // Split into words
        string[] words = text.Split(
            ' ',
            StringSplitOptions.RemoveEmptyEntries);

        // Dictionary for frequency
        Dictionary<string, int> freq =
            new Dictionary<string, int>();

        // Count frequencies
        foreach (string word in words)
        {
            if (freq.ContainsKey(word))
            {
                freq[word]++;
            }
            else
            {
                freq[word] = 1;
            }
        }

        Console.WriteLine("\n--- Word Frequency Analysis ---\n");

        // Total words
        Console.WriteLine($"Total words: {words.Length}");

        // Unique words
        Console.WriteLine($"Unique words: {freq.Count}");

        // Top N frequent words
        Console.WriteLine($"\nTop {n} Frequent Words:\n");

        var topWords = freq
            .OrderByDescending(x => x.Value)
            .Take(n);

        foreach (var item in topWords)
        {
            Console.WriteLine(
                $"{item.Key}: {item.Value} times");
        }

        // Words appearing once
        Console.WriteLine("\nWords appearing exactly once:\n");

        var singleWords = freq
            .Where(x => x.Value == 1)
            .Select(x => x.Key);

        Console.WriteLine(string.Join(", ", singleWords));

        // Average frequency
        double average =
            freq.Values.Average();

        Console.WriteLine(
            $"\nAverage frequency: {average:F2} times per unique word");
    }
}