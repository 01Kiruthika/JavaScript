// debugger;


let calculateage = () => {
    // alert("Welcome")
    // debugger;
    let dob = document.getElementById("dob");
    let dob_value = dob.value

    if (dob_value === "") {
        alert("Invaild,Please select your  Date of Birth!!");

    }


    // console.log(dob_value)
    let date = new Date(dob_value)
    let current_date = new Date()
    // console.log(date)

    let year = current_date.getFullYear() - date.getFullYear()
    // console.log("year",year)
    let month = Math.abs(current_date.getMonth() - date.getMonth())
    // console.log("month",month)
    let days = current_date.getDate() - date.getDate()
    // console.log("Date",Date1)
    //  debugger;
    // if (days < 0) {
    //     console.log("your Age is ", year, " years ", month, " months ", days, " Days Completed");
    // } else {
    //     console.log("your Age is ", year, " years ", month, " months ", days, " Days Remaining.");
    // }

    console.log("your Age is ", year, " years ", month, " months ", days, " Days");



}






