<!DOCTYPE html>
<html>
<head>
   
<title>TP2 Ejercicio 6 </title>
</head>
<body>
<script>

var vocales = ["a","e","i","o","u"];
var texto = prompt("Ingrese un texto");
var textominus = texto.toLowerCase();
var posicion = 0;
var parar = false;

for(var i= 0; i<textominus.length; i++){
    for (var j = 0; j < vocales.length; j++){
        if (vocales[j] == textominus.charAt(i)){
            posicion= i+1;
            parar = true;
            break;
        }
    }
    if (parar) {
        break;
    }
}
document.write("La primera vocal se encuentra en la posicion " +posicion)


</script>
</body>
</html>
