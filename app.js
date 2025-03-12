// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaAmigos= document.getElementById('listaAmigos');
//La etiqueta funciona como un acumulador lo veo ams como un string al que hay que agregar cosas 
listaAmigos.innerHTML = "";

function agregarAmigo(){
    //Limpiar el resultado por si vuelven a jugar sin refrescar
    document.getElementById('resultado').innerHTML = "";
    //Get input
    let nombre = document.getElementById('amigo').value;
    if (nombre !== ''){
        amigos.push(nombre);
        console.log(amigos);
        agregarlista(nombre);
    }
    else{
        alert('Ingresa un nombre valido');
    }
    document.getElementById('amigo').value = '';
    // console.log(listaAmigos)
}

function agregarlista(nombre){
    listaAmigos.innerHTML = listaAmigos.innerHTML + `<li>${nombre}</li>`;
}


function sortearAmigo(){
    if (amigos.length!==0){
        //Limpiamos lista de amigos
        listaAmigos.innerHTML="";
        let indiceRandom = Math.floor(Math.random()*amigos.length);
        console.log(indiceRandom);
        let ganador = amigos[indiceRandom];
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${ganador}`;
        //Reset de array, por si no refrescan la pagina
        amigos= [];
    }
    else{
        alert("Agrega Amigos porfavor");
    }
    

}