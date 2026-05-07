using System;
using System.Collections.Generic;
using System.Linq;

class Student
{
    public string Name;
    public int[] Grades;

    public Student(string name, int[] grades)
    {
        Name = name;
        Grades = grades;
    }
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>();

        Console.Write("Enter number of students: ");
        int n = int.Parse(Console.ReadLine());

        // Input
        for (int i = 0; i < n; i++)
        {
            Console.WriteLine(
                "\nEnter Name and 4 grades:");

            string[] input = Console.ReadLine().Split();

            string name = input[0];

            int[] grades = new int[4];

            for (int j = 0; j < 4; j++)
            {
                grades[j] = int.Parse(input[j + 1]);
            }

            students.Add(new Student(name, grades));
        }

        Console.WriteLine("\n--- Student Grade Report ---\n");
        double highestAverage = 0;
        string topStudent = "";

        // Unique grades
        HashSet<int> uniqueGrades =
            new HashSet<int>();

        foreach (Student student in students)
        {
            double average =
                student.Grades.Average();

            int highest =
                student.Grades.Max();

            int lowest =
                student.Grades.Min();

            Console.WriteLine(
                $"{student.Name}: Average = {average:F2}, " +
                $"Highest = {highest}, Lowest = {lowest}");
            if (average > highestAverage)
            {
                highestAverage = average;
                topStudent = student.Name;
            }
            foreach (int grade in student.Grades)
            {
                uniqueGrades.Add(grade);
            }
        }
        Console.WriteLine(
            $"\nTop Performer: {topStudent} " +
            $"(Average: {highestAverage:F2})");

        // Students with all grades >= 80
        Console.WriteLine(
            "\nStudents with all grades >= 80:\n");

        foreach (Student student in students)
        {
            bool allAbove80 = true;

            foreach (int grade in student.Grades)
            {
                if (grade < 80)
                {
                    allAbove80 = false;
                    break;
                }
            }

            if (allAbove80)
            {
                Console.WriteLine(
                    $"{student.Name} " +
                    $"({string.Join(",", student.Grades)})");
            }
        }

        // Unique grades
        Console.WriteLine(
            "\nUnique Grade Values Across All Students:\n");

        List<int> sortedGrades =
            uniqueGrades.OrderBy(x => x).ToList();

        Console.WriteLine(
            string.Join(",", sortedGrades));

        Console.WriteLine(
            $"\nTotal unique grades: {uniqueGrades.Count}");
    }
}