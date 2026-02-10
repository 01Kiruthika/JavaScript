

//1.Given number is even or odd


let num = prompt("Enter a Number:")
if(num%2==0)//num=20 => 20%2 = 0 => 0==0 => true
{
    console.log("Even Number:",num)
}
else//num=15 => 15%2 = 1 =>1 ==0 => false
{
    console.log("Odd Number:",num)
}



// 2. Given number is Positive or negative


let NUM = prompt("Enter the Number:")
if(NUM<0)// NUM = -30 => -30 < 0 => true
{
    console.log("Number is Negative:",NUM)
}
else // NUM = 30 => 30 < 0 => false
{
     console.log("Number is Positive:",NUM)
}


//3.50% discount


let a = prompt("Enter the Total Amount:")
if(a>=100)// a = 150 => 150>=100 => true
{
    let b = a * (50/100)// b = 150 * (50/100) => b = 150 * 0.5 => b=75
    console.log("The discount amount :",b)
}
else// a = 50 => 50>=100 => false
{
    console.log("your Total Amount is:",a)
}
 

//4.x2+y2+2xy


let x = prompt("Enter the x vaule:")
let y = prompt("Enter the y value:")
if( x=="" && y=="")
{
    console.log("Please, Enter the Correct value of x and y")
   

}
else{
     let z = (x**2) + (y**2) + (2*x*y)
    console.log("The Formula x2+y2 answer is: ",z)
}


//5.2 pi r

 
let radius = prompt("Enter the radius of circle:")
if(radius!=0)
{
    let r = parseInt(2 * 3.14 * radius) //r=5 => 2*3.14*5 =>31
    console.log("The radius of circle is:",r)
}
else{
    console.log("Please, Enter the Correct value of the radius")
}


//6.pi * r2


let R = prompt("Enter the radius of circle:")
 if(R!=0)
 {
     let r1 = 3.14 * (R**2)//R=5 =>  R*R => 5*5=25 => 3.14*25 = 78.5
    console.log("The radius of circle is:",r1)
 }
 else
{
   console.log("Please, Enter the Correct value of the radius")
 }


//7. Biggest of two numbers

let A = prompt("Enter the number:")
let B = prompt("Enter the number:")
if(B>A)// A=50 ,B=100 => 100>50 => true
{
  console.log("B is the Biggest Number",B)
}
else
{
    console.log("A is the Biggest Number",A)
}


//8.Given number divided by 3 and 5


let i = prompt("Enter the Number:")
if(i%3==0 && i%5==0)// i=15 => 15%3=0 => 0==0 => true       15%5=0 => 0==0 =>true
{
  console.log("The Number is divided by 3 and 5.",i)
}
else// i=10 => 10%3=1 => 1==0 => false       10%5=0 => 0==0 =>true
{ 
    console.log("The Number is not  divided by 3 and 5.",i)
}
