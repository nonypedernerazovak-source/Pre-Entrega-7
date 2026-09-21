📚 LunaBelle — Pre-Entrega 07 
Descripción del proyecto LunaBelle es una interfaz web interactiva para una librería, desarrollada como parte de la Pre-Entrega 07.En esta entrega, el proyecto evoluciona desde una interacción basada en prompt, alert y console hacia una interfaz dinámica utilizando el DOM y eventos de JavaScript.
El usuario puede visualizar el catálogo de libros, agregar nuevos libros, eliminarlos y buscarlos directamente desde la página, sin necesidad de recargar el navegador.
## Objetivos de la entrega
Los principales objetivos de esta Pre-Entrega son: 
#Manipular el DOM mediante JavaScript. 
#Seleccionar elementos HTML desde JavaScript. 
#Renderizar dinámicamente una colección de objetos. 
#Agregar nuevos elementos.
#Actualizar la información de la página sin recargarla. 
#Implementar un buscador. 
#Continuar desarrollando el simulador de la librería LunaBelle.
📖 Funcionalidades 
#Catálogo dinámico Los libros se almacenan en un array de objetos en JavaScript. 
Cada libro contiene: 
## ID
#Título
#Autor 
#Género
#Precio
#Stock
## Agregar libros
El usuario puede agregar un nuevo libro completando el formulario: 
#Título
#Autor 
#Género 
#Precio 
#Stock
Al enviar el formulario:
#Se crea un nuevo objeto. 
#El objeto se agrega al array. 
#El catálogo se actualiza automáticamente. 
#Se muestra un mensaje de confirmación. 
#El formulario se limpia. 
Todo esto ocurre sin recargar la página.
🗑️ Eliminar libros Cada libro cuenta con un botón para eliminarlo. 
Al hacer clic: 
#Se identifica el libro seleccionado.
#Se busca su posición dentro del array.
#Se elimina utilizando splice().
#Se vuelve a renderizar el catálogo. 
#Se muestra un mensaje de confirmación. 
Feedback visual La aplicación muestra mensajes al usuario después de realizar acciones importantes.
Por ejemplo: 
#Libro agregado correctamente. 
#Libro eliminado correctamente. 
#No se encontraron libros. 
Esto permite mejorar la interacción y experiencia del usuario. 
Buscador dinámico La interfaz cuenta con un buscador que permite encontrar libros mientras el usuario escribe. 
La búsqueda puede realizarse por: 
#Título 
#Autor 
#Género
