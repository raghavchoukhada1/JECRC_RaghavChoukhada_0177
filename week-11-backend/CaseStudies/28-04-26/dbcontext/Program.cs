using System.Diagnostics.Contracts;
using System.Dynamic;

public delegate void notify();
public class p
{
  public event notify on;
  void done()
    {
        Console.WriteLine("done");
        on?.Invoke();
    }
}
public class Program
{
    public static void Main(string[] args)
    {
        p obj = new p();
        obj.on += () => Console.WriteLine("event is raised");
        obj.done();
    }
}