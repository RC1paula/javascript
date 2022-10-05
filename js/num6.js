/*-----------------------------------------------------------------*
*                     modal circulo (area)                         *
*------------------------------------------------------------------*/
const cirmodal = document.getElementById("modal-circulo");
const cirmodalc = document.getElementById("circulo-modal");
const cirabrir = document.getElementById("area-circulo");
const circerrar = document.querySelectorAll(".close")[0]; 
const circalcular = document.getElementById("calcular-circulo-area");
 
function cirmostrar(c){
    c.preventDefault();
    cirmodalc.style.opacity = "1";
    cirmodalc.style.visibility = "visible";
    cirmodal.classList.toggle("modal-close");
}

cirabrir.addEventListener('click', cirmostrar)

circerrar.addEventListener("click", function(){
    cirmodal.classList.toggle("modal-close");
    setTimeout(function(){
        cirmodalc.style.opacity = "0";
        cirmodalc.style.visibility = "hidden";
    },1000)
})

function cirarea(){
    const areacir = parseFloat(document.getElementById("circulo-area-input").value);
    calcular=3.14*(areacir^2);
    alert(`El área del circulo es `+calcular.toFixed(2));
}

circalcular.addEventListener("click", cirarea);



/*-----------------------------------------------------------------*
*                     Modal triangulo (area)                       *
*------------------------------------------------------------------*/
const trimodal = document.getElementById("modal-triangulo");
const trimodalc = document.getElementById("triangulo-modal");
const triabrir = document.getElementById("area-triangulo");
const tricerrar = document.getElementById("closetri"); 
const tricalcular = document.getElementById("calcular-triangulo-area");

let trimostrar = function(t){
    t.preventDefault();
    trimodalc.style.opacity = "1";
    trimodalc.style.visibility = "visible";
    trimodal.classList.toggle("modal-close");
}

triabrir.addEventListener("click", trimostrar)

tricerrar.addEventListener("click", function(){
    trimodal.classList.toggle("modal-close");
    setTimeout(function(){
        trimodalc.style.opacity = "0";
        trimodalc.style.visibility = "hidden";
    },1000)
})

function triarea(){
    const basetri = parseFloat(document.getElementById("triangulo-base-input").value);
    const alturatri = parseFloat(document.getElementById("triangulo-altura-input").value);

     calcular=(basetri*alturatri/2);
    alert(`El área del triangulo es `+calcular.toFixed(2));
}

tricalcular.addEventListener("click", triarea);



/*-----------------------------------------------------------------*
*                      Modal cuadrado (area)                       *
*------------------------------------------------------------------*/
const cuamodal = document.getElementById("modal-cuadrado");
const cuamodalc = document.getElementById("cuadrado-modal");
const cuaabrir = document.getElementById("area-cuadrado");
const cuacerrar = document.getElementById("closecua"); 
const cuacalcular = document.getElementById("calcular-cuadrado-area");

let cuamostrar = function(a){
    a.preventDefault();
    cuamodalc.style.opacity = "1";
    cuamodalc.style.visibility = "visible";
    cuamodal.classList.toggle("modal-close");
}

cuaabrir.addEventListener("click", cuamostrar)

cuacerrar.addEventListener("click", function(){
    cuamodal.classList.toggle("modal-close");
    setTimeout(function(){
        cuamodalc.style.opacity = "0";
        cuamodalc.style.visibility = "hidden";
    },2000)
})

function cuaarea(){
    const ladocua = parseFloat(document.getElementById("cuadrado-area-input").value);

     calcular=ladocua*ladocua;
    alert(`El área del cuadrado es `+calcular.toFixed(2));
}

cuacalcular.addEventListener("click", cuaarea);



/*-----------------------------------------------------------------*
*                Modal rectangulo (area)                           *
*------------------------------------------------------------------*/
const recmodal = document.getElementById("modal-rectangulo");
const recmodalc = document.getElementById("rectangulo-modal");
const reccabrir = document.getElementById("area-rectangulo");
const reccerrar = document.getElementById("closerec"); 
const reccalcular = document.getElementById("calcular-rectangulo-area");

let recmostrar = function(a){
    a.preventDefault();
    recmodalc.style.opacity = "1";
    recmodalc.style.visibility = "visible";
    recmodal.classList.toggle("modal-close");
}

reccabrir.addEventListener("click", recmostrar)

reccerrar.addEventListener("click", function(){
    recmodal.classList.toggle("modal-close");
    setTimeout(function(){
        recmodalc.style.opacity = "0";
        recmodalc.style.visibility = "hidden";
    },2000)
})

function recarea(){
    const baserec = parseFloat(document.getElementById("rectangulo-base-input").value);
    const alturarec = parseFloat(document.getElementById("rectangulo-altura-input").value);

     calcular=baserec*alturarec;
    alert(`El área del rectangulo es `+calcular.toFixed(2));
}

reccalcular.addEventListener("click", recarea);



/*******************************************************************
********************************************************************
**********************       Perimetros       **********************    
********************************************************************
*******************************************************************/

/*-----------------------------------------------------------------*
*                Modal circulo (perimetro)                      *
*------------------------------------------------------------------*/

const cirperimetro = document.getElementById("circulo-perimetro");
const cirperimetroc = document.getElementById("perimetro-circulo");
const ciabrir = document.getElementById("perimetro-circulo-boton");
const cirerrar = document.getElementById("circlose"); 
const ciralcular = document.getElementById("calcular-perimetro-circulo");

let mostrarcir = function(ci){
    ci.preventDefault();
    cirperimetroc.style.opacity = "1";
    cirperimetroc.style.visibility = "visible";
    cirperimetro.classList.toggle("modal-close");
}

ciabrir.addEventListener("click", mostrarcir);

cirerrar.addEventListener("click", function(){
    cirperimetro.classList.toggle("modal-close");
    setTimeout(function(){
        cirperimetroc.style.opacity = "0";
        cirperimetroc.style.visibility = "hidden";
    },2000)
})

function perimetrocri(){
    const perimetrocir = parseFloat(document.getElementById("circulo-perimetro-input").value);

    calcularperi=2*3,14*perimetrocir;
    alert(`El perimetro del circulo es `+calcularperi.toFixed(2));
}

ciralcular.addEventListener("click", perimetrocri);



/*-----------------------------------------------------------------*
*                Modal triangulo (perimetro)                      *
*------------------------------------------------------------------*/

const triperimetro = document.getElementById("triangulo-perimetro");
const triperimetroc = document.getElementById("perimetro-triangulo");
const trabrir = document.getElementById("perimetro-triangulo-boton");
const trcerrar = document.getElementById("triclose"); 
const trcalcular = document.getElementById("calcular-perimetro-triangulo");

let trmostrar = function(tri){
    tri.preventDefault();
    triperimetroc.style.opacity = "1";
    triperimetroc.style.visibility = "visible";
    triperimetro.classList.toggle("modal-close");
}

trabrir.addEventListener("click", trmostrar);

trcerrar.addEventListener("click", function(){
    triperimetro.classList.toggle("perimetro-close");
    setTimeout(function(){
        triperimetroc.style.opacity = "0";
        triperimetroc.style.visibility = "hidden";
    },1000)
})

function perimetrotri(){
    const ladoperimetro = parseFloat(document.getElementById("triangulo-perimetro-input").value);

     tricalcularperimetro=ladoperimetro*3;
    alert(`El perimetro del triangulo es `+tricalcularperimetro.toFixed(2));
}

trcalcular.addEventListener("click", perimetrotri);



/*-----------------------------------------------------------------*
*                  Modal cuadrado (perimetro)                      *
*------------------------------------------------------------------*/
const cuaperimetro = document.getElementById("cuadrado-perimetro");
const cuaperimetroc = document.getElementById("perimetro-cuadrado");
const cuabrir = document.getElementById("perimetro-cuadrado-boton");
const cucerrar = document.getElementById("cuaclose"); 
const cucalcular = document.getElementById("calcular-perimetro-cuadrado");

let mostarcua = function(cu){
    cu.preventDefault();
    cuaperimetroc.style.opacity = "1";
    cuaperimetroc.style.visibility = "visible";
    cuaperimetro.classList.toggle("modal-close");
}

cuabrir.addEventListener("click", mostarcua)

cucerrar.addEventListener("click", function(){
    cuaperimetro.classList.toggle("modal-close");
    setTimeout(function(){
        cuaperimetroc.style.opacity = "0";
        cuaperimetroc.style.visibility = "hidden";
    },2000)
})

function perimetrocua(){
    const cuadradolado = parseFloat(document.getElementById("cuadrado-perimetro-input").value);

    calcuaperi=cuadradolado*4;
    alert(`El área del cuadrado es `+calcuaperi.toFixed(2));
}

cucalcular.addEventListener("click", perimetrocua);



/*-----------------------------------------------------------------*
*                Modal rectangulo (perimetro)                           *
*------------------------------------------------------------------*/
const recperimetro = document.getElementById("rectangulo-perimetro");
const recperimetroc = document.getElementById("perimetro-rectangulo");
const recabrir = document.getElementById("perimetro-rectangulo-boton");
const recerrar = document.getElementById("recclose"); 
const recalcular = document.getElementById("calcular-perimetro-rectangulo");

let mostrarrec = function(re){
    re.preventDefault();
    recperimetroc.style.opacity = "1";
    recperimetroc.style.visibility = "visible";
    recperimetro.classList.toggle("modal-close");
}

recabrir.addEventListener("click", mostrarrec)

recerrar.addEventListener("click", function(){
    recperimetro.classList.toggle("modal-close");
    setTimeout(function(){
        recperimetroc.style.opacity = "0";
        recperimetroc.style.visibility = "hidden";
    },2000)
})

function perimetrorec(){
    const baserec = parseFloat(document.getElementById("rectangulo-base-perimetro-input").value);
    const alturarec = parseFloat(document.getElementById("rectangulo-altura-perimetro-input").value);

     calperirec=(baserec*2)+(alturarec*2);
    alert(`El área del rectangulo es `+calperirec.toFixed(2));
}

recalcular.addEventListener("click", perimetrorec);


