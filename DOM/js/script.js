let body = document.getElementById("bg-color")

let changecolor = () => {
    //alert("Hello")
    let clor = document.getElementById("color")
    let clor1 = document.getElementById("color1");

    let a = clor.value
    let b = clor1.value


    //console.log(clor.value)

    //body.style.background = clor.value
    body.style.background = "linear-gradient(to right, " + a + ", " + b + ")";
    //  body.style.background = "radial-gradient(closet-side at 60%, " + a + ", " + b + ")";


}

let changecolor1 = () => {
    //alert("Hello")
    let clor1 = document.getElementById("color1")
    let clor = document.getElementById("color");


    let a = clor.value
    let b = clor1.value

    //console.log(clor1.value)

    //body.style.background = clor1.value
    body.style.background = "linear-gradient(to right, " + a + ", " + b + ")";
    // body.style.background = "radial-gradient(closet-side at 60%, " + a + ", " + b + ")";
}