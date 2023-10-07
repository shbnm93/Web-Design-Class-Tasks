class Calculate {
  constructor() {}

  addTwoNumbers(num1, num2) {
    num1 = this.convertToNumber(num1);
    num2 = this.convertToNumber(num2);
    console.log(num1 + num2);
  }

  subtractTwoNumbers(num1, num2) {
    num1 = this.convertToNumber(num1);
    num2 = this.convertToNumber(num2);
    console.log(num1 - num2);
  }

  divideTwoNumbers(num1, num2) {
    num1 = this.convertToNumber(num1);
    num2 = this.convertToNumber(num2);

    if (num2 === 0) {
      console.log("Cannot divide by zero.");
    } else {
      console.log(num1 / num2);
    }
  }

  multiplyTwoNumbers(num1, num2) {
    num1 = this.convertToNumber(num1);
    num2 = this.convertToNumber(num2);
    console.log(num1 * num2);
  }

  calculateRemainder(num1, num2) {
    num1 = this.convertToNumber(num1);
    num2 = this.convertToNumber(num2);

    if (num2 === 0) {
      console.log("Cannot calculate remainder when the divisor is zero.");
    } else {
      console.log(num1 % num2);
    }
  }

  convertToNumber(number) {
    console.log(typeof number);
    if (typeof number === "number") return number;
    number = parseInt(number);
    if (!isNaN(number)) return number;
    return 0;
  }
}

var calculate = new Calculate();
calculate.addTwoNumbers("20", "30"); 
calculate.subtractTwoNumbers("20", "30"); 
calculate.divideTwoNumbers("20", "0"); 
calculate.multiplyTwoNumbers("20", "30"); 
calculate.calculateRemainder("20", "7"); 
