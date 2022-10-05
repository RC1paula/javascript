const calculartri = document.getElementById("calculartipo");

function triangulo(){
    const valor1 = document.getElementById("valor1");
    const valor2 = document.getElementById("valor2");
    const valor3 = document.getElementById("valor3");

    if(valor1==valor2 && valor2==valor3 && valor3==valor1) {
        alert('El triangulo es equilátero');
     
     } else if(valor1==valor2 && valor2==valor3 && valor3==valor1) {
         alert('El triangulo es isósceles');
     
     } else if ( valor1!=valor2 && valor2!=valor3 && valor3!=valor1){
         alert('El triangulo es escaleno');
     
     }
};

calculartri.addEventListener("click", triangulo);