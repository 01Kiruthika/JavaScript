//task=01

let pattern1 = () => {
    // debugger;
    for (let r = 1; r <= 5; r++) {
        for (let c = 5; c >= r; c--) {
            document.writeln("S")
        }
        document.writeln("<br>")
    }

}

let Pattern2 = () => {
    // debugger;
    for (let r = 1; r <= 5; r++) {
        for (let c = 5; c >= r; c--) {
            document.writeln(c)
        }
        document.writeln("<br>")
    }
}

let Pattern3 = () => {
    debugger;
    for (let r = 1; r <= 5; r++) {
        for (let c = 1; c <= r; c++) {
            document.writeln("&nbsp&nbsp")
        }
        for (k = r; k <= 5; k++) {
            document.writeln(k)
        }
        document.writeln("<br>")
    }
}

let options = prompt("Enter the Option:\n 1\n 2\n 3")

switch (options) {
    case "1":
        pattern1()
        break;
    case "2":
        Pattern2()
        break;
    case "3":
        Pattern3()
        break;
    default:
        document.writeln("Invaild,Please Enter the Correct Option.")
        break;
}


document.writeln("<br>")
document.writeln("<br>")


//task=2

// let total = (tamil, english, maths, science, social) => {
//     debugger;
//     let TOTAL = tamil + english + maths + science + social
//     return TOTAL
// }


// debugger;
// let StudentName = prompt("Enter the Student Name?")
// let tamil = Number(prompt("Enter your Tamil Mark:"))
// let english = Number(prompt("Enter your English Mark:"))
// let maths = Number(prompt("Enter your Maths Mark:"))
// let science = Number(prompt("Enter your Science Mark:"))
// let social = Number(prompt("Enter your Social Mark:"))

// let tot = total(tamil, english, maths, science, social)
// document.writeln(StudentName, " Mark Details <br>")
// document.writeln("=============== <br>")
// document.writeln("Your Tamil Mark: ", tamil, "<br>")
// document.writeln("Your English Mark: ", english, "<br>")
// document.writeln("Your Maths Mark: ", maths, "<br>")
// document.writeln("Your Science Mark: ", science, "<br>")
// document.writeln("Your Social Mark: ", social, "<br>")
// document.writeln("===============", "<br>")
// document.writeln("The Total Mark:", tot, "<br>")