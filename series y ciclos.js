var cuantos=10, base=3;

function serieCos(x,limite){
    var num=2, cont=0, cos=1, signo=-1;
    while(cont<=limite)//mientras que el contador sea menor o igual al limite
    {
        cos+=signo*Math.pow(x,num)/factorial(num);//en la funcion realizara el factorial del valor de num
        //la funcion math realizara la elevacion del valor de x a la num
        signo*=-1;//permite cambiar el signo en cada vuelta de + a - y viceversa
        num+=2;//la  variable num va a ir aumentando de dos en dos
        cont++;//incrementa el contador para que termine la sentencia while
    }
    return cos; //retorna 
}
console.log(" ",serieCos(base,cuantos));

function serieSeno(x,limite){
var num=3, cont=0, sen=x, signo=-1;
while(cont<=limite)//mientras que el contador sea menor o igual al limite
{
    sen+=signo*Math.pow(x,num)/factorial(num);//en la funcion realizara el factorial del valor de num
    //la funcion math realizara la elevacion del valor de x a la num
    signo*=-1;//permite cambiar el signo en cada vuelta de + a - y viceversa
    num+=2;//la  variable num va a ir aumentando de dos en dos
    cont++;//incrementa el contador para que termine la sentencia while
}
return sen; //retorna 
}
console.log(" ",serieSeno(base,cuantos));

function serieLn(x,limite){
    var n=1, cont=0, ln=0, cons=(x-1)/x;
    while(cont<=limite)//mientras que el contador sea menor o igual al limite
    {
        ln+=(1/n)*(Math.pow(cons,n));//en la funcion realizara el factorial del valor de num
        n++;//la  variable num va a ir aumentando de dos en dos
        cont++;//incrementa el contador para que termine la sentencia while
    }
    return ln; //retorna 0
    }
    console.log(" ",serieLn(base,cuantos));

function factorial(numero){
    var fac=1;
    for(var i=1; i<=numero; i++)
    fac*=i;
    return fac;
}