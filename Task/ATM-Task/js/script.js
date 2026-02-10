function create_Account() {
    //debugger;
    account_holder_name = prompt("Enter the Account Holder Name?")
    account_number = prompt("Enter the Account Number?")
    amount = parseInt(prompt("Enter the Initial Amount?"))
    alert("Account Created Successfully!!!")
}



function deposit_Amount() {
    //debugger;
    let account = prompt("Enter the Account Number?")
    if (account_number == account) {
        alert("Account Number is Correct!!")
        let deposit_amt = parseInt(prompt("Enter your Deposit Amount?"))
        if(deposit_amt==0){
            alert("Invaild,0 Amount Not Accepted")
        }
        else if(deposit_amt<0){
            alert("Invaild,Negative Amount Not Accepted")
        }
        else{
            amount += deposit_amt
            alert("Amount Deposit Succesfully!!")
        }
        
    } else {
        alert("Account Number is Mismatch!!!")
    }
}


function withdraw() {
   // debugger;
    let account_no = prompt("Enter the Account Number?")
    if (account_number == account_no) {
        alert("Account Number is Correct!!")
        let withdraw_amount = prompt("Enter your Withdraw Amount?")
        if(withdraw_amount==0){
            alert("Invaild,0 Amount Not Accepted")
        }
        else if(withdraw_amount<0){
            alert("Invaild,Negative Amount Not Accepted")
        }
        else if(amount >= withdraw_amount){
          amount -= withdraw_amount
          alert("Your Amount is Withdraw Successfully !!!!")
        }
        else{
            alert("The Amount is Insufficient!!!,,Please check your Balance Amount!!")
        }
    } 
    else {
        alert("Account Number is Mismatch!!!")
    }



}

function account_details() {
    //debugger;
    console.log("Account Details")
    console.log("================"  )
    console.log("Account Holder Name:", account_holder_name)
    console.log("Account Number:", account_number)
    console.log("Total Amount:", amount)
    console.log("================= ")


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