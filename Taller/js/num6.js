/*-----------------------------------------------------------------*
*                     Modal circulo (area)                         *
*------------------------------------------------------------------*/
const cirmodal = document.getElementById("modal-circulo");
const cirmodalc = document.getElementById("circulo-modal");
const cirabrir = document.getElementById("area-circulo");
const circerrar = document.querySelectorAll(".close")[0]; 
const areacir = parseFloat(document.getElementById("circulo-area-input").value);
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
*                Modal rectangulo (area)         
                  *
*------------------------------------------------------------------*/
const recmodal = document.getElementById("modal-rectangulo");
const recmodalc = document.getElementById("rectangulo-modal");
const recabrir = document.getElementById("area-rectangulo");
const reccerrar = document.getElementById("closerec"); 
const reccalcular = document.getElementById("calcular-rectangulo-area");

let recmostrar = function(a){
    a.preventDefault();
    recmodalc.style.opacity = "1";
    recmodalc.style.visibility = "visible";
    recmodal.classList.toggle("modal-close");
}

recabrir.addEventListener("click", recmostrar)

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
***********************     Perimetros    **************************
********************************************************************
*******************************************************************/

/*-----------------------------------------------------------------*
*                Modal rectangulo (perimetro)                      *
*------------------------------------------------------------------*/
const recperimetro = document.getElementById("perimetro-rectangulo");
const recperimetroc = document.getElementById("rectangulo-perimetro");
const reabrir = document.getElementById("area-rectangulo");
const recerrar = document.getElementById("closerec"); 
const recalcular = document.getElementById("calcular-rectangulo-area");

let remostrar = function(a){
    a.preventDefault();
    recperimetroc.style.opacity = "1";
    recperimetroc.style.visibility = "visible";
    recperimetro.classList.toggle("modal-close");
}

reabrir.addEventListener("click", remostrar)

recerrar.addEventListener("click", function(){
    recperimetro.classList.toggle("modal-close");
    setTimeout(function(){
        recperimetroc.style.opacity = "0";
        recperimetroc.style.visibility = "hidden";
    },2000)
})

function recarea(){
    const baserec = parseFloat(document.getElementById("rectangulo-base-input").value);
    const alturarec = parseFloat(document.getElementById("rectangulo-altura-input").value);

    calcularperi=baserec*alturarec;
    alert(`El área del rectangulo es `+calcularperi.toFixed(2));
}

reccalcular.addEventListener("click", recarea);


