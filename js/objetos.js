//tipos de datos (variables)

//Estructura
/*const NOMBREOBJETO(){
    PROPIEDAD:VALOR,
    PROPIEDAD:VALOR

    NOMBREMETODO(){
        contenido del método
    }
}*/

/*const animals={
    name:"Kindy",
    edad:"4",
    tipo:"perro",

    comer(){
        console.log("Kindy a comerrr")
    }
}

console.log(animals);

animals.comer();*/

//----------------------------------------EJERCIO ÁREA DE FIGURAS-------------------------------//
const figura={
    lado:parseFloat(prompt('Digite el lado del tiangulo')),
    base:parseFloat(prompt('Digite la base del tiangulo')),
    area(){
        alert(`el lado del triangulo es `+figura.lado+` y la base del triangulo es `+figura.base)
        calcular=figura.base*figura.lado/2;
    }
}

figura.area();
alert(`el area del triangulo es `+calcular);


//----------------------------------------EJERCIO CALCULAR PRECIO-------------------------------//

let nomproducto=prompt("¿Cuál es el producto deseado?");
let cantprodcto=prompt("¿Cuántos "+nomproducto+" desea llevar?");
let precioproducto=prompt("¿Qué vale "+nomproducto+" ?")

const registradora={
    valortotal(){
        let totalpagar=precioproducto*cantprodcto
        console.log(`El total a pagar es  ${totalpagar}`);
        alert(`El total a pagar es `+totalpagar);
    }
}

registradora.nomproducto=nomproducto;
registradora.cantprodcto=cantprodcto;
registradora.precioproducto=precioproducto;

registradora.valortotal();
