/*var n=6;
var m=1;
for(var i=1;i<=n;i++)
m*=i;
console.log("Factorial: "+ m);*/

var n=9;
var m=1, o=1, p=1;
var res;
if (n<4){
  console.log("ERROR");
}
else{
     for(var i=1;i<=n;i++)
         m*=i;
     for(var a=1;a<=(n-1);a++)
         o*=a;
     for(var b=1;b<=(n-2);b++)
         p*=b;
    res= m/(o-p);
console.log(res);
}

/*function factorial(numero){
    var fac=1;
    for(var i=1; i<=numero; i++)
    fac*=i;
    return fac;
}*/
    