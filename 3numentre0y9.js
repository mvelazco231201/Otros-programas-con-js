
let num1=Math.floor(Math.random()*20);
let num2=Math.floor(Math.random()*20);
let num3=Math.floor(Math.random()*20);

if (num1<num2)
 if (num1<num3)
 console.log("Numero menor="+num1);
else
 console.log("Numero menor="+num3);
else
 if (num2<num3)
  console.log("Numero menor="+num2);
else 
  console.log("Numero menor="+num3)
  
console.log(num1 +  " " + num2 + " " + num3);


