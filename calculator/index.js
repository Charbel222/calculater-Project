//Chalk
const chalk = require("chalk");

//prompt
let prompt = require("prompt-sync")();

let num1 = Number(prompt(chalk.yellow("Gib eine Nummer ein: ")));

let operator = prompt(chalk.yellow("Operator (+,-,*,/,%,**,proz,²) : "));

let num2 = Number(prompt(chalk.yellow("Gib zweite Nummer : ")));

class Calculator {
  constructor(num1, num2, operator) {
    this.num1 = num1;
    this.num2 = num2;
    this.operator = operator;
  }
  calc() {
    if (this.operator === "+") {
      return this.num1 + this.num2;
    } else if (this.operator === "-") {
      return this.num1 - this.num2;
    } else if (operator === "proz") {
      return (num1 / 100) * num2 + "%";
    } else if (this.operator === "/") {
      return this.num1 / this.num2;
    } else if (this.operator === "%") {
      return this.num1 % this.num2;
    } else if (this.operator === "*") {
      return this.num1 * this.num2;
    } else if (this.operator === "**") {
      return Math.pow(this.num1, this.num2);
    } else if (this.operator === "²") {
      return Math.sqrt(num1);
    } else if (isNaN(num1) || isNaN(num2)) {
      return `du musst  nummer eingeben`;
    } else {
      return `Fehler`;
    }
  }
}

const result = new Calculator(num1, num2, operator);
console.log(
  `${chalk.red("Ergebniss ist:")}  ${chalk.green(num1)} ${chalk.yellow(
    operator
  )} ${chalk.green(num2)} = ${chalk.bgRed(result.calc())}`
);

/*
 *  install chalk:       -- npm install chalk
 * version chalk:      -- npm i chalk@4.1.2
 * install prompt:   -- npm i prompt-sync
 */
