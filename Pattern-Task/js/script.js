//task=01
//debugger;
let count=1
for(let r=1;r<=5;r++){
    for(let c=1;c<=5;c++){
        document.writeln(count)
        count++
    }
    document.writeln('<br>')
}
document.writeln('<br>')



//task=02
//debugger;
let Count=1
for(let r=1;r<=5;r++){
    for(let c=1;c<=r;c++){
        document.writeln(Count)
        Count++
    }
    document.writeln('<br>')
}
document.writeln('<br>')



//task=03
//debugger;
for (let r = 1; r <=5; r++) 
{
    for (let c = 5; c >= r; c--) {
        document.writeln("&nbsp&nbsp")
    }

    for(let i=1;i<=r;i++){
        document.writeln(r,"&nbsp&nbsp")
    }
    document.writeln("<br>")
}
document.writeln('<br>')



// //task=04
// debugger;
// for(let r=1;r<=5;r++){
//     for(let c=1;c<=1;c++){
//         document.writeln('A')
//     }
//      for(let C=1;C<=1;C++){
//         document.writeln('B')
//     }
//      for(let B=1;B<=1;B++){
//         document.writeln('C')
//     }
//      for(let b=1;b<=1;b++){
//         document.writeln('D')
//     } 
//     for(let c1=1;c1<=1;c1++){
//         document.writeln('E')
//     }

//     document.writeln('<br>')
// }

//task=04
//debugger;
for (let r = 1; r <= 5; r++) {
    for (let c = 1; c <= 5; c++) {
        let num
        switch(c){
            case 1:
                document.writeln('A')
                break;
            case 2:
                document.writeln('B')
                break;
            case 3:
                document.writeln('C')
                break;
            case 4:
                document.writeln('D')
                break;
            case 5:
                document.writeln('E')
                break;

        }
         //document.writeln('<br>')
    }
    document.writeln('<br>')

}
document.writeln('<br>')

//task=06
//debugger;
for(let r=1;r<=5;r++){
    for(let c=1;c<=5;c++){
        let k=(r * c)
        document.writeln(k)
    }
    document.writeln('<br>')
}
document.writeln('<br>')


//task=07
debugger;
for(let r=1;r<=5;r++){
    for(let c=1;c<=5;c++){
        let k
        switch(r){
            case 1:
                 k=(c+10)
                 break;
             case 2:
                 k=(c+20)
                 break;
             case 3:
                 k=(c+30)
                 break;
             case 4:
                 k=(c+40)
                 break;
             case 5:
                 k=(c+50)
                 break;

        }
        document.writeln(k)
    }
    document.writeln('<br>')
}
document.writeln('<br>')


//task=08
//debugger;
for (let r = 1; r <= 5; r++) {
    for (let c = 1; c <= 8; c++) {

        if ((r == 5)||(r==1 && c==4) || ((r==2 && c==3) || (r==2 && c==5) ) || ((r==3 && c==2) || (r==3 && c==6) ) || ((r==4 && c==1) || (r==4 && c==7) )) 
        {
            document.writeln('*')
        } else {
            document.writeln("&nbsp&nbsp")
        }
    }
    document.writeln("<br>")
}
document.writeln('<br>')


//task=09
//debugger;
for(let r=1;r<=5;r++){
    for(let c=1;c<=5;c++){
        if(c<=r){
            document.writeln(r)
        }
        else{
            document.writeln('X')
        }
    }
    document.writeln('<br>')
}
document.writeln('<br>')


//task=10
for(let r=1;r<=10;r++){
    for(let c=1;c<=10;c++){
        //document.writeln('*')
        if((r==4 && c==5) || (r==3 && c==4) || (r==2 && c==3) || (r==3 && c==2) || (r==4 && c==2) || (r==5 && c==3) || (r==6 && c==4) || (r==7 && c==5)){
            document.writeln('* &nbsp')
        }
        else if((r==3 && c==6) || (r==2 && c==7) || (r==3 && c==8) || (r==4 && c==8) || (r==5 && c==7) || (r==6 && c==6)){
            document.writeln('* &nbsp')
        }
        else{
            document.writeln('&nbsp&nbsp&nbsp')
        }
    }
    document.writeln('<br>')
}
document.writeln('<br>')


//task=5
//debugger;
for (let r = 1; r <= 7; r++) {
    for (let c = 1; c <=4; c++) {
        if((c==2 && r==1) || (c==2 && r==7) ||(c==3 && r==1) || (c==3 && r==2) || (c==3 && r==6) || (c==3 && r==7) || (r==1 && c==4 ) || (r==2 && c==4 )|| (r==3 && c==4 )|| (r==5 && c==4 )|| (r==6 && c==4 ) || (r==7 && c==4 ) ){
            document.writeln('&nbsp&nbsp')
        }
        
        else{
            document.writeln('*')
        }
    }
    document.writeln('<br>')

}
document.writeln('<br>')