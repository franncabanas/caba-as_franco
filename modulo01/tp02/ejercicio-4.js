<!DOCTYPE html>
<html>
<head>
   
<title>TP2 Ejercicio 4 </title>
</head>
<body>
<script>
var numero = prompt("Ingrese un numero entero");

var resultado = paroimpar(numero);
alert("El numero " +numero+ "es " +resultado);

function paroimpar(numero) {
    if (numero %2 == 0) {
        return "par";

    }
    else {
        return "impar";
    }
}
</script>
</body>
</html>
