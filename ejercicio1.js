import { articulos } from "./ejercicio.js";
//EJERCICIO 1

/* console.log(articulos); */
//(1) Escribe una función que reciba como parámetro el array de artículos, un tipo de artículo (por ejemplo, "Electrónica") 
// y un precio máximo. La función debe devolver un array con todos los artículos que pertenezcan a ese tipo y tengan un precio menor o igual al especificado.

//Definicion de la funcion con los parametros necesarios:
function ejercicio1(articulos, tipo, precioMax) {
//Creamos el array que devolveremos:
let seleccionados = new Array();
//Recorremos los indices del array pasado por parametro.
for (let indice in articulos) {
  //Si el atributo "tipo" del elemento con ese indice es igual que el tipo pasado por parametro entonces entramos en el bloque:
    if (articulos[indice].tipo == tipo) {
      //Ademas si el precio de ese elemento es menor o igual que el precio maximo introducido por parametro, entramos:
      if (articulos[indice].precio <= precioMax) {
        //Añadimos el elemento al nuevo array con push:
        seleccionados.push(articulos[indice]);
      }
    }
  }
  //Retornamos el array:
  return seleccionados;
}
//Probamos la funcion con console.log:
console.log(ejercicio1(articulos, "PerifÃ©ricos", 50));




//(2) Escribe una función que reciba como parámetro el array de artículos y modifique las descripciones de los artículos para que todas las descripciones 
// comiencen con mayúsculas y el resto de las letras estén en minúsculas. La función debe devolver el array modificado.

//Definicion de la funcion con la sintaxis normal:
function ejercicio2(articulos) {
  //Recorremos los valores del array introducido con el metodo forEach esta vez:
  articulos.forEach(element => {
    //Almacenamos el primer caracter del atributo descripcion del elemento de la iteracion, pero cambiandolo a mayuscula:
    let mayuscula = element.descripcion[0].toUpperCase();
    //Ahora la descripcion el elemento será la suma de la mayuscula y el resto de la descripcion, gracias a slice que corta desde el indice introducido:
    element.descripcion = mayuscula + element.descripcion.slice(1);

  });
  //Retornamos el mismo array. pero modificado:
  return articulos;

}
//Probamos con console.log:
console.log(ejercicio2(articulos));




//(3) Escribe una función que reciba como parámetro el array de artículos y una cadena. La función debe devolver un array 
// con los artículos que tienen esa cadena en la descripción. 

//Definicion de la funcion:
function ejercicio3(articulos, cad) {
  //Creamos el array vacío que devolveremos:
  let seleccionados = new Array();
  //Recorremos los elementos del array, es decir los objetos:
  articulos.forEach(element => {
    //Almacenamos en una variable el resultado de indexOf, evaluando si la cadena introducida pasada por parametro (pasada a mayusculas) 
    // se encuentra dentro de descripcion tambien pasada a mayusculas:
    let esta = element.descripcion.toUpperCase().indexOf(cad.toUpperCase());
    //Evaluamos si da algun indice, es decir será mayor que -1, por que index of si no encuentra nada devuelve -1:
    if (esta > -1) {
      //Introducimos el elemento en el nuevo array previamente creado:
      seleccionados.push(element);
    }
  });
  //Retornamos el array:
  return seleccionados;
}
//Probamos la funcion con console.log:
console.log(ejercicio3(articulos, "cable"));




//(4) Escribe una función que recibe como parámetro el array y un tipo de artículo, y devuelve un objeto con dos atributos; 
// cantidad y preciomedio. que contendrán la cantidad y el precio medio de los artículos de ese tipo.

//Definicion de la funcion:
function ejercicio4(articulos, tipo) {
  //Inicializamos las dos variables que necesitamos para crear el objeto que indica el ejercicio:
  let cantidad = 0;
  let precioTotal = 0;
  //Recorremos el array introducido por parametro:
  for (const element of articulos) {
    //Si el tipo del elemento de la iteracion es igual al tipo introducido entonces entramos al bloque:
    if (element.tipo == tipo) {
      //Sumamos la cantidad en 1
      cantidad++;
      //Sumamos el precio del elemento al precio total:
      precioTotal += element.precio;
    }
  }
  //Creamos el objeto que devolverá con los atributos que requiere:
  const obj = {
    cantidad: cantidad,
    preciomedio: (precioTotal/cantidad).toFixed(2),
  };
  //Retorna el objeto:
  return obj;

}
//Comprobamos la funcion con console.log:
console.log(ejercicio4(articulos, "Mobiliario"))



//(5) Escribe una función que reorganice el array de artículos según el precio, en orden ascendente o descendente (según un parámetro de entrada).

//Creamos la funcion con los parametros requeridos::
function ejercicio5(articulos, orden) {
  //Sin el parametro introducido decide si es asc o desc:
  if (orden == "asc") {
    //Utilizamos sort para ordenar el array, con una funcion anónima que devuelva un valor positivo como return para que sea ascendente:
    articulos.sort((a, b) => {return a.precio - b.precio;})
  }
  //Utilizamos sort para ordenar el array, con una funcion anónima que devuelva un valor negativo como return para que sea descendente:
  if (orden == "desc") {
    articulos.sort((a, b) => {return b.precio - a.precio;})
  }
  //Retornamos el array modificado:
  return articulos;
}
//Probamos la función con console.log:
console.log(ejercicio5(articulos, "desc"));


