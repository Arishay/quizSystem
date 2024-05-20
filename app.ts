#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.cyanBright("\n\t Welcome to -__- Arisha Ghaffar's -__- Quiz System\n"));


let quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
        name:"question_1",
        type:"list",
        message:"Which character is commonly allowed in variables names in TypeScript?",
        choices:["$","@","#","&"]
    },
    {
        name:"question_2",
        type:"list",
        message:"TypeScript can always correctly infer a variables type",
        choices:["True","False"]
    },
    {
        name:"question_3",
        type:"list",
        message:"Type Aliases are mostly used with ______",
        choices:["string","numbers","booleans"]
    },
    {
        name:"question_4",
        type:"list",
        message:"Numeric enums first value is defaulted to______",
        choices:["1","9", "5", "0"]
    },
    {
        name:"question_5",
        type:"list",
        message:"_____ is a return type for when nothing is returned.",
        choices:["unknown","void","any[]","any"]
    }
]);

let score:number = 0;

//using switch case
switch (quiz.question_1) {
    case "$":
       console.log(chalk.bold.grey("1.correct"));
        ++score;
        break;

    default:
        console.log(chalk.bold.grey("1.Incorrect"));
        
        break;
}
switch (quiz.question_2) {
    case "False":
       console.log(chalk.bold.red("2.correct"));
        ++score;
        break;

    default:
        console.log(chalk.bold.red("2.Incorrect"));
        
        break;
}
switch (quiz.question_3) {
    case "string":
       console.log(chalk.bold.greenBright("3.correct"));
        ++score;
        break;

    default:
        console.log(chalk.bold.greenBright("3.Incorrect"));
        
        break;
}
switch (quiz.question_4) {
    case "0":
       console.log(chalk.bold.blueBright("4.correct"));
        ++score;
        break;

    default:
        console.log(chalk.bold.blueBright("4.Incorrect"));
        
        break;
}
switch (quiz.question_5) {
    case "void":
       console.log(chalk.bold.yellowBright("5.correct"));
        ++score;
        break;

    default:
        console.log(chalk.bold.yellowBright("5.Incorrect"));
        
        break;
}
console.log(`Score: ${chalk.bold.cyanBright(score)}`);
