
using System;

// ---------------- BASE CLASS ----------------
class BankAccount
{
    // Readonly property
    public string accountNumber { get; }

    // Private setter for encapsulation
    public double balance { get; private set; }

    // Constructor
    public BankAccount(string accountNumber, double initialDeposit)
    {
        this.accountNumber = accountNumber;
        balance = initialDeposit;
    }

    // Deposit Method
    public virtual bool Deposit(double amount)
    {
        if (amount > 0)
        {
            balance += amount;
            return true;
        }

        return false;
    }

    // Withdraw Method
    public virtual bool Withdraw(double amount)
    {
        if (amount > 0 && amount <= balance)
        {
            balance -= amount;
            return true;
        }

        return false;
    }

    // Get Balance
    public double GetBalance()
    {
        return balance;
    }

    // Protected helper method
    protected void UpdateBalance(double newBalance)
    {
        balance = newBalance;
    }
}

// ---------------- SAVINGS ACCOUNT ----------------
class SavingsAccount : BankAccount
{
    public double interestRate;
    public double minimumBalance = 1000;

    public SavingsAccount(
        string accountNumber,
        double initialDeposit)
        : base(accountNumber, initialDeposit)
    {
    }

    // Override Withdraw
    public override bool Withdraw(double amount)
    {
        if (GetBalance() - amount < minimumBalance)
        {
            Console.WriteLine(
                $"Withdrawal Failed: Minimum balance requirement {minimumBalance}");

            return false;
        }

        return base.Withdraw(amount);
    }

    // Apply Interest
    public void ApplyInterest(double rate)
    {
        interestRate = rate;

        double interest =
            GetBalance() * interestRate / 100;

        UpdateBalance(GetBalance() + interest);

        Console.WriteLine(
            $"Interest Applied,Rate:{interestRate},New Balance:{GetBalance()}");
    }
}

// ---------------- CURRENT ACCOUNT ----------------
class CurrentAccount : BankAccount
{
    public double overdraftLimit;
    public double transactionFee;

    public CurrentAccount(
        string accountNumber,
        double initialDeposit,
        double overdraftLimit,
        double transactionFee)
        : base(accountNumber, initialDeposit)
    {
        this.overdraftLimit = overdraftLimit;
        this.transactionFee = transactionFee;
    }

    // Override Withdraw
    public override bool Withdraw(double amount)
    {
        if (GetBalance() - amount >= -overdraftLimit)
        {
            UpdateBalance(GetBalance() - amount);
            return true;
        }

        Console.WriteLine("Withdrawal Failed: Overdraft limit exceeded");
        return false;
    }

    // Deduct Transaction Fee
    public void DeductTransactionFee()
    {
        UpdateBalance(GetBalance() - transactionFee);

        Console.WriteLine(
            $"Fee Deducted,Amount:{transactionFee},Remaining:{GetBalance()}");
    }
}

// ---------------- MAIN CLASS ----------------
class Program
{
    static void Main()
    {
        string accountType = Console.ReadLine().Trim();

        string accNumber = Console.ReadLine().Trim();

        double initialDeposit =
            Convert.ToDouble(Console.ReadLine());

        BankAccount account;

        if (accountType.Equals("Savings",
            StringComparison.OrdinalIgnoreCase))
        {
            account = new SavingsAccount(
                accNumber,
                initialDeposit);
        }
        else
        {
            // Sample overdraft + fee
            account = new CurrentAccount(
                accNumber,
                initialDeposit,
                2000,
                100);
        }

        // Read operations until input ends
        while (true)
        {
            string input = Console.ReadLine();

            if (string.IsNullOrEmpty(input))
                break;

            string[] parts = input.Split();

            string operation = parts[0];

            if (operation == "Withdraw")
            {
                double amount =
                    Convert.ToDouble(parts[1]);

                bool success =
                    account.Withdraw(amount);

                if (success)
                {
                    Console.WriteLine(
                        $"Withdrawal Successful,Remaining:{account.GetBalance()}");
                }
            }
            else if (operation == "Deposit")
            {
                double amount =
                    Convert.ToDouble(parts[1]);

                bool success =
                    account.Deposit(amount);

                if (success)
                {
                    Console.WriteLine(
                        $"Deposit Successful,Balance:{account.GetBalance()}");
                }
            }
            else if (operation == "GetBalance")
            {
                Console.WriteLine(
                    $"Current Balance: {account.GetBalance()}");
            }
            else if (operation == "ApplyInterest"
                     && account is SavingsAccount sa)
            {
                double rate =
                    Convert.ToDouble(parts[1]);

                sa.ApplyInterest(rate);
            }
            else if (operation == "DeductTransactionFee"
                     && account is CurrentAccount ca)
            {
                ca.DeductTransactionFee();
            }
        }
    }
}