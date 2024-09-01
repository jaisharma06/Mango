public class Person 
{
    private int age;
    
    public virtual void DisplayAge()
    {
        Console.WriteLine($"Age: {age}");
    }
}

interface Salaried
{
    public float Salary {get; set;}
    public void DisplaySalary();
}

public class MathTeacher : Person, 
{
    public int ReverseNumber(int number)
    {
        int reversedNumber = 0;
        int numberClone = number;
        while(numberClone > 0)
        {
            reversedNumber = (reversedNumber * 10) + numberClone % 10;
            numberClone /= 10;
        }
        return reversedNumber;
    }
}

public class Footballer : Person 
{
    private string team;

    public void DisplayTeam()
    {
        Console.WriteLine($"Team: {team}");
    }

}

public class Businessman : Person
{
    
}


/*
109
1. 109 % 10 = 9 numberRev = 0 * 10 + 9 number = 10
2. 10 % 10 = 0 numberRev = 9 * 10 + 0 number = 1
3. 1 % 10 = 1 numberRev = 90*10 + 1 number = 0
*/