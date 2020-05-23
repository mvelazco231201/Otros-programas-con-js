var b=10, h=2, r=5;
function areaTriangulo(b,h){
    var area=0;
    area=(b*h)/2;//Es lo mismo que poner *return (b*h)/2;*
    return area;
}
function areaRectangulo(b,h){
    var area=0;
    area=b*h;
    return area;
}
function areaCirculo(r){
    var area=0;
    area= Math.PI*Math.pow(r,2);
    return area;
}
console.log("El area del triangulo es: "+areaTriangulo(b,h));
console.log("El area del rectangulo es: "+areaRectangulo(b,h));
console.log("El area del circulo es: "+areaCirculo(r));

function triangulo(base,altura){//creación de clase para área de un triangulo
    this.base=base;
    this.altura=altura;
    this.area=function(){
        return (this.base*this.altura)/2;
    }
}
function rectangulo(base,altura){
    this.base=base;
    this.altura=altura;
    this.area=function(){
        return this.base*this.altura;
    }
}
function circulo(r){
    this.radio=r;
    this.area=function(){
        return Math.PI*Math.pow(this.radio,2);
    }
}
var t1= new triangulo(10,2);
var r1= new rectangulo(10,2);
var c1= new circulo(5);
console.log("Area de t1: "+t1.area());
console.log("Area de r1: "+r1.area());
console.log("Area de c1: "+c1.area());