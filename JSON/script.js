'use strict';
fetch('data.json')
.then ((res) =>res.json())
.then((info)=>{
    console.log('info:', info);
    console.log(info[0].student);//mostrar el primer estudiante
    for (let i = 0; i < info.length; i++) {//mostrar todos los estudiantes
        console.log(info [i].student);
    }
})
.catch((err) => {
    console.error('Error:', err);
});
   
