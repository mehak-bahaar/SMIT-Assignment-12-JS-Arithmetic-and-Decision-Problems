# Assignment 12: JavaScript Calculations and Decision Making

This project contains a collection of JavaScript functions demonstrating basic arithmetic operations and conditional statements (if-else) for various real-world scenarios.

## Features

### Arithmetic Operations
- **Cart Total Calculation**: Calculates the total price of items in an e-commerce shopping cart
- **Discount Application**: Applies a percentage discount to a total price
- **Tax Calculation**: Calculates total bill including 18% tax
- **BMI Calculator**: Calculates Body Mass Index from weight and height
- **Monthly Salary Calculator**: Calculates net monthly salary after tax deduction
- **Average Rating**: Computes average rating from multiple user ratings
- **Delivery Charge Calculator**: Determines delivery charges based on order amount
- **Simple Interest Calculator**: Calculates simple interest for banking
- **Balance Calculator**: Calculates remaining balance after withdrawal
- **Time Converter**: Converts minutes to hours and minutes format

### Decision Making (If-Else Statements)
- **Login System**: Validates username and password
- **Age Restriction Check**: Blocks users under 18 years old
- **Discount System**: Applies tiered discounts based on order amount
- **Grade Calculator**: Assigns grades (A, B, C, or Fail) based on marks
- **Weather Advisory**: Provides weather recommendations based on temperature

## Prerequisites

- Node.js installed on your system

## How to Run

1. Clone or download this repository
2. Navigate to the project directory
3. Run the script using Node.js:

```bash
node index.js
```

Note: The functions are defined but not automatically executed. You may need to add console.log statements or function calls at the end of the file to see outputs.

## Usage Examples

```javascript
// Calculate cart total
let cart = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Headphones", price: 200, quantity: 2 }
];
console.log(calculateTotalPrice(cart)); // Output: 1400

// Apply discount
console.log(applyDiscount(1400, 10)); // Output: 1260

// Calculate BMI
console.log(calculateBMI(70, 1.75)); // Output: 22.857...

// Check login
login("user123", "pass123"); // Output: Login successful!
```

## Assignment Context

This is Assignment 12 from SMIT (Saylani Mass IT Training) program, focusing on fundamental JavaScript concepts including:
- Arithmetic operations
- Function definitions
- Conditional statements
- Basic algorithms for common calculations