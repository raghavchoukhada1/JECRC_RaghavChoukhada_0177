using System;
using System.Collections.Generic;
using System.Linq;

class Query
{
    public List<int> dataSource;
    public bool isExecuted = false;

    public Query(List<int> data)
    {
        dataSource = data;
    }

    // Deferred execution
    public virtual IEnumerable<int> Apply()
    {
        return dataSource;
    }

    // Force execution
    public virtual List<int> Execute()
    {
        isExecuted = true;
        return Apply().ToList();
    }

    public virtual string GetQueryType()
    {
        return "Base Query";
    }
}

// ---------------- FILTER QUERY ----------------
class FilterQuery : Query
{
    public string predicate;
    public int filteredCount;

    public FilterQuery(List<int> data, string predicate) : base(data)
    {
        this.predicate = predicate;
    }

    public override IEnumerable<int> Apply()
    {
        // Deferred filtering using LINQ
        if (predicate.StartsWith(">"))
        {
            int val = int.Parse(predicate.Substring(1));
            return dataSource.Where(x => x > val);
        }
        else if (predicate.StartsWith("<"))
        {
            int val = int.Parse(predicate.Substring(1));
            return dataSource.Where(x => x < val);
        }
        else if (predicate == "even")
        {
            return dataSource.Where(x => x % 2 == 0);
        }
        else if (predicate == "odd")
        {
            return dataSource.Where(x => x % 2 != 0);
        }

        return dataSource;
    }

    public override List<int> Execute()
    {
        var result = Apply().ToList(); // execution happens here
        filteredCount = result.Count;
        isExecuted = true;

        Console.WriteLine($"Filter Executed,Predicate:{predicate},Result Count:{filteredCount}");

        return result;
    }

    public override string GetQueryType()
    {
        return "FilterQuery";
    }
}
class AggregateQuery : Query
{
    public string operation;
    public double result;

    public AggregateQuery(List<int> data, string operation) : base(data)
    {
        this.operation = operation;
    }

    public override IEnumerable<int> Apply()
    {
        // No execution here (just return data)
        return dataSource;
    }

    public override List<int> Execute()
    {
        isExecuted = true;

        switch (operation.ToLower())
        {
            case "sum":
                result = dataSource.Sum();
                break;
            case "average":
                result = dataSource.Average();
                break;
            case "max":
                result = dataSource.Max();
                break;
            case "min":
                result = dataSource.Min();
                break;
        }

        Console.WriteLine($"Aggregation Executed,Operation:{operation},Result:{result}");

        return dataSource;
    }

    public override string GetQueryType()
    {
        return "AggregateQuery";
    }
}
class Program
{
    static void Main()
    {
        string queryType = Console.ReadLine().Trim();
        List<int> data = Console.ReadLine().Split().Select(int.Parse).ToList();
        string input = Console.ReadLine().Trim();

        Query query;

        if (queryType.Equals("Filter", StringComparison.OrdinalIgnoreCase))
        {
            query = new FilterQuery(data, input);
        }
        else
        {
            query = new AggregateQuery(data, input);
        }

        query.Execute();
    }
}