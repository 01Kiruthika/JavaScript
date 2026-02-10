//1.Simple Calculator


let a = Number(prompt("Enter the value of a:"))
let b = Number(prompt("Enter the value of b:"))
let c = prompt("Enter the Operator:")

if( c=="+")// c=+ => + == + => true
{
    let z = a + b// a =10 ,b= 20 => Z = 10 + 20 => z=30
    console.log("Addition of two numbers",z)
}
else if( c =="-")// c=- => - == - => true
{
     let z = a - b
    console.log("subtraction of two numbers",z)

}
else if( c =="*")// c=* => * == * => true
{
     let z = a * b
    console.log("Multiplication of two numbers",z)

}
else if( c =="/")// c=/ => / == / => true
{
     let z = a / b
    console.log("Division of two numbers",z)

}
else if( c =="%")// c=% => % == % => true
{
     let z = a %  b
    console.log("Modulas of two numbers",z)

}
else{
    console.log("Invaild,Please Enter Correct value")
}


//2.Discount
 
 
 let num = Number(prompt("Enetr the Total Amount:"))

 if(num<=0){
    console.log("Please,Enter the Correct Amount")
 }

 else if(num>=100 && num<=200)
{
    let x = num * (10/100)// x = 150 * (10/100) => x = 150 * 0.1 => x=15
    let X = num - x
    console.log("The discount amount :",X)
}

else if(num>=201 && num<=300){
    let x = num * (20/100)// x = 250 * (20/100) => x = 250 * 0.2 => x=50
    let X = num - x
    console.log("The discount amount :",X)
}

else if(num>=301 && num<=400){
    let x = num * (30/100)// x = 380 * (30/100) => x = 380 * 0.3 => x=114
     let X = num - x
    console.log("The discount amount :",X)
}

else if(num>=401 && num<=500){
    let x = num * (40/100)// x = 420 * (40/100) => x= 420 * 0.4 => x=168
     let X = num - x
    console.log("The discount amount :",X)
}
else if (num > 500){
    let x = num * (50/100)// x = 550 * (50/100) => x = 550 * 0.5 => x=275
     let X = num - x
    console.log("The discount amount :",X)
}
else{
    console.log("Invalid")
}


//3. Circket



let y =prompt("Enter the Circket century:")
if(y==25)
{
   console.log("It is a Quatar Century")
}
else if(y==50)
{
   console.log("It is a Half Century")
}
else if(y==100)
{
   console.log("It is a Century")
}
else{
    console.log("Please,Enter the Correct Century")
}


//4.Biggest of 3 Numbers(Nested)



let i = Number(prompt("Enter the First Number:"))
let j = Number(prompt("Enter the Second Number:"))
let k = Number(prompt("Enter the Third Number:"))
if(i>j)
{
    if(i>k){
        console.log("First Number is the Biggest Number")
    }
    else{
        console.log("Third Number is the Biggest Number")
    }
}
else if (j>k)
{
    if(j>k){
         console.log("Second Number is the Biggest Number")
    }
    else{
        console.log("Third Number is the Biggest Number")
    }
}
else
{
    console.log("Third Number is the Biggest Number")
}

//5. Smallest of Three Numbers

let d = Number(prompt("Enter the First Number:"))
let e = Number(prompt("Enter the Second Number:"))
let f = Number(prompt("Enter the Third Number:"))
if(d<e)// d= 100 , e=50, f=5 ==> 100<50 =>false or d= 5 , e =50 , f= 100 => 5<50 => true
{
    if(d<f){
        console.log("First Number is the Smallest Number")
    }
    else{
        console.log("Third Number is the Smallest Number")
    }
}
else if (e<f)// d= 100 , e=50, f=5 ==> 50<5 =>false or d= 100 , e =15 , f= 40 => 15<40 => true
{
    if(e<f)
    {
         console.log("Second Number is the Smallest Number")
    }
    else{
        console.log("Third Number is the Smallest Number")
    }
}
else// d= 100 , e=50, f=5  =>true
{
    console.log("Third Number is the Smallest Number")
}
