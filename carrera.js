//Simular una carrera entre dos cosas (variables) recorrer una pista de 100 posiciones, ir mostrando donde esta cada una en cada avance, decir al final si hubo empate o quien gano
carrera();//como carrera no me devuleve ningun valor solo llamo la funcion
function carrera(){
    var c1=0, c2=0;
    while(c1<=100 && c2<=100){//mientras que c1 sea menor o igual a 100 y c2 " " hasta que se cummpla la condicion el programa parará
        c1+=avance();//el resultado de la funcion "avance" la sumará al valor de c1
        console.log("posicion de c1: "+c1);
        c2+=avance();
        console.log("posicion de c2: "+c2);
    } 
        if(c1>=100)
            console.log("C1 es el ganador!");
        else if(c2>=100)
            console.log("C2 es el ganador!");
        else if(c1>=100 && c2>=100)
            console.log("Empate");
    }


function avance(){
    var b=0, a=0;
    a=dado();//a toma el valor que retorna la función dado
    if(a>5){//si el valor del num aleatorio que dio "dado" es mayor a 5
        b+=3; //avanza 3
    }
    else if (a>3){
        b+=2;
    }
    else 
        b++;
    return b;
}

function dado(){
    var num=0;
    num=Math.ceil(Math.random()*6);
    return num;
}
//for (var i=0; i<20; i++)
   //console.log(dado());