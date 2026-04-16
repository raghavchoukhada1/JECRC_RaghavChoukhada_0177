using System.ComponentModel.DataAnnotations;

namespace Salary.Validation
{
    public class ValidMinSalaryAttribute : ValidationAttribute
    {
        private readonly double _minSalary;

        public ValidMinSalaryAttribute(double minSalary)
        {
            _minSalary = minSalary;
        }

        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value is decimal salary && (double)salary < _minSalary)
            {
                return new ValidationResult($"Salary must be at least {_minSalary}");
            }

            return ValidationResult.Success;
        }
    }
}