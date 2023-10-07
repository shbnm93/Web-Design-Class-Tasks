// function addTwoNumber(){

// }

// const plusTwoNumber=()=>{

// }

// function addTwoNumber(num1, num2) {
//   return num1 + num2;
// }

// var root = document.getElementById("root");
// var twoNumberAdded = addTwoNumber(20, 10);

// var div = document.createElement("div");
// div.innerText = twoNumberAdded;

// root.append(div);

// var twoNumberAdded2 = addTwoNumber(30, 20);
// var div = document.createElement("div");
// div.innerText = twoNumberAdded2;

// root.append(div);

// class Calculate {
//   constructor() {
//     alert("class run");
//   }
//   callAlert(){
//     alert('second alert')
//   }
// }

// var calculate = new Calculate()
// calculate.callAlert()

class Calculate {
  constructor() {}

  addTwoNumber(num1, num2) {
    num1 = this.convertToNumber(num1);
    num2 = this.convertToNumber(num2);
    console.log(num1 + num2);
  }

  convertToNumber(number) {
    console.log(typeof number);
    if (typeof number == "number") return number;
    number = parseInt(number);
    if (typeof number == "number") return number;
    return 0;
  }
}

var calculate = new Calculate();
calculate.addTwoNumber("20", "30");
