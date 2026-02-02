//  debugger;
let count = 0
let atc = document.getElementById("product-count")

let addtocart = () => {
    debugger;

    if (count < 10) {
        count++
        atc.innerText = count;
    } else {
        alert("Only Select 10 Products per day!!!")
    }
}

let addtocartdec = () => {
    debugger;
    if (count <= 0) {
        alert("Negative Numbers not accepted!!")
    } else {
        count--
        atc.innerText = count;
    }
}

let restbtn = () => {
    debugger;
    atc.innerText = 0;
    count = atc.innerText
}

let nav = document.getElementById("nav-bar")
nav.style.border = "2px solid black"
nav.style.backgroundColor= "green"
nav.style.position= "relative"
atc.style.color = "white"
atc.style.textAlign = "end"


let img1 = document.getElementById("imgs")
img1.setAttribute("width","300px")
img1.setAttribute("height","300px")
img1.style.margin = "20px"

let flow = document.getElementById("btn")
flow.style.textAlign = "center"
flow.style.margin = "20px"
flow.style.border = "2px solid"

let bt = document.getElementById("flo")
bt.style.margin = "20px"

let ico = document.getElementById("icon")
ico.style.width="40px"
ico.style.height="40px"
ico.style.position = "absolute"
ico.style.right = "22px"
ico.style.bottom = "20px"


