function calculateBonus(salary: number, percentage: number): number 

{
    return (salary * percentage) / 100;
}

let bonus = calculateBonus(50000, 10);
console.log("Bonus Amount:", bonus);
