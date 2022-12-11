/*
Ejercicio 1.
Diseñar un script de JavaScript en donde se cree una función llamada 
convertirGradosCentigradosAGradosFahrenheint() que reciba como parametro de entrada una cantidad númerica que
representará grados centígrados y los debe convertir a grados Fahrenheit, utilizando la fórmula 
correspondiente. Como resultado se deberá mostrar en el documento HTML el siguiente mensaje, según corresponda: 
si los grados Fahrenheint son mayores o iguales a 212 imprime el mensaje “Punto de ebullición del agua”, si es
mayor o igual a 98.6 y menor a 212 imprime el mensaje “Temperatura del cuerpo humano”, si es mayor o igual a 
77 y menor a 98.6 imprime el mensaje “Temperatura ambiente”, si es mayor o igual a 32 y menor a 77 escribe el
mensaje “Punto de congelación del agua”, y si es mayor o igual a -459.58 y menor a 32 escribe el mensaje 
“Cero absoluto”. (1 pt)
F = 32 + ( 9 * gradosCentigrados / 5)
*/

function convertirGradosCentigradosAGradosFahrenheint(gradosCentigrados) {

    var ResCF = document.getElementById(parseFloat("RespuestaCF"))
    var gradosFahrenheint = 0

    gradosFahrenheint = 32 + (9 * gradosCentigrados / 5)

    if (gradosFahrenheint >= 212) {

        ResCF.innerText = gradosFahrenheint + " °F" + " Punto de ebullición del agua"

    } else if (gradosFahrenheint >= 98.6 && gradosFahrenheint < 212) {

        ResCF.innerText = gradosFahrenheint + " °F" + " Temperatura del cuerpo humano"

    } else if (gradosFahrenheint >= 77 && gradosFahrenheint < 98.6) {

        ResCF.innerText = gradosFahrenheint + " °F" + " Temperatura ambiente"

    } else if (gradosFahrenheint >= 32 && gradosFahrenheint < 77) {

        ResCF.innerText = gradosFahrenheint + " °F" + " Punto de congelación del agua"

    } else if (gradosFahrenheint >= -459.58 && gradosFahrenheint < 32) {

        ResCF.innerText = gradosFahrenheint + " °F" + " Cero absoluto"

    }

}

/*
Ejercicio 2.
Crear un script en JavaScript que tenga una función llamada calcularPorcentajes(), en donde reciba como 
parametro de entrada un número introducido desde una caja de texto de HTML. Si el numero es menor de 500 
sumarle el 50% del número ingresado; si es mayor o igual a 500 restarle el 7% del número ingresado. Se debe 
mostrar como resultado en el HTML, el número ingresado y valor obtenido después de que se han realizado los 
cálculos correspondientes. (1 pt)
*/

function calcularPorcentajes(NumeroP) {

    var ResP = document.getElementById(parseFloat("RespuestaP"))
    var valorCalculado = 0

    if (NumeroP < 500) {

        valorCalculado = NumeroP + (NumeroP * 0.5)
        ResP.innerText = "El valor ingresado es: " + NumeroP + " y el valor calculado es: " + valorCalculado

    } else if (NumeroP >= 500) {

        valorCalculado = NumeroP + (NumeroP * 0.07)
        ResP.innerText = "El valor ingresado es: " + NumeroP + " y el valor calculado es: " + valorCalculado

    }

}

/*
Ejercicio 3.
Realiza un script en Javascript que implemente una función llamada generarTablaHTML() que reciba como parametro
el número de filas y columnas, y con estos datos genere una tabla HTML. Dentro de cada una de las celdas debe
escribir un número consecutivo en orden descendente. Por ejemplo, si la tabla es de 3 filas × 5 columnas los
números en cada celda deben ir desde el 15 al 1. (2 pts)
*/

function generarTablaHTML(valFilas, valColumnas) {

    var contadorFilas = 0
    var contadorColumnas = 0
    var filasActuales = 0
    var columnasActuales = 0
    var TablaFC = document.getElementById('tblFilas_y_Columnas')
    var FxC = valFilas * valColumnas

    while (contadorFilas < valFilas) {
        filasActuales = TablaFC.insertRow(contadorFilas)

        while (contadorColumnas < valColumnas) {
            columnasActuales = filasActuales.insertCell(contadorColumnas)
            columnasActuales.innerHTML = FxC
            contadorColumnas = contadorColumnas + 1
            FxC = FxC - 1
        }

        contadorColumnas = 0
        contadorFilas = contadorFilas + 1
    }

}