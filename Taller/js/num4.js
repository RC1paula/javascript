triangulo=function(){
    

var valor1 =document.getElementById('valor1').value;
var valor2 =document.getElementById('valor2').value;
var valor3 =document.getElementById('valor3').value;

    if(valor1==valor2 && valor2==valor3 && valor3==valor1) {
        alert('El triangulo es equilátero');
     
     } else if(valor1==valor2 && valor2==valor3 && valor3==valor1) {
         alert('El triangulo es isósceles');
     
     } else if ( valor1!=valor2 && valor2!=valor3 && valor3!=valor1){
         alert('El triangulo es escaleno');
     
     }
}