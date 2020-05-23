//este documento se asocia al rectangulo.html
class rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
        }
        area(){
            return this.base*this.altura;
    }
}

//Aqui conectaremos con nuestro HTML
const bn=document.getElementById("bnRectan");
//Esto hace referencia el boton, ahora debemos asociarle el comportamiento click
bn.addEventListener('click',()=>{    
    //recuperamos el texto de las cajas de texto a través del ID
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;

        //Esta información a este punto esta como texto, ej "3" debemos convertirla a 3 es decir el número 3
        base=parseInt(base);
        altura=parseInt(altura); 
        //pudimos haberlo hecho en una sola línea
       /* let base=parseInt(document.getElementById("base").value);
        let altura=parseInt(document.getElementById("altura").value);*/
        //ahora crearemos nuestro rectangulo

            //ahora crearemos nuestro rectangulo
        let rect1=new rectangulo (base,altura);
        //en lugar de imprimir el area en la consola, lo vamos a mandar junto con la información
        //del rectangulo al HTML, para eso vamos a localizar nuestro DIV resultados
        let divRes=document.getElementById("resultados");
        //Crearemos una etiqueta HTML <p> para poner la información
        //Para el HTML del DIV debemos trabajar con la propiedad innerHTML
        divRes.innerHTML="<p>Rectángulo con base " + rect1.base + " y altura " + rect1.altura + "</p>";
        //podemos usar mas de una linea, pero usaremos el += para que conecten
        divRes.innerHTML+="<p>con un area de " + rect1.area() + "</p>";

    }
);



