//ESTRUCTURA DEL ARCHIVO

//Sistema de Gestión de Biblioteca

//Punto 1. Estructura de Datos
//Cree un array de objetos llamados libros que contengan al menos 10 libros.
// Cada libro debe tener las siguientes propiedades:
//✔ id (número) ✔ título (cadena), ✔ autor (cadena), ✔ año (número), ✔ género (cadena), ✔ disponible (booleano).

//CODIGO y Comentarios.

const libros = [
  { id: 1,
    titulo: "El Señor de los Anillos",
    autor: "J. R. R. Tolkien",
    año: 1954,
    genero: "Fantasía",
    disponible: true,
  },
  { id: 2,
    titulo: "Las aventuras de Alicia en el país de las maravillas",
    autor: "Lewis Carroll",
    año: 1865,
    genero: "Fantasía",
    disponible: false,
  },
  { id: 3,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943,
    genero: "Fábula",
    disponible: true,
  },
  { id: 4,
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    año: 1813,
    genero: "Romance",
    disponible: true,
  },
  { id: 5,
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    año: 1605,
    genero: "Novela",
    disponible: true,
  },
  { id: 6,
    titulo: "Los tres mosqueteros",
    autor: "Alexandre Dumas",
    año: 1844,
    genero: "Novela de aventuras",
    disponible: false,
  },
  { id: 7,
    titulo: "Cumbres Borrascosas",
    autor: "Emily Brontë",
    año: 1847,
    genero: "Romance",
    disponible: true,
  },
  { id: 8,
    titulo: "Breve Historia del Mundo",
    autor: "Ernst Gombrich",
    año: 1936,
    genero: "Historia",
    disponible: false,
  },
  { id: 9,
    titulo: "El Nombre de la Rosa",
    autor: "Umberto Eco",
    año: 1980,
    genero: "Misterio",
    disponible: true,
  },
  { id: 10,
    titulo: "Historia de dos Ciudades",
    autor: "Charles Dickens",
    año: 1859,
    genero: "Novela",
    disponible: true,
  },
]; 

//b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. 
// Cada usuario debe tener:
//✔ id (número) ✔ nombre (string) ✔ email (string) ✔ librosPrestados (array de ids de libros).

//CODIGO y Comentarios.

const usuarios = [
  { id: 1,
    nombre: "Guadalupe Secco",
    email: "",
    librosPrestados: [1, 5], // El Señor de los Anillos, Don Quijote de la Mancha
  },
  { id: 2,
    nombre: "Cande .......",
    email: "",
    librosPrestados: [3], // El Principito
},
  { id: 3,
    nombre: "Micaela Asinari",
    email: "mikasinari@gmail.com",
    librosPrestados: [7, 10], // Cumbres Borrascosas, Historia de dos Ciudades
  },
  { id: 4,
    nombre: "Lu .......",
    email: "",
    librosPrestados: [4, 6], // Orgullo y prejuicio, Los tres mosqueteros
  },
  { id: 5,
    nombre: "Sofía Martínez",
    email: "sofia.martinez@example.com",
    librosPrestados: [], // No tiene libros prestados
},
];

//Punto 2: Funciones de Gestión de Libros
//a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que
//agregue un nuevo libro al array libros.

//CODIGO y Comentarios.


//b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por:
//título, autor o género utilizando el algoritmo de búsqueda lineal.

//CODIGO y Comentarios.

//c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por:
//  título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego
//  muestre los libros ordenados en la consola.

//CODIGO y Comentarios.


//d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

//CODIGO y Comentarios.

//Punto 3: Gestión de Usuarios
//a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

//CODIGO y Comentarios.

//b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios.

//CODIGO y Comentarios.

//c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

//CODIGO y Comentarios.

//d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

//CODIGO y Comentarios.

//Punto 4: Sistema de Préstamos
//a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque
//un libro como no disponible y lo agregue a la lista de libros prestados
//del usuario.

//CODIGO y Comentarios.

//b) Implementar una función devolverLibro(idLibro, idUsuario) que
//marque un libro como disponible y lo elimine de la lista de libros
//prestados del usuario.

//CODIGO y Comentarios.

//Punto 5: Sistema de Préstamos
//a) Crear una función generarReporteLibros() que utilice métodos avanzados
//de arrays (.map(), .filter(), .reduce()) para generar un reporte con la
//siguiente información:
//✔ Cantidad total de libros.
//✔ Cantidad de libros prestados.
//✔ Cantidad de libros por género.
//✔ Libro más antiguo y más nuevo.

//CODIGO y Comentarios.

//Punto 6: Identificación Avanzada de libros
//a) Implementar una función librosConPalabrasEnTitulo() que identifique y
//muestre todos los libros cuyo título contiene más de una palabra (no títulos
//que contengan números ni otros caracteres). La función debe devolver un
//array con los títulos de esos libros y mostrarlo en la consola.
//además de colocar los métodos, tendrán que pensar muy bien la forma de filtrar para que solo sean letras.
//Piensen muy bien su lógica

//CODIGO y Comentarios.

//Punto 7: Cálculos Estadísticos
//a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para
//calcular y mostrar:
//✔ Promedio de años de publicación de los libros.
//✔ Año de publicación más frecuente.
//✔ Diferencia en años entre el libro más antiguo y el más nuevo.

//CODIGO y Comentarios.

//Punto 8: Manejo de Cadenas
//a) Crear una función normalizarDatos() que utilice métodos de strings para:
//✔ Convertir todos los títulos a mayúsculas.
//✔ Eliminar espacios en blanco al inicio y final de los nombres de autores.
//✔ Formatear los emails de los usuarios a minúsculas.

//CODIGO y Comentarios.

//Punto 9: Interfaz de Usuario por Consola
//a) Implementar una función menuPrincipal() que muestre un menú de
//opciones al usuario y permita interactuar con el sistema utilizando prompt().
//El menú debe incluir opciones para todas las funcionalidades anteriores y
//utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
//FALTA NO SE verdadero



