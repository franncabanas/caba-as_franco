<!DOCTYPE html>
<html>
<head>
   
<title>TP2 Ejercicio 5 </title>
</head>
<body>
<script>
function informacion(cadena){
    var resultado = "La cadena "+cadena+"";

    if (cadena == cadena.toUpperCase()) {
        resultado+= "Esta formada solo por mayusculas";

    }
    else if (cadena == cadena.toLowerCase()){
        resultado += "Esta formada solo por minusculas";

    }
    else {
        resultado += "esta formada por mayusculas y minusculas";

    }
    return resultado;
    
}
alert(informacion("La programacion ... "));
alert(informacion("FULL STACK "));
alert(informacion("silicon "));
</script>
</body>
</html>
