var sueldo=1250;
if(sueldo<=1000)
  sueldo*=1.15;
 else if(sueldo>1001 && sueldo<1200)
    sueldo*=1.12;
 else if(sueldo>1201 && sueldo<1300)
     sueldo*=1.10;
 else if(sueldo>1301 && sueldo<1500)
    sueldo*=1.08;
 else if (sueldo>1500)
    sueldo*=1.06+sueldo;
console.log("Nuevo sueldo"+sueldo);