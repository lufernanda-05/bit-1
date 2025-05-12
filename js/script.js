'use strict'; //modo estricto para evitar errores en el codigo
console.log ("HOLA,BIENVENIDO A PET GROOMING");
function guardarCita() {//funcion para guardar la cita
            const nombre = document.getElementById('nombre').value;//obteniendo el valor del input nombre
            const correo = document.getElementById('correo').value;
            const dia = document.getElementById('dia').value;
            const hora= document.getElementById('hora').value;

            alert(`Cita agendada para:\nNombre: ${nombre}\nCorreo: ${correo}\nDía: ${dia} \nHora: ${hora}`);//alerta para mostrar los datos de la cita
        }
