


// Dar un nuevo valor al INPUT "resultado" en la pag HTML
function darValor(valor) {
    document.getElementById("resultado").value = valor
}

//Obtener el valor actual del INPUT "resultado" en la pag HTML
function obtenerValor() {
    var nro = document.getElementById("resultado").value
    return nro
    //alert(nro)
}

//adjuntar un nuevo valor a la derecha
//del INPUT "resultado" en la pag HTML
function adjuntarValor(numero) {
    var actualNumero = obtenerValor()
    darValor(actualNumero + numero)
}

function factorial(numero) {
    var numero = obtenerValor()
    var i = 1
    var resultado = 1
    while (i <= numero) {
        resultado = resultado * i
        i = i + 1
    }
    darValor(resultado)
}


function borrartodo() {
    var vacio = ""
    darValor("")
}

var nroA = 0
var operacion = "0"
function Multiplicar(){
    nroA = obtenerValor()
    operacion = "x"
    borrartodo()
}

function Igual(){
    var nroB = obtenerValor()
       if(operacion == "x"){
        var resultado = nroA * nroB
        darValor(resultado)
    }
        if(operacion == "/"){
            var resultado = nroA / nroB 
            darValor(resultado)
        }

        if(operacion == "-"){
          var resultado = nroA - nroB 
            darValor(resultado)
        }



        if(operacion == "+"){
            let stringNum1 = "10";
            let stringNum2 = "5";
            let num1 = parseInt(stringNum1);
            let num2 = parseInt(stringNum2);
            var resultado = num1 + num2; 
            darValor(resultado)
        }
}


    function division() {
        nroA = obtenerValor()
        operacion = "/"
        borrartodo()
    }

    function resta() {
        nroA = obtenerValor()
        operacion = "-"
        borrartodo()
    }

    function suma(){
        nroA = obtenerValor()
        operacion = "+"
        borrartodo()
    }