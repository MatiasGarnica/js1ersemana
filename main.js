function sumar(numero1, numero2){
    num1 = parseFloat(numero1);
    num2 = parseFloat(numero2);

    operacion = num1 + num2;
    console.log(resultado);
    document.getElementById("resultado").innerHTML = operacion;
}
function restar(numero1, numero2){
    num1 = parseFloat(numero1);
    num2 = parseFloat(numero2);

    operacion = num1 - num2;
    console.log(resultado);
    document.getElementById("resultado").innerHTML = operacion;
}
function dividir(numero1, numero2){
    num1 = parseFloat(numero1);
    num2 = parseFloat(numero2);

    operacion = num1 / num2;
    console.log(resultado);
    document.getElementById("resultado").innerHTML = operacion;
}
function multiplicar(numero1, numero2){
    num1 = parseFloat(numero1);
    num2 = parseFloat(numero2);

    operacion = num1 * num2;
    console.log(resultado);
    document.getElementById("resultado").innerHTML = operacion;
}
function Operacion(numero1, numero2, operacion){
    num1 = parseFloat(numero1);
    num2 = parseFloat(numero2);
    switch(operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operacion NO válida";
        
    }

    document.getElementById("resultado").innerHTML = resultado

}