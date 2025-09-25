let valor1 = 0;
let valor2 = 0;
let op = "";

function calcular(num1, num2, op) {
    switch(op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0){
                return "Indefinido";
            }else{
            return num1 / num2;
            };
        case "^":
            return Math.pow(num1, num2);
        case "√":
            return Math.sqrt(num1);
        case "":
            return num1;
        default:
            return "Operación no valida";
    }
}

function asignarValor(valor){
    if(!op){
        valor1 = valor;
    }else{
        valor2 = valor;
    }
}

document.getElementById("display").innerText="0";

const btnNum0 = document.querySelector("#num0");
const btnNum1 = document.querySelector("#num1");
const btnNum2 = document.querySelector("#num2");
const btnNum3 = document.querySelector("#num3");
const btnNum4 = document.querySelector("#num4");
const btnNum5 = document.querySelector("#num5");
const btnNum6 = document.querySelector("#num6");
const btnNum7 = document.querySelector("#num7");
const btnNum8 = document.querySelector("#num8");
const btnNum9 = document.querySelector("#num9");
const btnOpSum = document.querySelector("#opSum");
const btnOpRes = document.querySelector("#opRes");
const btnOpDiv = document.querySelector("#opDiv");
const btnOpMult = document.querySelector("#opMult");
const btnOpExp = document.querySelector("#opExp");
const btnOpRa = document.querySelector("#opRa");
const btnOpIgual = document.querySelector("#opIgual");
const btnOpPunto = document.querySelector("#punto");
const btnOpDel = document.querySelector("#del")
const btnOpAc = document.querySelector("#ac");

btnNum0.addEventListener("click", (e) =>{
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum1.addEventListener("click", (e) =>{
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum2.addEventListener("click", (e) =>{
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum3.addEventListener("click", (e) =>{
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum4.addEventListener("click", (e) =>{
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum5.addEventListener("click", (e) =>{
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum6.addEventListener("click", (e) =>{
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum7.addEventListener("click", (e) =>{
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum8.addEventListener("click", (e) =>{
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnNum9.addEventListener("click", (e) =>{
    asignarValor(Number(e.target.innerText));
    document.getElementById("display").innerText= e.target.innerText;
});

btnOpSum.addEventListener("click", () =>{
    op = "+";
});

btnOpRes.addEventListener("click", () =>{
    op = "-";
});

btnOpDiv.addEventListener("click", () =>{
    op = "/";
});

btnOpMult.addEventListener("click", () =>{
    op = "*";
});

btnOpExp.addEventListener("click", () =>{
    op = "^";
});

btnOpRa.addEventListener("click", () =>{
    op = "√";
});

btnOpIgual.addEventListener("click", () =>{
    total = calcular (valor1, valor2, op);
    op = "";
    valor1 = total;
    document.getElementById("display").innerText = total;
});

btnOpPunto.addEventListener("click", () =>{
    document.getElementById("display").innerText = ".";
});

btnOpDel.addEventListener("click", () =>{
    
});

btnOpAc.addEventListener("click", () =>{
    document.getElementById("display").innerText = "0";
    total = 0;
    valor1 = 0;
    valor2 = 0;
    op = "";
});