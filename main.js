// ==========================================
// Libreria LUNABELLE 
//PRE-ENTREGA 07 fusionada con las entregas del trabajo 4 y 6 con la libreria LunaBelle.
//INTERFAZ DINÁMICA 
// ========================================== 
//ARRAY DE LIBROS 
// ========================================== 

 const libros = [ 
    { 
     id: 1, 
     titulo: "Harry Potter y la piedra filosofal", 
     autor: "J.K. Rowling", 
     genero: "Fantasía", 
     precio: 33000, 
     stock: 10 
    }, 
    { 
        id: 2, 
        titulo: "Bridgerton: el vizconde que me amó", 
        autor: "Julia Quinn", 
        genero: "Romance", 
        precio: 25000, 
        stock: 8 
    }, 
    { 
        id: 3, 
        titulo: "Saga Off Campus", 
        autor: "Elle Kennedy", 
        genero: "Romance", 
        precio: 30000, 
        stock: 3 
    }, 
    { 
        id: 4, 
        titulo: "Crepúsculo", 
        autor: "Stephenie Meyer", 
        genero: "Fantasía", 
        precio: 28000, 
        stock: 5 
    }, 
    { 
        id: 5, 
        titulo: "Las crónicas de Narnia", 
        autor: "C. S. Lewis", 
        genero: "Fantasía", 
        precio: 27000, 
        stock: 6 
    } 
]; 
// ==========================================
// SELECCIÓN DE ELEMENTOS DEL DOM 
// ========================================== 
  const contenedorItems = document.getElementById("contenedor-items"); 
  const formulario = document.getElementById("formulario-libro"); 
  const inputTitulo = document.getElementById("titulo"); 
  const inputAutor = document.getElementById("autor"); 
  const inputGenero = document.getElementById("genero"); 
  const inputPrecio = document.getElementById("precio"); 
  const inputStock = document.getElementById("stock"); 
  const inputBusqueda = document.getElementById("buscador"); 
  const mensaje = document.getElementById("mensaje"); 

// ========================================== 
// FUNCIÓN DE FEEDBACK VISUAL 
//========================================== 
 function mostrarMensaje(texto) { 
    mensaje.textContent = texto; 
    mensaje.classList.add("visible"); 

    setTimeout(() => { 
        mensaje.classList.remove("visible"); 
    }, 3000); 
} 

// ========================================== 
// RENDERIZADO DINÁMICO 
// ========================================== 
 function renderizarLibros(listaLibros) { 
    contenedorItems.innerHTML = ""; 
 if (listaLibros.length === 0) { 
    contenedorItems.innerHTML = ` 
     <div class="sin-resultados"> 
     <p> No se encontraron libros.</p> 
     </div>
      `; 
      return; 
    } 
    listaLibros.forEach((libro) => { 
        contenedorItems.innerHTML += `
         <article class="libro">
          <h3> ${libro.titulo}</h3> 
          <p> 
             <strong>Autor:</strong>
              ${libro.autor} 
              </p> 
            <p> 
            <strong>Género:</strong> 
              ${libro.genero} 
              </p> 
            <p>
               <strong>Precio:</strong> 
                 $${libro.precio.toLocaleString("es-AR")} 
             </p> 
            <p> 
             <strong>Stock:</strong> 
                 ${libro.stock} 
                 </p> 
            <button 
             class="btn-eliminar" 
              data-id="${libro.id}"> 
              Eliminar 
            </button>
         </article> 
        `; 
    });
 } 

// ========================================== 
// RENDERIZAR LIBROS AL CARGAR LA PÁGINA 
// ========================================== 
  renderizarLibros(libros);

// ========================================== 
// AGREGAR NUEVO LIBRO 
// ========================================== 
  formulario.addEventListener("submit", (evento) => { 
     evento.preventDefault(); 
     const nuevoLibro = { 
         id: Date.now(), 
         titulo: inputTitulo.value.trim(), 
         autor: inputAutor.value.trim(), 
         genero: inputGenero.value.trim(), 
         precio: Number(inputPrecio.value), 
         stock: Number(inputStock.value) 
        };
         libros.push(nuevoLibro); 
         renderizarLibros(libros); 
         mostrarMensaje( 
            ` El libro "${nuevoLibro.titulo}" fue agregado correctamente.` ); 
         formulario.reset(); 
        }); 

// ========================================== 
//ELIMINAR LIBRO 
//========================================== 
  contenedorItems.addEventListener("click", (evento) => { 
    if (!evento.target.classList.contains("btn-eliminar")) { 
        return; 
    } 
 const idLibro = Number(evento.target.dataset.id); 
 const indiceLibro = libros.findIndex( 
    (libro) => libro.id === idLibro 
); 
 if (indiceLibro !== -1) { 
 const libroEliminado = libros[indiceLibro]; 
     libros.splice(indiceLibro, 1); 
     renderizarLibros(libros); mostrarMensaje( `El libro "${libroEliminado.titulo}" fue eliminado.`
    ); 
  } 
});

// ========================================== 
// BÚSQUEDA DE LIBROS 
// ========================================== 
 inputBusqueda.addEventListener("input", () => { 
     const texto = inputBusqueda.value 
     .toLowerCase() 
     .trim(); 
     const librosFiltrados = libros.filter((libro) => { 
         return ( 
            libro.titulo.toLowerCase().includes(texto) ||
            libro.autor.toLowerCase().includes(texto)||
            libro.genero.toLowerCase().includes(texto)
         ); 
    }); 
renderizarLibros(librosFiltrados);
});
