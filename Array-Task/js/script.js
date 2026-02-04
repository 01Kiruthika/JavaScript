/* ---------- Case 1 ---------- */
function addStudents() {

    while (true) {
        // debugger;
        let name = prompt("Enter student name (type stop to end):");
        if (name === null || name === "stop") {
            break;
        }
        if (name === "") {
            alert("Name cannot be empty");
            continue;
        }
        students.push(name);
    }
    let [...sname] = students
    console.log("Students Name:", sname);

}

/* ---------- Case 2 ---------- */
function removeStudents() {
    // debugger;
    let n = Number(prompt("Enter number of students to remove:"));

    if (n <= 0) {
        alert("Invalid number");
        return;
    }

    for (let i = 0; i < n; i++) {
        if (students.length === 0) {
            alert("No more students to remove")
            break;
        } else {
            let removed = students.pop()
        }
    }
    console.log("Remaining Students:", students)
}

/* ---------- Case 3 ---------- */
function convertToString() {
    // debugger;
    let result = students.toString()
    console.log("Students as String:", result)

}


/* ---------- Case 4 ---------- */
function convertSeperator() {
    // debugger;
    let sep = prompt("Enter the Seperator:")
    let Result = students.join(sep)
    console.log("Using Seperator", Result)

}

/* ---------- Case 5 ---------- */
function generatename() {
    // debugger;
    if (students.length === 0) {
        alert("No students entered")
    } else {
        console.log("Student List:")
    }
    let slen = students.length
    for (let i = 0; i < slen; i++) {
        console.log((i+1) + ". " + students[i]);
    }


}

/* ---------- Case 6 ---------- */
function findindex() {
    // debugger;
    let Stu = prompt("Enter the student name to find Index:")
    console.log(students)
    let a = students.indexOf(Stu)
    console.log("Student Name:",Stu);
    console.log("Student Index Position:", a)

}


let students = []

isexit = true
while (isexit) {
    let op = Number(prompt(
        "Enter your choice:\n1. Add Students\n2. Remove Students\n3. Convert to String \n4.Seperator change \n5.Generate a Student List \n6.To find Index \n 7.Exit"
    ));
    switch (op) {
        case 1:
            addStudents();
            break;
        case 2:
            removeStudents();
            break;
        case 3:
            convertToString();
            break;
        case 4:
            convertSeperator();
            break;
        case 5:
            generatename();
            break;
        case 6:
            findindex();
            break;
        case 7:
            isexit = false
            break;
        default:
            console.log("Invalid Choice");
            break;
    }
}