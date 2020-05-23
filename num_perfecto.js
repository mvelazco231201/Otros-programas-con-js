var a=9; suma=0; bool=false; limite=9;

console.log(esPerfecto(a)+" ");

function esPerfecto(a)
{
    for (var i=a-1; i>1; i--)
    {
        if(i%a==0)
        suma+=i;
    }
    if(a==suma)
   bool=true;
   return bool;
}

console.log(esPrimo(a)+" ");

function esPrimo(a)
{
    for (var i=a-1; i>1; i--)
    {
        if(i%a==0)
        suma+=i;
    }
    if(suma == 0)
   bool=true;
   return bool;
}

console.log(serie1(limite)+" ");

function serie1(limite)
{
    var suma=0,denom=1;
    for(var i=1; i<=limite; i++)
    {
    if(i%2==0)
    suma -= (4/denom); //suma += (4/denom)*signo; signo *= -1; denom +=2; no necesitas meter if para cambio de signo
    else 
    suma += (4/denom);
        denom+=2;
    }
    return suma;
}
