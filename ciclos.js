var num=4;
console.log(res(num)+" ");
function res(num)
{ 
    var  e=0, m=1, sumafactorial=0;
    for(var i=1; i<=num; i++)
    {   m*=i;
        sumafactorial += m;
    }
    e=1+(1/sumafactorial);
    return e;
}


var a=4;
console.log(otro(a))
function otro(a)
{
    var e=0, x=2, m=1, res=0, potencia=0, suma=0, sumafactorial=0;
    for(var i=1; i<=a; i++)
    m*=i;
    sumafactorial+=m;
    for(var j=1; j<=a; j++)
    potencia+=Math.pow(x,j);
    suma+=potencia;
    e=1+(suma/sumafactorial);
    res= Math.pow(e,x);
    return res;
}