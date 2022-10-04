<!DOCTYPE html>
<html>
<head>
   
<title>TP2 Ejercicio 9 </title>
</head>
<body>
<script>

var nota1,nota2,nota3,promedio

nota1=parseFloat(prompt("Ingrese primera calificacion"));
nota2=parseFloat(prompt("Ingrese segunda calificacion"));
nota3=parseFloat(prompt("Ingrese tercera calificacion"));
promedio=(nota1+nota2+nota3)/3;

if (promedio <= 5) {
    document.write("El promedio es "+promedio+ "Reprobado");

}
else if (promedio<8){
    document.write("El promedio es "+promedio+ "Aprobado");

}
else {
    document.write("El promedio es "+promedio+ "Sobresaliente");
    
}

</script>
</body>
</html>
