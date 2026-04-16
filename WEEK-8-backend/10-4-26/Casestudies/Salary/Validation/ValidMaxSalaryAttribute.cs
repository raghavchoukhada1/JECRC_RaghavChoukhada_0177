using System.ComponentModel.DataAnnotations;

namespace Salary.Validation
{
    public class ValidMaxSalaryAttribute : ValidationAttribute
    {
        private readonly double _maxSalary;

        public ValidMaxSalaryAttribute(double maxSalary)
        {
            _maxSalary = maxSalary;
        }

        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value is decimal salary && (double)salary > _maxSalary)
            {
                return new ValidationResult($"Salary must be <= {_maxSalary}");
            }

            return ValidationResult.Success;
        }
    }
}