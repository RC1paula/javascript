temperatura=document.getElementById("ingrese-temperatura");
temperatura.addEventListener('keyup', ingresar);

convertirde = document.getElementById("convertir-de");
convertirde.addEventListener('change', ingresar);

paraconvertir = document.getElementById("para-convertir");
paraconvertir.addEventListener('change', ingresar);


var resultado;
function ingresar(){
    if(temperatura.value==''){
        return
    }

    valor = temperatura.value;
    valor = parseFloat(valor);

    //Grados Kelvin
    if(convertirde.value=="kelvin" && paraconvertir.value=="kelvin"){
        resultado = valor * 1;
        alert(valor + "Kelvin a Kelvin es " + resultado + " kelvin");
    }

    if(convertirde.value=="kelvin" && paraconvertir.value=="fahrenheit"){
        resultado = 1,8 * (valor - 273)+32;
        alert(valor + "Kelvin a fahrenheit es " + resultado + " fahrenheit");
    }

    if(convertirde.value=="kelvin" && paraconvertir.value=="celsius"){
        resultado = valor - 273;
        alert(valor + "Kelvin a celsius es " + resultado + " celsius");
    }


    //Grados Fahrenheit
    if(convertirde.value=="fahrenheit" && paraconvertir.value=="fahrenheit"){
        resultado = valor * 1;
        alert(valor + "fahrenheit a fahrenheit es " + resultado + " fahrenheit");
    }

    if(convertirde.value=="fahrenheit" && paraconvertir.value=="celsius"){
        resultado = (valor - 32)/1,8;
        alert(valor + "fahrenheit a celsius es " + resultado + " celsius");
    }

    if(convertirde.value=="fahrenheit" && paraconvertir.value=="kelvin"){
        resultado = (valor * 459,67)*5/9;
        alert(valor + "fahrenheit a kelvin es " + resultado + " kelvin");
    }


    //Grados Celsius
    if(convertirde.value=="celsius" && paraconvertir.value=="celsius"){
        resultado = valor * 1;
        alert(valor + "celsius a celsius es " + resultado + " celsius");
    }

    if(convertirde.value=="celsius" && paraconvertir.value=="kelvin"){
        resultado = valor * 273;
        alert(valor + "celsius a kelvin es " + resultado + " kelvin");
    }

    if(convertirde.value=="celsius" && paraconvertir.value=="fahrenheit"){
        resultado = (valor - 1,8)+32;
        alert(valor + "celsius a fahrenheit es " + resultado + " Fahrenheit");
    }
}