var n=5;

function mostrarNprimos(n)//n muestra la cantidad de numeros primos que se desea
{
    var numprim=0;
    var num=2;//inicia en dos ya que los numero primos son apartir de dos
    while(numprim<n)//mientras que numeros primos sea menor, igual a la cantidad de primos, continua corriendo el programa
    {
        if(esPrimo(num)){//inserta el numero en la funcion paracomprobar si es primo
    
            numprim++;//incrementa el contador para que termine la sentencia while
           console.log(num);//me va a imprimir cada primo y seguira imprimienfo hasta que se cumpla la condicion  
        }
        num++;//el numero va a aumentar de uno en uno
    }
    return 0; //retorna 
}
console.log(mostrarNprimos(n));


function esPrimo(num)//toma el valor del numero para verificar si es primo o no
{
    var contPrim=0;
    for(var i=0; i<=num;i++)//i es igual a 0, mientras i sea menor igual al num, incrementará i en uno
    if(num%i==0)//si el modulo de num con el valor de i es igual a 0, inicia el contador
    contPrim++; //cuenta cuantas veces el modulo dio cero
    if(contPrim==2)//si el contador sumo dos modulos de cero es igua a 2 (dos ceros)
    return true;//es primo
    else
    return false;//no es primo
}