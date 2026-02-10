let students = []
let Studentmark = () => {
    // alert("HELLO")
    debugger;
    let stname = document.getElementById("sname").value
    let tamilmark = document.getElementById("Tmark").value
    let engmark = document.getElementById("Emark").value
    let mathsmark = document.getElementById("Mmark").value
    let sciencemark = document.getElementById("Smark").value
    let socialmark = document.getElementById("Ssmark").value

     debugger;
    if (stname === "") {
        alert("Please Enter the Student Name!!!")
    } 
    else if (tamilmark === "") {
        alert("Please Enter the Tamil Mark!!!")
    }
     else if (engmark === "") {
        alert("Please Enter the English Mark!!!")
    } 
    else if (mathsmark === "") {
        alert("Please Enter the Maths Mark!!!")
    }
     else if (sciencemark === "") {
        alert("Please Enter the Science Mark!!!")
    }
     else if (socialmark === "") {
        alert("Please Enter the Social Science Mark!!!")
    }
    else{
        alert("Mark Submitted Sucessfully!!!")
    }

    students.push(stname, tamilmark, engmark, mathsmark, sciencemark, socialmark)



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

