<!DOCTYPE html>
<html>
<head>
   
<title>TP2 Ejercicio 8 </title>
</head>
<body>
<script>
var cantnum = 100
var numero=[]
while (numero.length<cantnum){
    var numaleatorio = Math.ceil(Math.random()*cantnum);
    var existe = false
    for (var i=0; i<numero.length; i++){
        if(numero[i]== numaleatorio){
            existe= true;
            break;
        }
    }
    if (!existe){
        numero[numero.length]=numaleatorio

    }
}
document.write("numeros aleatorios : " +numero);
</script>
</body>
</html>
