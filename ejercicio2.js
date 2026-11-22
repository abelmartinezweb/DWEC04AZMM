//EJERCICIO 2

//Define una clase que permita crear objetos de tipo banco con las siguientes características:
//(6) Un atributo nombre que pasaremos como parámetro al crear el objetos.(0.25 pto):

//Creamos la clase con la sintaxis oportuna:
class banco {
    //Creamos un constructor que recibe el nombre:
    constructor(nombre) {
        //Asignamos el parametro introducido a la varibale llamada nombre del objeto que se cree
        this.nombre = nombre;
        //Creamos una variable que tendrá cada objeto que representa a un banco, donde iremos almacenando las cuentas que lleve dentro:
        this.registro = new Array();
    }

    //Creamos los metodos para la clase:

    //(7) Crear cuenta: Recibe como parámetros el código de cuenta y el saldo inicial (por defecto tomará el valor 0 si no se pasa el parámetro). 

    //Creamos el método que recibe el codigo de la cuenta a crear y el saldo inicial, que tendrá 0 por defecto si no se introduce nada:
    crearCuenta(codigo, saldoInicial = 0) {
        //Creo un patrón que evaluará si el codigo introducido es valido y tiene 5 digitos:
        let patron = /^\d{5}$/;
        //Guardamos en una variable el resultado del metodo find sobre un array, que recibe una funcion como condición, 
        // si se cumple devuelve un objeto con el elemento, pero si no se cumple devuelve undefined:
        let cuenta = this.registro.find((cuenta) => { return cuenta.codigo == codigo });
        //Si ha devuelto undefined, entramos:
        if (cuenta == undefined) {
            //Si el codigo coincide con el patron de 5 digitos, introduce la cuenta en el array registro:
            if (patron.test(codigo)) {
                this.registro.push({ "codigo": codigo, "saldo": saldoInicial });
                //Si no coincide con el patrón, mandamos un mensaje de que el código no es válido:
            } else {
                console.log("El codigo no es válido");
            }
            //Si el método find devolvió otra cosa que no era undefined, significará que encontro una 
            // coincidencia en el codigo de algún elemento, por lo que la cuenta ya existía y no la introducimos:
        } else {
            console.log("La cuenta ya existe");
        }
    }



    //(8) Actualizar cuenta: Recibe como parámetros el código de cuenta y el ingreso (o extracción en negativo) y actualiza el saldo de la cuenta. Mostrará error si la cuenta no existe. 
    //Creamos el método con los parámetros necesarios:
    actualizarCuenta(codigo, ingreso) {
        //Almacenamos el resultado del método find que busca si el codigo coincide con alguno del array registro:
        let cuenta = this.registro.find((cuenta) => { return cuenta.codigo == codigo });
        //Si almacenó undefined, significa que la cuenta no existe, por lo que no podemos actualizarla y mandamos un error por consola:
        if (cuenta == undefined) {
            console.log("La cuenta no existe.")
            //Si almacenó otra cosa, significa que existe:
        } else {
            //Recorremos el array registro:
            for (const element of this.registro) {
                //Si el codigo del elemento de la iteracion es igual al parametro introducido entramos al bloque:
                if (element.codigo == codigo) {
                    //Le sumamos el ingreso introducido por parametro, sio fuese negativo se restaría:
                    element.saldo += ingreso;
                }

            }
        }
    }

    //(9) Eliminar cuenta: Recibe como parámetro el código de cuenta y la elimina. Mostrará error si la cuenta no existe o si no tiene saldo 0, indicando cada caso. 
    //Creamos el metodo con el codigo como parametro:
    eliminarCuenta(codigo) {
        //Hacemos lo mismo que en las anteriores, almacenamos el return del metodo find que maneja un test con funcion en su mparametro, en el que comprobamos 
        // si coincide el codigo introducido con el codigo de algun elemento del array:
        let cuenta = this.registro.find((cuenta) => { return cuenta.codigo == codigo });
        //Si es diferente a undefinded, significa que existe:
        if (cuenta != undefined) {
            //Si el saldo es desigual a cero, no podemos cerrarla:
            if (cuenta.saldo != 0) {
                console.log("La cuenta debe tener saldo 0 para eliminarse.");
                //Si es cero entramos:
            } else {
                //Creamos una variable donde utilizamos el metodo findIndex con el array registro, que evaluando una funcion de condición, 
                // nos retorna el indice del primer elemento coincidente con la condicion 
                let indice = this.registro.findIndex((cuenta) => { return cuenta.codigo == codigo });
                //Gracias a obtener ese indice, podemos utilizar el metodo .splice para borrar un elemento en el medio de un array, no nos vale el .pop:
                //Indicamos el lugar que es el indice extraido, y la cantidad a borrar:
                this.registro.splice(indice, 1)
            }

        } else {
            //Si el return del fin era undefined, la cuenta no existe por lo que no se puede borrar:
            console.log("La cuenta no existe.");
        }
    }


//(9) Eliminar cuenta: Recibe como parámetro el código de cuenta y la elimina. Mostrará error si la cuenta no existe o si no tiene saldo 0, indicando cada caso. 
    //Creamos el método, que recibe el objeto que representa al bancop:
    listarCuentas(banco1) {
        //Almacenamos en una variable la extraccion del html del elemento con id "titulo", que es el h1:
        let titulo = document.getElementById("titulo");
        //Hacemos lo mismo con el id "tabla", que es el table del html:
        let tabla = document.getElementById("tabla");
        //Almacenamos en una variable el nombre del objeto que se introdujo al crear el objeto, y que será el texto a introducir:
        let htmlTitulo = this.nombre;
        //Creamos una variable que irá almacenando los textos a introducir poco a poco, según vayamos sacando información, dentro de la tabla:
        //Empezamos abriendo el head de la tabla, y abriendo una row:
        let htmlTabla = "<thead><tr>";

        //Recorremos las claves el objeto 0, dentro del array, para sacar los nombres de los atributos y así tener el header de la tabla:
        for (const clave in this.registro[0]) {
            //Añadimos al html de la tabla, los elementos que van iterando:
            htmlTabla += `<th>${clave}</th>`;
        }
        //Cerramos la row y el header de la tabla:
        htmlTabla += `</tr></thead>`;

        //Ahora recorremos los elementos del array, en este caso los valores, que son los propios objetos:
        for (const element of this.registro) {
            //Abrimos una row en cada iteración, es decir, en cada objeto:
            htmlTabla += `<tr>`;
            //Ahora recorremos cada elemento, pero con su clave, para acceder dentro a cada valor del elemento:
            for (const indice in element) {
                //Añadimos al codigo html de la tabla un elemento con el valor de cada atributo del objeto:
                htmlTabla += `<td>${element[indice]}</td>`


            }
            //Cerramos la row:
            htmlTabla += `</tr>`;
        }

        //Añadimos el html a cada elemento extraido:
        titulo.innerHTML = htmlTitulo;
        tabla.innerHTML = htmlTabla;

    }



}

//CREAMOS EL OBJETO QUE REPRESENTA AL BANCO:
let banco1 = new banco("Banco de ejemplo");

//Lo mostramos por consola para ver como es el objeto y que contiene:
console.log(banco1);


//CREACIOND DE CUENTAS:
banco1.crearCuenta(11111, 13000);
banco1.crearCuenta(11112, 13000);
banco1.crearCuenta(11113, 13000);


//ACTUALIZACION DE CUENTAS:
banco1.actualizarCuenta(11111, 1000);
banco1.actualizarCuenta(11112, 45);
banco1.actualizarCuenta(11112, 150);
banco1.actualizarCuenta(11113, -1200);


//ELIMINACION DE CUENTAS:
banco1.eliminarCuenta(11111);
//ERROR POR NO TENER LA CUENTA A CERO, ACTUALIZAMOS RESTANDOLE EL TOTAL DEL SALDO:
banco1.actualizarCuenta(11111, -14000);
banco1.eliminarCuenta(11111);//Se elimina la cuenta:


//LISTAMOS LAS CUENTAS EN UNA TABLA:
banco1.listarCuentas(banco1);
