var numero =  195;
var nombre = "Ignacio";

if(numero>5 || nombre=="Ignacio"){
    console.log("Verdadero");
}
else{
    console.log("Falso");
}

var concatenacion = nombre + " " + numero;

var datos = document.getElementById("datos")
datos.innerHTML = `
    <h1>Soy la Caja</h1>
    <h2>Mi nombre es ${nombre}
    <h3> Mi edad supera la cantidad de ${numero}
`;

if(numero>=190){
    datos.innerHTML = '<h1>Eres una persona alta';
}

const id = prompt("Ingrese el id del elemento que desea cambiar");
const texto = prompt("Ingrese el texto que desea cambiar");
const elemento = document.getElementById(id);
elemento.innerText = texto;
