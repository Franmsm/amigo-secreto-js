// Array donde se almacenan los nombres de los amigos
const listaDeAmigos = [];

// Agrega un amigo a la lista si cumple con las validaciones
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo"); 
    const nuevoAmigo = inputAmigo.value.trim(); 

    if (nuevoAmigo === "" || !isNaN(nuevoAmigo)) { 
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (listaDeAmigos.includes(nuevoAmigo)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    listaDeAmigos.push(nuevoAmigo);
    inputAmigo.value = "";
    actualizarLista();
}

// Muestra la lista de amigos en la interfaz
function actualizarLista() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; 

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        listaHTML.appendChild(li);
    }   
}

// Sortea un amigo secreto sin repetir nombres
function sortearAmigo() {
    if (listaDeAmigos.length === 0) { 
        alert("¡No hay más amigos para sortear!");
        return;
    }

    document.getElementById("listaAmigos").style.display = "none"; // Oculta la lista al iniciar el sorteo

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = ""; 
    const li = document.createElement("li");
    li.textContent = `Tu amigo secreto es: ${amigoSeleccionado}`;
    document.getElementById("resultado").appendChild(li);

    listaDeAmigos.splice(indiceAleatorio, 1); // Evita repeticiones
    actualizarLista();
}
