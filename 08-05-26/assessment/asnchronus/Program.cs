using System;
using System.Threading.Tasks;

// ---------------- BASE CLASS ----------------
class AsyncService
{
    public int requestCount = 0;
    public long lastResponseTime = 0;

    // Virtual async method
    public virtual async Task<string> FetchDataAsync(string endpoint)
    {
        await Task.Delay(2000);
        return "Base Fetch";
    }

    // Virtual async status method
    public virtual async Task<string> GetStatusAsync()
    {
        await Task.Delay(100);
        return "Base Status";
    }
}

// ---------------- WEATHER SERVICE ----------------
class WeatherService : AsyncService
{
    public string city;
    public int temperature;

    public WeatherService(string city)
    {
        this.city = city;
        temperature = 22; // sample temperature
    }

    public override async Task<string> FetchDataAsync(string endpoint)
    {
        requestCount++;

        Console.WriteLine($"Weather Fetch Started,{city}");

        await Task.Delay(2000);

        Console.WriteLine($"Weather Data Received,{city},{temperature}°C");

        return "Weather Data";
    }

    public override async Task<string> GetStatusAsync()
    {
        await Task.Delay(100);

        string status =
            $"Weather Service Status,Requests:{requestCount}";

        Console.WriteLine(status);

        return status;
    }
}
class StockService : AsyncService
{
    public string symbol;
    public double currentPrice;

    public StockService(string symbol)
    {
        this.symbol = symbol;
        currentPrice = 145.75; // sample price
    }

    public override async Task<string> FetchDataAsync(string endpoint)
    {
        requestCount++;

        Console.WriteLine($"Stock Fetch Started,{symbol}");

        await Task.Delay(2000);

        Console.WriteLine($"Stock Price Update,{symbol},${currentPrice}");

        return "Stock Data";
    }

    public override async Task<string> GetStatusAsync()
    {
        await Task.Delay(100);

        string status =
            $"Stock Service Status,Requests:{requestCount}";

        Console.WriteLine(status);

        return status;
    }
}

// ---------------- MAIN CLASS ----------------
class Program
{
    static async Task Main()
    {
        string serviceType = Console.ReadLine().Trim();
        string identifier = Console.ReadLine().Trim();
        string command = Console.ReadLine().Trim();

        AsyncService service;

        if (serviceType.Equals("Weather",
            StringComparison.OrdinalIgnoreCase))
        {
            service = new WeatherService(identifier);
        }
        else
        {
            service = new StockService(identifier);
        }

        if (command == "FetchDataAsync")
        {
            await service.FetchDataAsync(identifier);
        }
        else if (command == "GetStatusAsync")
        {
            await service.GetStatusAsync();
        }
    }
}