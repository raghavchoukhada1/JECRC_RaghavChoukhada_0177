using System;

namespace LoanManagementSystem.Models
{
    public class PasswordResetOTP
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string OTP { get; set; }

        public DateTime ExpiryTime { get; set; }

        public bool IsUsed { get; set; }
    }
}