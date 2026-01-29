//  debugger;
let count = 0
let atc = document.getElementById("product-count")

let addtocart = () => {
    debugger;

    if (count <= 10) {
        count++
        atc.innerText = count;
    } else {
        alert("Only Select 10 Products per day!!!")
    }
}

let addtocartdec = () => {
    debugger;
    if (count < 0) {
        alert("Negative Numbers!!")
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