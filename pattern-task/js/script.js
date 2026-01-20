// //task 

// debugger;
for (let r = 1; r <= 5; r++) //row
{
    for (let c = 1; c <= 5; c++) //column
    {
        if ((c == 1 || c == 5) || (r == 1 || r == 5) && (c != 1 && c != 5)) {
            document.writeln('#')
        } else {
            document.writeln("&nbsp;&nbsp;")
        }

    }
    document.writeln('<br>')
}
document.writeln('<br>')


//task-01
//debugger;
for (let r = 1; r <= 5; r++) //row
{
    for (let c = 1; c <= 5; c++) //column
    {
        if (c == 3 || r == 5) {
            document.writeln('#')
        } else if ((c == 2 && r == 2) || (c==1 && r==3)) {
            document.writeln('#')
        } else {
            document.writeln("&nbsp;&nbsp;")
        }

    }
    document.writeln('<br>')
}
document.writeln('<br>')


//task-02
//debugger;
for (let r = 1; r <= 5; r++) //row
{
    for (let c = 1; c <= 5; c++) //column
    {
        if (r % 2 != 0) {
            document.writeln('#')
        } 
        else if ((r == 2 && c == 5) || (r==4 && c==1)) {
            document.writeln('#')
        } 
        else {
            document.writeln('&nbsp;&nbsp;')
        }

    }
    document.writeln('<br>')
}
document.writeln('<br>')


//task-03
//debugger;
for (let r = 1; r <= 5; r++) //row
{
    for (let c = 1; c <= 5; c++) //column
    {
        if((r % 2 != 0) || c==5)  {
            document.writeln('#')
        } 
        else {
            document.writeln('&nbsp;&nbsp;')
        }

    }
    document.writeln('<br>')
}
document.writeln('<br>')


// task-04
// debugger;
for (let r = 1; r <= 5; r++) //row
{
    for (let c = 1; c <= 5; c++) //column
    {
        if (c == 3 || r == 3) {
            document.writeln('#')
        } else if ((c == 2 && r == 2) || (c==1 && r==3)) {
            document.writeln('#')
        } else {
            document.writeln("&nbsp;&nbsp;")
        }

    }
    document.writeln('<br>')
}
document.writeln('<br>')


//task-05
//debugger;
for (let r = 1; r <= 5; r++) //row
{
    for (let c = 1; c <= 5; c++) //column
    {
        if (r % 2 != 0) {
            document.writeln('#')
        } 
        else if ((r == 2 && c == 1) || (r==4 && c==5)) {
            document.writeln('#')
        } 
        else {
            document.writeln('&nbsp;&nbsp;')
        }
        
    }
    document.writeln('<br>')
}
document.writeln('<br>')


//task-06
//debugger;
for (let r = 1; r <= 5; r++) //row
{
    for (let c = 1; c <= 5; c++) //column
    {
        if(r==5 || r==3 || c==1 || r==1){
            document.writeln('#')
        }
        else if(r==4 && c==5){
            document.writeln('#')
        }
        else{
            document.writeln("&nbsp;&nbsp")
        }
        
    }
    document.writeln('<br>')
}
document.writeln('<br>')


// task-07
// debugger;
for (let r = 1; r <= 5; r++) //row
{
    for (let c = 1; c <= 5; c++) //column
    {
        if(c==5|| r==1){
            document.writeln('#')
        }
        else{
            document.writeln("&nbsp;&nbsp")
        }
        
    }
    document.writeln('<br>')
}
document.writeln('<br>')

//task-08
//debugger;
for (let r = 1; r <= 5; r++) //row
{
    for (let c = 1; c <= 5; c++) //column
    {
        if (r % 2 != 0) {
            document.writeln('#')
        } 
        else if ((r == 2 && c == 5) || (r==4 && c==1)) {
            document.writeln('#')
        } 
        else if((r==2 && c==1) || (r==4 && c==5)){
            document.writeln('#')
        }
        else {
            document.writeln('&nbsp;&nbsp;')
        }
        
    }
    document.writeln('<br>')
}
document.writeln('<br>')


//task-09
//debugger;
for (let r = 1; r <= 5; r++) //row
{
    for (let c = 1; c <= 5; c++) //column
    {
        if (r==1 || r==3 || c==5 || r==5) {
            document.writeln('#')
        } 
        else if ((r == 2 && c == 5)) {
            document.writeln('#')
        } 
        else if((r==2 && c==1) || (r==4 && c==5)){
            document.writeln('#')
        }
        else {
            document.writeln('&nbsp;&nbsp;')
        }
        
    }
    document.writeln('<br>')
}
document.writeln('<br>')


// // //task-10
// // debugger;
for (let r = 1; r <= 5; r++) //row
{
    for (let c = 1; c <= 6; c++) //column
    {
        if ((c == 1 || c==3 || c==6) ) {
            document.writeln('#')
        } 
       else if((r==5 && c==4) || (r==5 && c==5)|| (r==1 && c==4) || (r==1 && c==5)){
        document.writeln('#')
       }
        else {
            document.writeln("&nbsp;&nbsp;")
        }

    }
    document.writeln('<br>')
}
document.writeln('<br>')