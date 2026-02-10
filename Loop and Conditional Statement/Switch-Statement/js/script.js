//Switch Satement Simple Calculator

let a = Number(prompt("Enter the value of a:"))
let b = Number(prompt("Enter the value of b:"))
let option = prompt("Enter the Option \n 1. Addition. \n 2.Subtraction. \n 3.Multiplication. \n 4.Division \n 5.Modulus")

switch (option) {
    case "1":
    case "Addition":
        let z = a + b
        console.log("Addition of Two Numbers are :", z)
        break;
    case "2":
    case "Subtraction":
        let z1 = a - b
        console.log("Subtraction of Two Numbers:", z1)
        break;
    case "3":
    case "Multiplication":
        let z2 = a * b
        console.log("Multiplication of Two Numbers:", z2)
        break;
    case "4":
    case "Division":
        let z3 = a / b
        console.log("Division of Two Numbers:", z3)
        break;
    case "5":
    case "Modulus":
        let z4 = a + b
        console.log("Modulus of Two Numbers:", z4)
        break;
    default:
        console.log("Invaild,Please Enter the correct Options.")
        break;

}