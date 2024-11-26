import { LinkedList, Node } from "./LinkedList.js";

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
const buttonEqual = document.getElementById("buttonEqual");
//Enlaces para cambiar color
const Color1 = document.getElementById("Color1");
const Color2 = document.getElementById("Color2");
const Color3 = document.getElementById("Color3");
const Color4 = document.getElementById("Color4");
const Color5 = document.getElementById("Color5");
const root = document.documentElement;
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
//blue
Color1.addEventListener("click", function(){
    root.style.setProperty("--background", "#001c55");
    root.style.setProperty("--button", "#0a2472");
    root.style.setProperty("--calc", "#00072d");
    root.style.setProperty("--letter", "#a6e1fa");
    root.style.setProperty("--a", "#0e6ba8");
});
//black and while
Color2.addEventListener("click", function(){
    root.style.setProperty("--background", "#eef0f2");
    root.style.setProperty("--button", "#fafaff");
    root.style.setProperty("--calc", "#daddd8");
    root.style.setProperty("--letter", "#1c1c1c");
    root.style.setProperty("--a", "#0e6ba8");
});
//green
Color3.addEventListener("click", function(){
    root.style.setProperty("--background", "#053b06");
    root.style.setProperty("--button", "#139a43");
    root.style.setProperty("--calc", "#0b5d1e");
    root.style.setProperty("--letter", "#000000");
    root.style.setProperty("--a", "#0e6ba8");
});
Color4.addEventListener("click", function(){
    root.style.setProperty("--background", "#5b8266");
    root.style.setProperty("--button", "#294936");
    root.style.setProperty("--calc", "#3e6259");
    root.style.setProperty("--letter", "#aef6c7");
    root.style.setProperty("--a", "#0e6ba8");
});
Color5.addEventListener("click", function(){
    root.style.setProperty("--background", "#1a1d1a");
    root.style.setProperty("--button", "#26413c");
    root.style.setProperty("--calc", "#3e505b");
    root.style.setProperty("--letter", "#8ab0ab");
    root.style.setProperty("--a", "#0e6ba8");
});
const printNode = (node) => console.log(node.value);
// funcion para resolver la operación 

function getResult() {
    if(inputOperation.value === null) {
        alert('ingresa una operación')
        return ;
    }
    const error = postLinkedList();
    if(error === false) {
        list.head = null
        return;
    }
    list.traverse(printNode);

    inputResult.value = Calc();
    list.head = null;
}

// función para encontrar el simbolo de división o multiplicación
function getDivide_Multiply(nodo) {
    while(nodo != null){
        if(["/", "*"].includes(nodo.value)){
            return nodo;
        }
        nodo = nodo.next;
    }
    return true;
}

// función para obtener la operación dividida en la lista enlazada
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
    let nodo = list.head;
    let exist = true;

    if(nodo.next === null){
        return nodo.value;
    }

    while (nodo != null){
    
        if(exist){
            const getExist = getDivide_Multiply(nodo);
            if(getExist === true){
                exist = false;
            }else {
                nodo = getExist;
            }
        }
        if(["+", "-", "*", "/"].includes( nodo.value)){
            if(nodo.next === null){
                alert("le falta un número a la izquierda")
                return ;
            }
            if(nodo.previus === null){
                alert("le falta un número a la derecha")
                return ;
            }
            const num1 = Number.parseInt(nodo.previus.value);
            const num2 = Number.parseInt(nodo.next.value);
            let result = 0;
            if("*".includes(nodo.value)){
                
                result = num1 * num2;
            
            } else if("/".includes(nodo.value)){
                if(num2 === 0){
                    alert("No se puede dividir entre cero")
                    return ;
                }
                result = num1/num2;
            }else if("+".includes(nodo.value)){
            
                 result = num1 + num2;
                
            }else if("-".includes(nodo.value)){
            
                result = num1 - num2;

            } 
            const newNode = new Node(result.toString());

            const exit = changeNodo(newNode, nodo)

            if(exit){
                return newNode.value;
            }

            nodo = list.head;
        }
        
        nodo = nodo.next;

    }
    return "Todavia no hay operacion"
}
function changeNodo(newNode, nodo){
    if(nodo.previus.previus === null){
        list.head = newNode;
        if( nodo.next.next === null){
            return true;
        }else {
            newNode.next = nodo.next.next;
            nodo.next.next.previus = newNode;
        }

    }else {
        newNode.previus = nodo.previus.previus;
        nodo.previus.previus.next = newNode
        if(nodo.next.next != null){
            newNode.next = nodo.next.next;
            nodo.next.next.previus = newNode;
        }
    }


    return false;
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