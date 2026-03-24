//Arithmetic operations
// INSTANCE ON CART OBJECT
let cart = {
    items: [
        { name: "Laptop", price: 1000, quantity: 1 },
        { name: "Headphones", price: 200, quantity: 2 },
        { name: "Mouse", price: 50, quantity: 1 }
    ]
}
//Build a script that calculates the total price of items in an e-commerce cart.

function calculateTotalPrice(cart) {
    let totalPrice = 0;
    for (let item of cart) {
        totalPrice += item.price * item.quantity;
    }
    return totalPrice;
}

//Calculate the discounted price when a user applies a 10% coupon.

function applyDiscount(totalPrice, discountPercentage) {
    const discountAmount = totalPrice * (discountPercentage / 100);
    return totalPrice - discountAmount;
}

// Create a program that calculates total bill including tax (18%) for an online store.
function calculateTotalBill(totalPrice) {
    const taxAmount = totalPrice * 0.18;
    return totalPrice + taxAmount;
}

// Build a BMI calculator for a health website.
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Create a monthly salary calculator after deducting tax.
function calculateMonthlySalary(annualSalary, taxPercentage) {
    const taxAmount = annualSalary * (taxPercentage / 100);
    const netAnnualSalary = annualSalary - taxAmount;
    return netAnnualSalary / 12;
}

// Calculate average rating from 5 user ratings on a product page.

function calculateAverageRating(ratings) {
    const totalRatings = ratings.reduce((sum, rating) => sum + rating, 0);
    return totalRatings / ratings.length;
}

// Create a shopping delivery charge calculator depending on order amount.
function calculateDeliveryCharge(orderAmount) {
    if (orderAmount < 50) {
        return 5; //for delivery below $50
    } else if (orderAmount >= 50 && orderAmount < 100) {
        return 2.5; //for delivery below $100 and above $50
    } else {
        return 0;//for delivery above $100
    }
}

// Build a simple interest calculator for a banking website.
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// Calculate the remaining balance after a user withdraws money.
function calculateRemainingBalance(initialBalance, withdrawalAmount) {
    return initialBalance - withdrawalAmount;
}

// Create a time converter that converts minutes into hours and minutes.
function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hours and ${remainingMinutes} minutes`;
}

// If-Else Statements (Decision Making)

// Create a login system that checks username and password.
function login(username, password) {
    const storedUsername = "user123";
    const storedPassword = "pass123";
    if (username === storedUsername && password === storedPassword) {
        console.log("Login successful!");
        return true;
    } else {
        console.log("Invalid username or password.");
        return false;
    }
}

// Build a website age restriction check (block users under 18).
function checkAgeRestriction(age) {
    if (age < 18) {
        console.log("Access denied. You must be at least 18 years old.");
        return false;
    } else {
        console.log("Access granted. Welcome!");
        return true;
    }
}

// Create a discount system for an online store:
// ○ Order > $100 → 10% discount
// ○ Order > $200 → 20% discount

function calculateDiscount(orderAmount) {
    if (orderAmount > 200) {
        return orderAmount * 0.20; // 20% discount
    } else if (orderAmount > 100) {
        return orderAmount * 0.10; // 10% discount
    } else {
        return 0; // No discount
    }
}

// Check if a student gets grade A, B, C, or Fail based on marks.
function calculateGrade(marks) {
    if (marks >= 90) {
        return "Grade A";
    } else if (marks >= 80) {
        return "Grade B";
    } else if (marks >= 60) {
        return "Grade C";
    } else {
        return "Fail";
    }
}

// Build a weather advisory system (hot, cold, rainy).
function weatherAdvisory(temperature) {
    if (temperature >= 30) {
        console.log("It's hot outside. Stay hydrated!");
    } else if (temperature >= 15 && temperature < 30) {
        console.log("The weather is pleasant. Enjoy your day!");
    } else if (temperature >= 0 && temperature < 15) {
        console.log("It's cold outside. Wear warm clothes!");
    } else {
        console.log("It's freezing! Stay indoors and keep warm!");
    }
}
