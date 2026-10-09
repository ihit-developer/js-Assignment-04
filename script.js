// Logical AND (&&) – Real Example
let age = 18;
let feePaid = true;
let result = age >= 18 && feePaid;
console.log(`You Are Allowed For Exam ${result}`);

// Logical OR (||) – Real Example
let emailCorrect = true;
let passwordCorrect = false;
let loginResult = emailCorrect || passwordCorrect;
console.log(loginResult);

// Logical NOT (!) – Real Example
let isBlocked = true;
let acess = !isBlocked;
console.log(acess);

// Combine Logical Operators
let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;
let discount = isLoggedIn && (isPremium || hasCoupon);
console.log(discount);
// Result is true because the user is logged in
// and has a coupon.
