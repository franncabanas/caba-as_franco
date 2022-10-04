<!DOCTYPE html>
<html>
<head>
   
<title>TP2 Ejercicio 7 </title>
</head>
<body>
<script>
    var frase = prompt("Ingrese una frase a revertir");
function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

let reverseStringIs = reverse(frase)
console.log(reverseStringIs)

</script>
</body>
</html>
