let body = document.getElementById("bg-color")
let clor = document.getElementById("color")
let clor1 = document.getElementById("color1");
let buttn = document.getElementById("btn")
let coloropt = document.getElementById("color-options")
let textlabel = document.getElementById("label")
let changecolor = () => {
    debugger;
    let direction = coloropt.value;
    //console.log(colour);

    let a = clor.value;
    let b = clor1.value;

    body.style.background = "linear-gradient(" + direction + ", " + a + ", " + b + ")";
}


clor.style.width = "100px"
clor1.style.width = "100px"
buttn.style.position = "absolute"
buttn.style.left = "370px"
buttn.style.top = "50px"
buttn.style.width = "70px"
buttn.style.background = "white"
coloropt.style.width = "100px"
coloropt.style.fontSize = "15px"
textlabel.style.color = 'white'
body.style.height = "100vh"

