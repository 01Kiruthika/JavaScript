function create_Account() {
    debugger;
    account_holder_name = prompt("Enter the Account Holder Name?")
    account_number = prompt("Enter the Account Number?")
    amount = parseInt(prompt("Enter the Initial Amount?"))
    alert("Account Created Successfully!!!")
}



function deposit_Amount() {
    debugger;
    let account = prompt("Enter the Account Number?")
    if (account_number == account) {
        alert("Account Number is Correct!!")
        let deposit_amt = parseInt(prompt("Enter your Deposit Amount?"))
        amount += deposit_amt
    } else {
        alert("Account Number is Mismatch!!!")
    }
}


function withdraw() {
    debugger;
    let account_no = prompt("Enter the Account Number?")
    if (account_number == account_no) {
        alert("Account Number is Correct!!")
        let withdraw_amount = prompt("Enter your Withdraw Amount?")
        // amount+=deposit_Amount
        if (amount >= withdraw_amount) {
            amount-=withdraw_amount
            alert("Your Amount is Withdraw Successfully !!!! ")
        } else(
            alert("The Amount is Insufficient!!!,,Please deposit the Amount!!")
        )

    } else {
        alert("Account Number is Mismatch!!!")
    }



}

function account_details() {
    debugger;
    document.writeln("Account Details <br>")
    document.writeln("================  <br>")
    document.writeln("Account Holder Name:", account_holder_name, '<br>')
    document.writeln("Account Number:", account_number, ' <br>')
    document.writeln("Total Amount:", amount, '<br>')
    document.writeln("=================  <br>")
     document.writeln("<br>")

}


let account_holder_name;
let account_number;
let amount = 0
let isExit = true

while (isExit) {
    // debugger;
    let options = prompt("\n 1.Create Account. \n 2.Deposit Amount.\n 3.Withdraw. \n 4.Account Details.\n 5.Exit")
    switch (options) {
        case "1":
            create_Account()
            break;
        case "2":
            deposit_Amount()
            break;
        case "3":
            withdraw()
            break;
        case "4":
            account_details()
            break;
        case "5":
            isExit = false
            break;
        default:
            document.writeln("Invaild Options,,,Please Enter the Correct Options!!")
            break;

    }
}