//Ejercicio 1. Encontrar el mayor entre tres numeros

function obtenerMayor(num1, num2, num3) {

    var res = document.getElementById("resultado")
    if (num1 > num2 && num1 > num3) {
        //res.innerText = "El numero mayor es " + num1
        res.innerHTML = "<ul><li>El numero mayor es " + num1 + "</li></ul>"
        //document.write("El numero mayor es ", num1)
        //console.log("El numero mayor es", num1);                
    } else if (num2 > num1 && num2 > num3) {
        //res.innerText = "El numero mayor es " + num1
        res.innerHTML = "<ul><li>El numero mayor es " + num2 + "</li></ul>"
        //document.write("El numero mayor es ", num2)
        //console.log("El numero mayor es", num2);                
    } else {
        //res.innerText = "El numero mayor es " + num1
        res.innerHTML = "<ul><li>El numero mayor es " + num3 + "</li></ul>"
        //document.write("El numero mayor es ", num3)
        //console.log("El numero mayor es", num3);
    }

}

//obtenerMayor(14, 8, 1)

/*
Ejercicio 2.
Uso de estrecturas de control repetitivas.
*/
var cont = 0

while (cont < 10) {
    if (cont % 2 == 0) {
        console.log(cont, "es un numero par")
    }
    cont = cont + 1
}

/*
Ejercicio 3.
Encontrar los multiplos de 3 y 7 entre 0 a 100
*/
var cont = 0

while (cont < 100) {
    if (cont % 3 == 0 && cont % 7 == 0) {
        console.log(cont, "es multiplo de 3 y de 7")
    }
    cont = cont + 1
}

/*
Ejercicio 4.
Encontrar la suma de los primeros 100 numeros.
*/
var cont = 0
var suma = 0

while (cont <= 100) {
    suma = suma + cont
    cont = cont + 1
}
console.log(suma, "Es la suma de los primeros 100 numeros")

/*
Ejercicio 5.
Sumar y contar los números pares e impares que existen entre  el número 300 (incluido el numero) hasta 
el numero 500 / 1.
*/

var Numero = 300
var SumaPar = 0
var SumaImpar = 0
var ConteoPar = 0
var ConteoImpar = 0
var SumaTotal = 0

while (Numero < 500) {
    if (Numero % 2 == 0) {
        SumaPar = SumaPar + Numero
        ConteoPar = ConteoPar + 1
    } else if (Numero % 2 == 1) {
        SumaImpar = SumaImpar + Numero
        ConteoImpar = ConteoImpar + 1
    }
    Numero = Numero + 1
    SumaTotal = SumaPar + SumaImpar
}
console.log("La suma de pares es", SumaPar)
console.log("El conteo de pares es", ConteoPar)
console.log("La suma de impares es", SumaImpar)
console.log("La conteo de impares es", ConteoImpar)
console.log("La Suma total es", SumaTotal)

/*
Ejercicio 6.
Realizar un algoritmo que sea capaz de leer de determine si m divide a n. M y N son dos variables de 
tipo númerico / 1.
*/

var m = 8
var n = 9

if (m & n == 0) {
    console.log("El numero", m, "si es divisble para", n)
} else {
    console.log("El numero", m, "no es divisible para", n)
}

/*
Ejercicio 7.
Desarrolle un algoritmo al que tenga como datos de entrada dos números enteros y un carácter. 
El algoritmo deberá sumar, restar, multiplicar o dividir los valores de los dos primeros parámetros 
dependiendo del código indicado en el tercer parámetro, e imprimir el resultado. / 1
*/

var Numero1 = 5
var Numero2 = 8
var char = "s"
var Suma = 0
var Resta = 0
var Multiplicacion = 0
var Division = 0

if (char = "s") {
    Suma = Numero1 + Numero2
    console.log("La suma es", Suma)
} else if (char = "r") {
    console.log("La resta es", Resta)
} else if (char = "m") {
    Multiplicacion = Numero1 * Numero2
    console.log("La multiplicación es", Multiplicacion)
} else if (char = "d") {
    Division = Numero1 / Numero2
    console.log("La división es", Division)
} else {
    console.log("Porfavor ingrese la letra s para sumar, r para resta, m para multiplicar y d para dividir")
}

/*
Ejercicio 8.
Muestra mensajes con alert.
*/

function mostrarMensaje(mensaje) {
    alert(mensaje)
}

/*
Ejercicio 9.
Ingresar un valor y mostrar dicho valor multiplicado hasta 10.
*/

function multiValor(NumeroX) {

    var multipli1 = document.getElementById("multiplicacion1")
    var multipli2 = document.getElementById("multiplicacion2")
    var multipli3 = document.getElementById("multiplicacion3")
    var multipli4 = document.getElementById("multiplicacion4")
    var multipli5 = document.getElementById("multiplicacion5")
    var multipli6 = document.getElementById("multiplicacion6")
    var multipli7 = document.getElementById("multiplicacion7")
    var multipli8 = document.getElementById("multiplicacion8")
    var multipli9 = document.getElementById("multiplicacion9")
    var multipli10 = document.getElementById("multiplicacion10")

    var cont = 0
    var NumeroMulti = 0

    while (cont <= 10) {

        cont = cont + 1

        if (cont == 1) {
            NumeroMulti = NumeroX * 1
            multipli1.innerHTML = "<ul><li> 1 x " + NumeroX + " = " + NumeroMulti + "</li></ul>"
        }else if (cont == 2) {
            NumeroMulti = NumeroX * 2
            multipli2.innerHTML = "<ul><li> 2 x " + NumeroX + " = " + NumeroMulti + "</li></ul>"
        }else if (cont == 3) {
            NumeroMulti = NumeroX * 3
            multipli3.innerHTML = "<ul><li> 3 x " + NumeroX + " = " + NumeroMulti + "</li></ul>"
        }else if (cont == 4) {
            NumeroMulti = NumeroX * 4
            multipli4.innerHTML = "<ul><li> 4 x " + NumeroX + " = " + NumeroMulti + "</li></ul>"
        }else if (cont == 5) {
            NumeroMulti = NumeroX * 5
            multipli5.innerHTML = "<ul><li> 5 x " + NumeroX + " = " + NumeroMulti + "</li></ul>"
        }else if (cont == 6) {
            NumeroMulti = NumeroX * 6
            multipli6.innerHTML = "<ul><li> 6 x " + NumeroX + " = " + NumeroMulti + "</li></ul>"
        }else if (cont == 7) {
            NumeroMulti = NumeroX * 7
            multipli7.innerHTML = "<ul><li> 7 x " + NumeroX + " = " + NumeroMulti + "</li></ul>"
        }else if (cont == 8) {
            NumeroMulti = NumeroX * 8
            multipli8.innerHTML = "<ul><li> 8 x " + NumeroX + " = " + NumeroMulti + "</li></ul>"
        }else if (cont == 9) {
            NumeroMulti = NumeroX * 9
            multipli9.innerHTML = "<ul><li> 9 x " + NumeroX + " = " + NumeroMulti + "</li></ul>"
        }else {
            NumeroMulti = NumeroX * 10
            multipli10.innerHTML = "<ul><li> 10 x " + NumeroX + " = " + NumeroMulti + "</li></ul>"
        }
        
    }

}



