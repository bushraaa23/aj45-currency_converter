#! /usr/bin/env node

import inquirer from "inquirer";

let conversion = {
    "PKR" : {
        "USD" : 0.0036,
        "GBP": 0.0037,
        "PKR": 1
    },

    "GBP":{
        "USD": 1.21,
        "PKR": 350,
        "GBP": 1
    },


    "USD": {
        "PKR":277.58,
        "GBP":0.83,
        "USD": 1
    }
}

const answer :{
    from : "PKR" | "USD" | "GBP",
    to : "PKR"  | "USD" |"GBP",


    amount: number 
}   = await  inquirer.prompt([

    {
        type : "list", 
        name : "from",
        choices: ["PKR","USD", "GBP"],
        message : "Select your currency.?"
    },
    {
        type: "list",
        name : "to",
        choices : ["PKR", "USD", "GBP"],
        message :"Select your conversion currency"

    },
// conversion amount
{
    type : "number",
    name : "amount",
    message : "Enter your conversion amount"
},
])

const { from , to , amount} = answer;

// check input in given program

if(from && to && amount){

    let result = conversion [from][to] * amount
    console.log(`your conversion from ${from} to $(to)is ${result}`);
    
}else {
    console.log('invalid, input');
    
}


