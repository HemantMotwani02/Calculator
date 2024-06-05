//function to clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   //function to display values
   function display(value) {
    document.getElementById("result").value += value;
   }
   //function to evaluates the expression and return result
   function calculate() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
   }

