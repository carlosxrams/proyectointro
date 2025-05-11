document.addEventListener('DOMContentLoaded', () => {
  const carritoBody = document.querySelector('#lista-carrito tbody');
  const listaProductos = document.querySelector('#lista-1');
  const vaciarBtn = document.querySelector('#vaciar-carrito');

  // Agregar productos al carrito
  listaProductos.addEventListener('click', e => {
    if (e.target.classList.contains('Agregar-carrito')) {
      e.preventDefault();
      const producto = e.target.closest('.product');
      leerDatosProducto(producto);
    }
  });

  // Vaciar carrito
  vaciarBtn.addEventListener('click', e => {
    e.preventDefault();
    carritoBody.innerHTML = '';
  });

  // Eliminar un producto individual
  carritoBody.addEventListener('click', e => {
    if (e.target.classList.contains('borrar-producto')) {
      e.preventDefault();
      e.target.closest('tr').remove();
    }
  });

  function leerDatosProducto(producto) {
    const img = producto.querySelector('img').src;
    const nombre = producto.querySelector('h3').textContent;
    const precio = producto.querySelector('.Precio').textContent;

    insertarProducto({ img, nombre, precio });
  }

  function insertarProducto(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${producto.img}" width="50"></td>
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
      <td><a href="#" class="borrar-producto">X</a></td>
    `;
    carritoBody.appendChild(row);
  }
});