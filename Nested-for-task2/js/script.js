// //task=01 Swap Two Numbers
// debugger;
// let a = Number(prompt("Enter the First Number:"))
// let b = Number(prompt("Enter the Second Number:"))
// document.writeln("Before Swaping <br> a=",a ,"&nbsp&nbsp b=",b)

//   a=a+b//a=15 b=10 ==> a=15+10==>25
//   b=a-b//b=25-10==>15
//   a=a-b//a=25-15==>10

// document.writeln('<br>')
// document.writeln("After Swaping <br> a=",a ,"&nbsp&nbsp b=",b)
// document.writeln('<br>')
// document.writeln('<br>')

// //task=02 Age Calculator
// debugger;
// let Birth_year = Number(prompt("Enter your Birth Year:"))
// let Current_year = Number(prompt("Enter the current Year:"))
// document.writeln("Your Birth year:  ",Birth_year)
// document.writeln('<br>')
// if(Birth_year>0){
//     let age = Current_year - Birth_year//2026-2004==>22
//     document.writeln("Your Current Age is  ",age)
// }
// else{
//     document.writeln("Invalid,Please Enter the Correct Birth year")
// }
// document.writeln('<br>')
// document.writeln('<br>')


// //task = 03  Number Reverse
// debugger;
// let num = Number(prompt("Enter the Number:"))
// let rev_num = 0
// let digit;
// document.writeln("Current Number is  ",num)
// document.writeln('<br>')
// while(num>0){
//     digit = num % 10
//     rev_num = rev_num * 10 + digit
//     num = parseInt(num/10)
// }
// document.writeln("Reverse Number is  ",rev_num)
// document.writeln('<br>')
// document.writeln('<br>')

// //task = 04  Factorial Number
// debugger;
// let fact_Number = Number(prompt("Enter the Factorial Number:"))
// let fact= 1
// for(let i=1;i<=fact_Number;i++){
//     fact = fact*i
// }
// document.writeln("Factorial of ",fact_Number," is ",fact)
// document.writeln('<br>')
// document.writeln('<br>')

// task = 05 Armstrong Number
debugger;
let Armstrong_Number = Number(prompt("Enter the Armstrong Number:")) 
let num = Armstrong_Number
let sum = 0
while(num){
    let digit = num % 10
    sum+=digit**3
    num = parseInt(num / 10)
}
if(sum==Armstrong_Number){
    document.writeln("It is a Armstrong Number",Armstrong_Number)
}
else{
    document.writeln("It is Not a Armstrong Number " , sum)
}
document.writeln('<br>')


// //task = 06 Fibonnacci Series
// debugger;
// let  Ending_Number = Number(prompt('Enter a Ending Number:'));

// let n1 = 0
// let n2 = 1
// let nextTerm = n1 + n2;
// document.writeln('Fibonnacci Series:',n1,'&nbsp',n2)

// while (nextTerm <= Ending_Number) {
//     document.writeln(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }
