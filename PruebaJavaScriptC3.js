/* 
Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.
*/
var tot = 0;

function dia(string) {
    if (string == "Martes" || string == "Jueves") {
        tot = tot * 0.8;
        return tot;
    }
}
var valorProducto = [];

function valores(producto) {
    //console.log(producto);
}

valores(valorProducto[1, 2, 3])
console.log(valorProducto);
for (let i = 0; i < 10; i++) {

}
dia("Lunes");
/*
Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.
*/
function revisar(cantidad) {

}

/*
Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba.
*/
var valores = [40, 70, -30, 2000];

function revisar(valor) {
    for (let i = 0; i <= valor.length; i++) {
        if (valor[i] < 0) {
            console.log("existe un valor negativo y es " + valor[i]);
            return negativo = valor[i];
        } else {
            console.log("Muy bien, no hay valores negativos");
        }
    }
}
revisar(valores)
    /*
    Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
    producto
    ○ Crea una función que retorne el valor del producto más costoso.
    ○ Crea una función que retorne el valor del producto menos costoso.
    */
var array = [200, 5500, 900, 7000, 500, 300];
var caro = [];
var barato = caro;

function masCostoso(mayor) {
    for (let i = 0; i <= mayor.length; i++)
        if (mayor[i] > caro) {
            caro = mayor[i]
        }
}
masCostoso(array);
console.log(caro);

console.log("-------------------------------------");

function menosCostoso(menor) {
    for (let i = 0; i <= menor.length; i++) {
        if (menor[i] < barato) {
            console.log(barato + "aqui va el barato");
            barato = menor[i]
        }
    }
}
menosCostoso(array);
console.log(barato);