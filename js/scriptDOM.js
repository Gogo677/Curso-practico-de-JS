const h1 = document.querySelector("h1");
const fomr = document.querySelector("#form");
const calc1 = document.querySelector("#calculo1");
const calc2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

form.addEventListener('submit',btnCalcular);


function btnCalcular(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = calc1.value + calc2.value;
    resultado.innerText = 'Resultado: ' + sumaInputs;
}