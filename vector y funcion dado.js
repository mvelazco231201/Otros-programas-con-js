var vec=new Array(6);
var a=0,b=0,c=0,d=0,e=0,f=0;
for(var i=0; i<6; i++){
    var num=vec[dado()];
if(num==1)
    a++;
if(num==2)
    b++;
if(num==3)
    c++;
if(num==4)
    d++;
if(num==5)
    e++;
if(num==6)
    f++;
}
console.log(vec[dado()]);





function dado(){
    var num=0;
    num=Math.ceil(Math.random()*6);//La funcion cell me devuelve valores enteros
    return num;
}