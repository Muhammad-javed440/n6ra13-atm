#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance=18000; //dollar
let myPin=1234;
let pinAnswer=await inquirer.prompt(
       [
        {
    name:"pin",
    message:"enter your pin",
    type:"number"

        }
       ]
    );

console.log(pinAnswer.pin);

if(pinAnswer.pin===myPin){
    console.log("correct pin code .");
    let operationAnswer=await inquirer.prompt(
        [
            {
        name:"operation",
        message:"please select option",
        type:"list",
        choices:['withdraw','check balance']

            } 
        ] 
    )
    console.log(operationAnswer.operation);
    if(operationAnswer.operation ==='withdraw'){
        let amountAns =await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount",
                    type:"list",
                    choices:['500','1000','3000','5000','7000','10000','15000','20000',]
                }
            ]
        )
        console.log(amountAns.amount);
        if(amountAns.amount>myBalance){
            console.log('Your balance is insufficient for this transaction. ');
            
            
        }else 
  
     myBalance -= amountAns.amount;
     console.log(`Your balance is: ${myBalance}`);
    }else{
        console.log(myBalance);
    }
   
}
else{
    console.log("incorrect pin code")
}