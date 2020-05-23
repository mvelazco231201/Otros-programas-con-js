class triangulo{//creación de clase para área de un triangulo
    constructor (base,altura){//el constructor es lo que se llamará al crear un objeto con New
        this.base=base;//aquí decidimos recibir dos parámetros al construirlo y los usamos
        this.altura=altura;//para guardarlos en las variables this.<nombre> 
        }
        area(){//podemos crear los métodos o tareas de esta manera, pero internamente usamos
            return (this.base*this.altura)/2;//nuestras variables con la palabra <this> para hacer
    }//referencia a las propiedades que tiene el objeto
}/* Con esto podríamos crear un pequeño código que utilice nuestra clase */

let t1=new Triangulo(2,3); //se crea el objeto t1 de la clase Triangulo
let t2=new Triangulo(1,1); //se crea el objeto t2 de la clase Triangulo
t2.altura=9;  //podemos cambiar sus propiedades
console.log(t2.altura); //podemos recuperar el valor de sus propiedades
console.log(t2.area()); //incluso invocar sus métodos

console.log("Area del triangulo 1 de base = " + t1.base);
console.log(t1.area());

//  *****************************************************************************************//
class rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
        }
        area(){
            return this.base*this.altura;
    }
}

let r1=new rectangulo(2,5);
let r2= new rectangulo(5,10);
console.log(r1.area());
console.log(r2.area());

//  ------------------------------------------------------------------------------------------//
class cuadrado{
    constructor(lado){
    this.lado=lado;
    }
    area=function(){
        return this.lado*this.lado;
    }
}

let c1=new cuadrado(5);
let c2=new cuadrado(8);
console.log(c1.area());
console.log(c2.area());