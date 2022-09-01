// let numero1=prompt('Digite el primer número');

// let numero2=prompt('Digite el segundo número');

// let resultado=parseInt('numero1')+parseInt('numero2');

// console.log('La suma de los números es' +resultado);

function mayorque(){
     
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;

    if(numero1>numero2){
        alert("El mayor es "+numero1);
    }else{
        alert("El mayor es "+numero2);
    }
}
