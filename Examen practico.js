//Ejercicio 1
var limite=4 ;
function serieS(limite){
    var num=2,deno=1; cont=0, s=0;
    while(cont<=limite)
    {
        s+=num/deno;
        num+=2; 
        deno+=2;
        cont++;
   }
    return s; 
}
    console.log(" ",serieS(limite));

//Ejercicio 2
ParejasNum();
function ParejasNum(){
    var a=1, b=2;
    while(a<2000 && b<2000){
        if(a!=b){
        if(sumaDiv(a)==b && sumaDiv(b)==a)
        a++;
        b++;
        }
    } 
    console.log("La pareja de numeros amigos es: "+ a + " y " + b);
}

function sumaDiv(x)
{   var suma=0;
    for (var i=0; i<x; i++)
        if(x%i==0)
        suma+=i;
    return suma;  
}
