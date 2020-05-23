var x=200;
/*Funcion 2 genera aleatorios entre 1 y 1000 cada multiplo de 4 lo muestra en consola y cuenta hasta juntar 200
devuele cuentos se generaron en total*/
console.log(fun2(x));
function fun2(x){
    var i=1, c=0, num=0;
    while(i<=x)
    {
        num = Math.ceil(Math.random()*1000);
        if(mult4(num)){
            console.log(num);
            i++;
        }
        c++;
    }
    return "Número de veces "+c;
}
/* Funcion 1 genera 200 numeros entre  1 y 1000 y los multiplos de 4 los manda a la consola y los cuenta,
devuelve cuantos son*/
console.log(fun1(x));
function fun1(x){
    var num=0;
    for(var i=1; i<=x; i++)
    {
        num=Math.ceil(Math.random()*1000);
        if(mult4(num)){
            console.log(num);
            i++;
        }
    }
    return "Número de veces "+i;
}
/* Funcion que simule lanzar un dado devuelve un aleatorio en cada lanzamiento*/
function dado(){
    var num=0;
    num=Math.ceil(Math.random()*6);//La funcion cell me devuelve valores enteros
    return num;
}
for (var i=0; i<20; i++)
   console.log(dado());


function mult4(num){
    if(num%4==0)
        return true
    else 
        return false
}

