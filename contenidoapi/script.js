'use strict';
//---------------------DOM-----------------
//se utiliza el DOM para manipular el html desde javascript por el nombre que se puso en el id y siempre se utiliza document.getElementById.
const $p1 = document.getElementById('p1');
const $p2 = document.getElementById('p2');
const $l1 = document.getElementById('l1');
const $l2 = document.getElementById('l2');
const $f1 = document.getElementById('f1');
const $f2 = document.getElementById('f2');
const $b1 = document.getElementById('b1');

const variable='contenido  de una variable';
const arreglo = ['lulo', 'mora'];
const objeto={
    nombre: 'Juan',
    ciudad: 'Madrid',
};
//---------------------VARIABLES-----------------
$p1.textContent='contenido en javascript';
$p2.textContent=variable;//muestra el contenido de la variable en el html

let items = '';
//se utiliza un bucle for para recorrer el arreglo y mostrarlo en el html
for (let i = 0; i < arreglo.length; i++) {
    items += `<li>${arreglo[i]}</li>`;//muestra lo que esta en el arreglo y la posicion en forma de lista ordenada o desordenada segun este en el html
}

$l1.innerHTML=items;
$l2.innerHTML=`<li>${objeto.nombre}</li><li>${objeto.ciudad}</li>`;//muestra el nombre y la ciudad del objeto en forma de lista

/*---------------------API-----------------*/ 
//desde el fontend enviamos una peticion a la API y esta nos devuelve una respuesta desde el bakend en un formato json
//el fetch es una funcion  que permite hacer o enviar  peticiones a una API sea de terceros,fetch retorna un promesa
//el then() es un metodo que se ejecuta cuando la promesa se resuelve
//el catch() es un metodo que se ejecuta cuando la promesa se rechaza
//las promesas es un estado de la peticion, puede ser pendiente, resuelta=then o rechazada=catch
fetch("https://random-d.uk/api/v1/random")
.then((responsive) => {responsive.json()//convierte o esperala respuesta en un objeto json
.then((data) => {
    console.log('data:', data)
    $f1.innerHTML=`<img src="${data.url}"alt="${data.message}">
    <figcaption>${data.message}</figcaption>`;//muestra la imagen y el texto de la API en el html
})
.catch(() => {
    alert('Error al obtener los datos de la API');
    console.log('Error:', error);
})
});

$b1.addEventListener('click', () => {
   obtenerInfo();
}
);
//otra forma:---------------------------------
//atraves de una funcion asincrona que es capaz de esperar al proceso termine antes de continuar
async function obtenerInfo() {
try{
let response = await fetch('https://dog.ceo/api/breeds/image/random');//espera a que la promesa se resuelva
const data = await response.json();//espera a que la respuesta se convierta en un objeto json
console.log('data:', data);
$f2.innerHTML=`<img src="${data.message}"alt="image">
<figcaption>${data.status}</figcaption>`;
}catch(error){
    alert('Error al obtener los datos de la APIA');
    console.log('Error:', error);
}
}

