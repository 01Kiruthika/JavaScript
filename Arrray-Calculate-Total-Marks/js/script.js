let students = []
let Studentmark = () => {
    // alert("HELLO")
    debugger;
    let stname = document.getElementById("sname").value
    let Tamilmark = document.getElementById("Tmark").value
    let Engmark = document.getElementById("Emark").value
    let Mathsmark = document.getElementById("Mmark").value
    let Sciencemark = document.getElementById("Smark").value
    let Socialmark = document.getElementById("Ssmark").value

     debugger;
    if (stname === "") {
        alert("Please Enter the Student Name!!!")
    } 
    else if (Tamilmark === "") {
        alert("Please Enter the Tamil Mark!!!")
    }
     else if (Engmark === "") {
        alert("Please Enter the English Mark!!!")
    } 
    else if (Mathsmark === "") {
        alert("Please Enter the Maths Mark!!!")
    }
     else if (Sciencemark === "") {
        alert("Please Enter the Science Mark!!!")
    }
     else if (Socialmark === "") {
        alert("Please Enter the Social Science Mark!!!")
    }
    else{
        alert("Mark Submitted Sucessfully!!!")
    }

    students.push(stname, Tamilmark, Engmark, Mathsmark, Sciencemark, Socialmark)



    let [stuName, ...marks] = students
    // console.log("Student Name: ", stuName);

    let sum = 0
    let total = (marks) => {
        // debugger;
        for (let elem of marks) {
            // console.log(elem)
            let element = Number(elem)
            sum += element

        }
        // console.log("Total Mark :", sum)
    }
    total(marks)


    let avg;
    let Average = (sum) => {
        // debugger;
        // console.log(sum)
        avg = sum / 5
        // console.log("Average Mark:", avg)

    }
    Average(sum)


    let STNAME = document.getElementById("stname")
    STNAME.innerText = "Student Name:  " + stuName;

    let TOTAL = document.getElementById("stotal")
    TOTAL.innerText = "Total Mark:  " + sum;

    let AVERAGE = document.getElementById("savg")
    AVERAGE.innerText = "Average:  " + avg;


}

// let field = document.getElementById('field')
// field.style.width = '00px'
// field.style.padding= '50px'
// field.style.width = '500px'
