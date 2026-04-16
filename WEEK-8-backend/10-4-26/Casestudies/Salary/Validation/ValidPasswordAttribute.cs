using System.ComponentModel.DataAnnotations;

namespace Salary.Validation
{
    public class ValidPasswordAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value is not string password)
                return new ValidationResult("Password is required");

            if (password.Length < 8)
                return new ValidationResult("Password must be at least 8 characters long");

            bool hasUpper = false;
            bool hasLower = false;
            bool hasDigit = false;
            bool hasSpecial = false;

            foreach (char c in password)
            {
                if (char.IsUpper(c)) hasUpper = true;
                else if (char.IsLower(c)) hasLower = true;
                else if (char.IsDigit(c)) hasDigit = true;
                else hasSpecial = true;
            }

            if (!hasUpper)
                return new ValidationResult("Password must contain uppercase letter");

            if (!hasLower)
                return new ValidationResult("Password must contain lowercase letter");

            if (!hasDigit)
                return new ValidationResult("Password must contain a number");

            if (!hasSpecial)
                return new ValidationResult("Password must contain a special character");

            return ValidationResult.Success;
        }
    }
}