<!DOCTYPE html>
<html>
<head>
   
<title>TP2 Ejercicio 1 </title>
</head>
<body>
<script>
var verdadero,char 
var valores = [verdadero,false,"2","Hola","Mundo","3",char];

var valstring = []; 
for (let i=0; i< valores.length; i++){
    if (typeof valores[i]==="string"){
        valstring.push (valores[i]);
    }
}
console.log("imprimir los elemenos de menor a mayor " + valstring.sort(function(a, b){return a.length - b.length}));
console.log (2+3)
console.log(2-3)
console.log(2*3)
console.log(2/3)
</script>
</body>
</html>
