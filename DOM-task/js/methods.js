//getElementsByClassName(),innertext

let num = document.getElementsByClassName("name")

//console.log(num);

// console.log(num[0].innerText)
// console.log(num[1].innerText)
// console.log(num[2].innerText)
// console.log(num[3].innerText)
// console.log(num[4].innerText)

//Access through For loop
for (let i = 0; i <= 4; i++) {
    console.log(num[i].innerText)
}


//getElementsByTagName,innertext()

let Num = document.getElementsByTagName("h1")

// console.log(Num);


// console.log(Num[0].innerText)
// console.log(Num[1].innerText)
// console.log(Num[2].innerText)
// console.log(Num[3].innerText)
// console.log(Num[4].innerText)

//Access through For loop
for (let i = 0; i <= 4; i++) {
    console.log(Num[i].innerText)
}


//getElementsByClassName(),innerHTML

let box = document.getElementsByClassName("box")

console.log(box[0].innerHTML)


//QuerySelector
let Num1 = document.querySelector("#name1")

// console.log(Num1);

console.log(Num1.innerText)


//QuerySelectorAll
let a = document.querySelectorAll(".name")

// console.log(a)
// console.log(a[0].innerText)

//Access through For loop
for (let i = 0; i <= 4; i++) {
    console.log(a[i].innerText)
}





