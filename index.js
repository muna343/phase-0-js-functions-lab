function calculateTax(amount){
    let taxValue = amount * 0.1

    return taxValue
}



console.log("tax value returned", calculateTax(1000))


function convertToUpperCase(text){
    
    return text.toUpperCase()
}

console.log("convert to uppercase", convertToUpperCase("Muna"))


function findMaximum(num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}

console.log("maximum number is", findMaximum(10, 20))


function isPalindrome(word){
    if(word === word.split("").reverse().join("")){
        return true
    }else{
        return false
    }
}

console.log("is palindrome", isPalindrome("word"))


function calculateDiscountedPrice(originalPrice, discountPercentage){
    let discountAmount = originalPrice * (discountPercentage / 100)
    let discountedPrice = originalPrice - discountAmount

    return discountedPrice
}

console.log("discounted price is", calculateDiscountedPrice(1000, 20))


//This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };