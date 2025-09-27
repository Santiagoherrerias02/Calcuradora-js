/* Calculadora básica con JS
   - Soporta + - * / ^ √
   - Maneja errores (división por 0, raíz de negativo) */
let valor1 = 0;
let valor2 = 0;
let op = "";
let resetdisplay = false;
let total = 0;

// Referencia al display (guardala para no leer el DOM cada vez)
const displayEl = document.getElementById("display");
displayEl.innerText = "0";

// Referencias a botones (guardalas para no leer el DOM cada vez)
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
const btnOpDel = document.querySelector("#del");
const btnOpAc = document.querySelector("#ac");

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
            } else {
                return num1 / num2;
            }
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

/* Sincroniza las variables valor1 y valor2 con el contenido actual del display.*/
function asignarValor(){
    let display = displayEl.innerText;
    if(!op){
        valor1 = Number(display);
    } else {
        valor2 = Number(display);
    }
}

function handleDigit(e){
    const digit = e.target.innerText;
    if(displayEl.innerText === "0" || resetdisplay === true){
        displayEl.innerText = digit;
        resetdisplay = false;
    } else {
        displayEl.innerText += digit;
    }
    asignarValor();
}

[btnNum0, btnNum1, btnNum2, btnNum3, btnNum4, btnNum5, btnNum6, btnNum7, btnNum8, btnNum9]
    .forEach(btn => btn.addEventListener("click", handleDigit));

/* === MANEJO DE OPERADORES ===
   Si ya había un operador y el usuario ya escribió el 2do operando,
   hacemos el cálculo intermedio para permitir encadenar operaciones (2 + 3 + 4).
*/
function handleOperator(newOp) {
    if (op && !resetdisplay) {
        asignarValor();
        total = calcular(valor1, valor2, op);
        if (typeof total === "string" || !isFinite(total)) {
            displayEl.innerText = total;
            valor1 = 0; valor2 = 0; op = ""; resetdisplay = true;
            return;
        }
        valor1 = total;
        displayEl.innerText = total;
    } else {
        asignarValor();
    }
    op = newOp;
    resetdisplay = true;
}

btnOpSum.addEventListener("click", () => handleOperator("+"));
btnOpRes.addEventListener("click", () => handleOperator("-"));
btnOpDiv.addEventListener("click", () => handleOperator("/"));
btnOpMult.addEventListener("click", () => handleOperator("*"));
btnOpExp.addEventListener("click", () => handleOperator("^"));

/* RAÍZ: caso unario — conviene resolverlo inmediatamente (no esperar '=') */
btnOpRa.addEventListener("click", () => {
    asignarValor();
    const result = calcular(valor1, 0, "√");
    displayEl.innerText = result;
    if (typeof result === "number" && isFinite(result)) {
        valor1 = result;
    } else {
        // manejo de error
        valor1 = 0;
    }
    op = "";
    resetdisplay = true;
});

/* IGUAL: calculo final. Pongo resetdisplay = true para que un próximo número empiece nuevo. */
btnOpIgual.addEventListener("click", () => {
    asignarValor(); // asegura valor2 actualizado
    total = calcular(valor1, valor2, op);
    displayEl.innerText = total;
    if (typeof total === "number" && isFinite(total)) {
        valor1 = total;
    } else {
        // en caso de error textual como "Indefinido"
        valor1 = 0;
    }
    op = "";
    resetdisplay = true;
});

/* PUNTO: evitar múltiples puntos y respetar resetdisplay */
btnOpPunto.addEventListener("click", () => {
    if (resetdisplay) {
        displayEl.innerText = "0.";
        resetdisplay = false;
    } else if (!displayEl.innerText.includes(".")) {
        displayEl.innerText += ".";
    }
    asignarValor();
});

/* DELETE: actualiza display y sincroniza variables */
btnOpDel.addEventListener("click", () =>{
    let display = displayEl.innerText;
    if(display.length > 1){
        display = display.slice(0, -1);
    }else{
        display = "0";
    }
    displayEl.innerText = display;
    asignarValor(); // sincroniza valor1/valor2 con lo que quedó
});

/* AC: reinicio total del estado */
btnOpAc.addEventListener("click", () =>{
    displayEl.innerText = "0";
    total = 0;
    valor1 = 0;
    valor2 = 0;
    op = "";
    resetdisplay = false;
});
