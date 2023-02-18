const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafo,
    pid,
    input
});

h1.innerHTML = 'Patito <br> Feo'; //interpreta el HTML
h1.innerText = 'Patito <br> Feo'; //interpreta como texto

console.log(h1.getAttribute('class'));
h1.setAttribute('class','rojo');

h1.classList.add('azul');
h1.classList.remove('verde');

input.value = "123";

pid.innerHTML = ""

const img = document.createElement('img');
img.setAttribute('src','https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680');
img.setAttribute('Height',200);
img.setAttribute('With',200);
console.log(img);

pid.append(img);