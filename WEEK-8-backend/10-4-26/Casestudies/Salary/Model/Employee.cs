using Salary.Validation;   // ✅ REQUIRED

namespace Salary.Model
{
    public class Employee
    {
        [ValidMinSalary(10000)]
        public decimal MinSalary { get; set; }

        [ValidMaxSalary(100000)]
        public decimal MaxSalary { get; set; }

        [ValidPassword]
        public string Password { get; set; }
    }
}