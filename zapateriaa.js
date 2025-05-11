const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners () {
    elementos1.addEventListener("click", comprarElemento);
    carrito.addEventListener("click", eliminarElemento);
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

}

function comprarElemento(e) {
    e.preventDefault();
    console.log("clic en agregar"); //
    if(e.target.classList.contains("Agregar-carrito")) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    console.log("Leyendo datos"); //
    const infoElemento = {
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContent,
        precio: elemento.querySelector(".Precio").textContent,
        id: elemento.querySelector("a").getAttribute("data-id")
    }

    console.log("Información del elemento:", infoElemento);//
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    console.log("clic en agregar"); //
    console.log("Elemento a insertar:", elemento);//
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
         <img src="${elemento.imagen}" width=100 />
    </td>
    <td>
         ${elemento.titulo}
    </td>
    <td>
         ${elemento.precio}
    </td>
    <td>
        <a href="#" class="borrar" data-id="${elemento.id}">X </a>
    </td>
    `;

    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains("borrar")) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector("a").getAttribute("data-id");
    }    
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}