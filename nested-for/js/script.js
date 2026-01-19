//1.
debugger;
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        document.writeln(j)
    }
    document.writeln("<br>")
}

document.writeln("<br>")

//2.
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        document.writeln(i)
    }
    document.writeln("<br>")
}
document.writeln("<br>")

 //3.
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        document.writeln('*')
    }
    document.writeln("<br>")
}

document.writeln("<br>")


//4.
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i % 2 == 0) {
            document.writeln('*')
        } else {
            document.writeln(i)
        }

    }
    document.writeln("<br>")
}

document.writeln("<br>")

//5.
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.writeln(j)
    }
    document.writeln("<br>")
}

document.writeln("<br>")

//6.
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.writeln('*')
    }
    document.writeln("<br>")
}

document.writeln("<br>")


//7.
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= 1; j--) {
        document.writeln(j)
    }
    document.writeln("<br>")
}

document.writeln("<br>")

//8.

for (let i = 5; i >= 1; i--) {
    for (let j = 5; j >= 1; j--) {
        document.writeln(i)
    }
    document.writeln("<br>")
}

document.writeln("<br>")

//9.
debugger;
for (let i = 5; i >= 1; i--) {
    for (let j = 5; j >= i; j--) {
        document.writeln(i)
    }
    document.writeln("<br>")
}

document.writeln("<br>")

//10.
debugger;
for (let i = 5; i >= 1; i--) {
    for (let j = 5; j >= i; j--) {
        document.writeln(j)
    }
    document.writeln("<br>")
}

document.writeln("<br>")

//11.
debugger;
for (let i = 5; i >= 1; i--) {
    for (let j = 5; j >= i; j--) {
        document.writeln('*')
    }
    document.writeln("<br>")
}

document.writeln("<br>")


//12.
debugger;
for(let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.writeln("&nbsp;&nbsp;")
    }

    for (let k = i; k <= 5; k++) {
        document.writeln(i)//'*'==>i
    }

    document.writeln("<br>")
}
document.writeln("<br>")



//13.
debugger;
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.writeln("&nbsp;&nbsp;")
    }
    for (let k = i; k <= 5; k++) {
        document.writeln(i)//'*'==>i
    }
    document.writeln("<br>")
}
 document.writeln("<br>")



//task 1

debugger;
for (let i = 1; i <= 5; i++) //row
{
    for (let j = 1; j <= 5; j++) //column
    {
        if ((j == 1 || j==5) || (i==1 || i==5) && (j!=1 && j!=5)) {
            document.writeln('*')
        }
        else{
            document.writeln("&nbsp;&nbsp;")
        }

    }
    document.writeln('<br>')
}
document.writeln('<br>')

//task-2
debugger;
for (let i = 1; i <= 5; i++) //row
{
    for (let j = 1; j <= 5; j++) //column
    {
        if ((j==1)|| (j == 2 || j==5) || (i==1 || i==5) && (j!=1 && j!=5)) {
            document.writeln('*')
        }
        else{
            document.writeln("&nbsp;&nbsp;")
        }

    }
    document.writeln('<br>')
}
document.writeln('<br>')



