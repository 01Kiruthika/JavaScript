//task=1
debugger;
for (let r = 1; r <= 10; r++) {
    if (r % 2 == 0) {
        document.writeln('0')
    } else {
        document.writeln('1')
    }
    document.writeln('<br>')

}
document.writeln('<br>')


//task=2
debugger;
for (let r = 1; r <= 10; r++) {
    if (r % 2 != 0) {
        document.writeln('0')
    } else {
        document.writeln('1')
    }
    document.writeln('<br>')

}
document.writeln('<br>')

//task=3
debugger;
for (let r = 1; r <= 10; r++) {
    if (r % 2 == 0) {
        document.writeln('O')
    } else {
        document.writeln('E')
    }
    document.writeln('<br>')

}
document.writeln('<br>')

//task=4
debugger;
for (let r = 1; r <= 5; r++) {
    for (let c = 1; c <= 5; c++) {
        document.writeln('*')
    }
    document.writeln('<br>')

}
document.writeln('<br>')

//task=5
debugger;
for (let r = 1; r <= 5; r++) {
    for (let c = 1; c <= 5; c++) {
        document.writeln(r)
    }
    document.writeln('<br>')

}
document.writeln('<br>')

//task=6
debugger;
for (let r = 1; r <= 5; r++) {
    for (let c = 1; c <= 5; c++) {
        document.writeln(c)
    }
    document.writeln('<br>')

}
document.writeln('<br>')


//task=7
for (let r = 1; r <= 5; r++) {
    for (let c = 1; c <= r; c++) {
        document.writeln(c)
    }
    document.writeln("<br>")
}
document.writeln("<br>")

//task=8
for (let r = 1; r <= 5; r++) {
    for (let c = 1; c <= r; c++) {
        document.writeln(r)
    }
    document.writeln("<br>")
}
document.writeln("<br>")



//task=9
debugger;
for (let r = 1; r <= 5; r++) {
    for (let c = 1; c <= r; c++) {
        document.writeln('*')
    }
    document.writeln('<br>')

}
document.writeln('<br>')

//task=10
debugger;
for (let r = 5; r >= 1; r--) {
    for (let c = 5; c >= r; c--) {
        document.writeln(r)
    }
    document.writeln('<br>')

}
document.writeln('<br>')

//task=11
debugger;
for (let r = 5; r >= 1; r--) {
    for (let c = 5; c >= r; c--) {
        document.writeln(c)
    }
    document.writeln('<br>')

}
document.writeln('<br>')

//task=12
debugger;
for (let r = 1; r <= 5; r++) {
    for (let c = 5; c >= r; c--) {
        document.writeln(c)
    }
    document.writeln('<br>')

}
document.writeln('<br>')

//task=13
debugger;
for (let r = 1; r <= 5; r++) {
    for (let c = 5; c >= r; c--) {
        document.writeln(r)
    }
    document.writeln('<br>')

}
document.writeln('<br>')



//task=14
debugger;
for (let r = 1; r <= 5; r++) {
    for (let c = 5; c >= r; c--) {
        document.writeln('*')
    }
    document.writeln('<br>')

}
document.writeln('<br>')

//task-15
debugger;
for (let r = 5; r >= 1; r--) {
    for (let c = 1; c <= r; c++) {
        document.writeln("&nbsp;&nbsp;")
    }

    for (let k = r; k <= 5; k++) {
        document.writeln(r)
    }

    document.writeln("<br>")
}
document.writeln("<br>")

//task-16
debugger;
for (let r = 5; r >= 1; r--) {
    for (let c = 1; c <= r; c++) {
        document.writeln("&nbsp;&nbsp;")
    }

    for (let k = r; k <= 5; k++) {
        document.writeln('#')
    }

    document.writeln("<br>")
}
document.writeln("<br>")

//task-17
debugger;
for (let r = 1; r <= 5; r++) {
    for (let c = 1; c <= r; c++) {
        document.writeln("&nbsp;&nbsp;")
    }

    for (let k = r; k <= 5; k++) {
        document.writeln('*')
    }

    document.writeln("<br>")
}
document.writeln("<br>")

//task-18
debugger;
for (let r = 1; r <= 5; r++) {
    for (let c = 1; c <= r; c++) {
        document.writeln("&nbsp;&nbsp;")
    }

    for (let k = r; k <= 5; k++) {
        document.writeln(r)
    }

    document.writeln("<br>")
}
document.writeln("<br>")

//task-19
debugger;
for (let r = 1; r <= 5; r++) {
    let k = (r * 2) - 1
    for (let c = 1; c <= k; c++) {
        document.writeln("*")
    }
    document.writeln("<br>")

}
document.writeln("<br>")


//task-20
debugger;
for (let r = 5; r >= 1; r--) {
    let k = (r * 2) - 1
    for (let c = 1; c <= r; c++) {
        document.writeln("&nbsp&nbsp")
    }

    for(let i=k;i<=9;i++){
        document.writeln("*")
    }
    document.writeln("<br>")

}

