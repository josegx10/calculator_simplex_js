import { LinkedList } from "./LinkedList.js";

//Declarando variables a partir de los botones
const inputOperation = document.getElementById("inputOperation");
const inputResult = document.getElementById("inputResult");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button0 = document.getElementById("button0");
const buttonAdd = document.getElementById("buttonAdd");
const buttonSubtract = document.getElementById("buttonSubtract");
const buttonMultiply = document.getElementById("buttonMultiply");
const buttonDivide = document.getElementById("buttonDivide");
const buttonDelete = document.getElementById("buttonDelete");
const buttonEqual = document.getElementById("buttonEqual")
//Inicializando la lista enlazada sin atributos
const list = new LinkedList();

//Declarando las acciones de los botones
button1.addEventListener("click", function() { inputOperation.value += "1" });
button2.addEventListener("click", function() { inputOperation.value += "2" });
button3.addEventListener("click", function() { inputOperation.value += "3" });
button4.addEventListener("click", function() { inputOperation.value += "4" });
button5.addEventListener("click", function() { inputOperation.value += "5" });
button6.addEventListener("click", function() { inputOperation.value += "6" });
button7.addEventListener("click", function() { inputOperation.value += "7" });
button8.addEventListener("click", function() { inputOperation.value += "8" });
button9.addEventListener("click", function() { inputOperation.value += "9" });
button0.addEventListener("click", function() { inputOperation.value += "0" });
buttonAdd.addEventListener("click", function() { inputOperation.value += "+" });
buttonSubtract.addEventListener("click", function() { inputOperation.value += "-" });
buttonMultiply.addEventListener("click", function() { inputOperation.value += "*" });
buttonDivide.addEventListener("click", function() { inputOperation.value += "/" });
buttonDelete.addEventListener("click", function() { inputOperation.value = inputOperation.value.substring(0, inputOperation.value.length - 1) });
buttonEqual.addEventListener("click", function() { getResult() });

const printNode = (node) => console.log(node.value);
// funcion para resolver la operación 

function getResult() {
    postLinkedList();
    list.traverse(printNode);

    inputResult.value = Calc();
    list.head = null;
}

function postLinkedList() {
    const operation = inputOperation.value.trim();
    let number = ""
    const num = operation.length
    for (let i = 0; i < num; i++) {
        const char = operation[i]
        if(!isNaN(char)){
            number += char;
        }else if( ["+", "-", "*", "/"].includes(char) ){
            if(number.length != 0){
                list.append(number)
                list.append(char)
                number = "";
            }else {
                alert("estas intentando iniciar con un simbolo en vez de un numero o tienes dos simbolos pegados a la vez");
                return false;
            }
        }else {
            alert("estas intentando poner otro simbolo que no vale");
            return false;
        }
        
    }
    if(number.length != 0){
        list.append(number);
    }else {
        alert("No hay un número al final");
        return false;
    }
    
}
function Calc() {
    return "Todavia no hay operacion"
}

/*
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

list.traverse(printNode);
*/