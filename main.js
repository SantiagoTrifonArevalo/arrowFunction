// ejercicio.1
// Crea una función flecha sin parámetros de entrada, crea una variable, asignale una operación y muestralo por pantalla.

const probandoFuncion = () => {
    return 10;
};

const resultado = probandoFuncion();
console.log(resultado);


// Ejercicio.2

const variable1 = 8;
const variable2 = 13;

const miFuncion = (parametro1, parametro2) => {
  const resultado1 = parametro1 * parametro2;
  const resultado2 = parametro2 + 10;
  return [resultado1, resultado2];
};

console.log(miFuncion(variable1, variable2));

// Ejercicio.3
// Dado este array [1,3,5,7], tienes que usar .map() conseguir que en el nuevo array sean todos pares.
const numeros = [1, 3, 5, 7];

const numerosPares = numeros.map((numero) => {
  if (numero % 2 !== 0) {
    return numero + 1;
  } else {
    return numero;
  }
});

console.log(numerosPares);

// Ejercicio.4
// Crea una función flecha sin parámetros de entrada, Crea un objeto y retorna su longitud. Luego muestra ese resultado por consola.
const sacandoLongitud = () => {
   const objeto = {
    nombre1: "Pedro",
    nombre2: "Rubén",
    nombre3: "Tomás"
};
return nombre.keys(objeto).lenght;
}
const longitud = sacandoLongitud();
console.log(longitud);

// const obtenerLongitud = () => {
//     const objeto = {
//       propiedad1: "valor1",
//       propiedad2: "valor2",
//       propiedad3: "valor3"
//     };
  
//     return Object.keys(objeto).length;
//   };
  
//   const longitud = obtenerLongitud();
//   console.log(longitud);

// Ejercicio.5
// Dado este array:
// [
//     {
//         name:"Spain",
//         language: "Spanish"
//     }
//     {
//         name:"Venezuela",
//         language: "Spanish"
//     }
//     {
//         name:"United kingdom",
//         language: "English"
//     }
//     {
//         name:"Nicaragua",
//         language: "Spanish"
//     }
//     {
//         name:"United States",
//         language: "English"
//     }
//     {
//         name:"Iceland",
//         language: "English"
//     }
//     {
//         name:"United Arab Emirates",
//         language: "Arabic"
//     }
// ]

// *Mapea el array para obtener un nuevo array con los países de habla hispana Spanish.
// *Obten otro array con solo los de habla inglesa English.
// *Consigue finalmente otro array con los países que tengan United en su nombre.

// Ejercicio.6
// Recorre el array anterior de países y muestra la siguiente frase por consola.
// in country <name> they speak <language>

// Ejercicio.7
// Crea una función que acepte un array

// *Dentro haz que el array se ordene de menor a mayor.
// Prueba con estos arrays:
// [1,2,5,6,4,3]
// [35, 8, 5, 67, 23]
// [3.5, 8, 5, 6.7, 2.6]
// [casa, arboleda, mutante, huerto, zapato, rata]