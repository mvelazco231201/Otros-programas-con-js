// Que me digan cuantas veces cayo cada posible suma del lanzamiento de 2 dados, repitiendo esto 100 veces
/*function posSumaDado(){
    var vec=new Array(11);
    var suma=0;
    for(var n=0; n<=100; n++){
    suma= dado()+dado();
        vec[suma-2];
    }

}*/






function dado(){
    var num=0;
    num=Math.ceil(Math.random()*6);//La funcion cell me devuelve valores enteros
    return num;
}

var vec=new Array(11).fill(0);
var suma=0;
for(var n=0; n<=100; n++){//este for establece el limite de los (100) tiros
suma= dado()+dado();//suma los dos valores aleatorios de la funcion dado :v
    vec[suma-2]++;//localiza la posicion correspondiente de la suma y la incrementa para contar el número de veces que se realizo esa suma
}
for(i=0;i<11;i++)//recorre el vector lleno para imprimir el numero de veces que se realizo cada suma0
console.log("La suma",(i+2)," se repitió " +vec[i], " veces.")