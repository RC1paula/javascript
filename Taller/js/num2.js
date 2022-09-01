let cliclear=function(x){
    document.getElementById('number').innerHTML +=x;
}

function depurar(){
    document.getElementById('number').innerHTML ="";
}

function calcular(){
    var result=eval(document.getElementById('number').innerHTML);
    document.getElementById('number').innerHTML = result;
}

var uno=document.getElementById('uno');
var dos=document.getElementById('dos');
var tres=document.getElementById('tres');
var cuatro=document.getElementById('cuatro');
var cinco=document.getElementById('cinco');
var seis=document.getElementById('seis');
var siete=document.getElementById('siete');
var ocho=document.getElementById('ocho');
var nueve=document.getElementById('nueve');
var cero=document.getElementById('cero');

var divi=document.getElementById('divi');
var multi=document.getElementById('multi');
var menos=document.getElementById('menos');
var mas=document.getElementById('mas');
var igual=document.getElementById('igual');
var ac=document.getElementById('ac');

uno.addEventListener('click', function(){
    cliclear(1);
})
dos.addEventListener('click', function(){
    cliclear(2);
})
tres.addEventListener('click', function(){
    cliclear(3);
})
cuatro.addEventListener('click', function(){
    cliclear(4);
})
cinco.addEventListener('click', function(){
    cliclear(5);
})
seis.addEventListener('click', function(){
    cliclear(6);
})
siete.addEventListener('click', function(){
    cliclear(7);
})
ocho.addEventListener('click', function(){
    cliclear(8);
})
nueve.addEventListener('click', function(){
    cliclear(9);
})
cero.addEventListener('click', function(){
    cliclear(0);
})
mas.addEventListener('click', function(){
    cliclear("+");
})
menos.addEventListener('click', function(){
    cliclear("-");
})
multi.addEventListener('click', function(){
    cliclear("*");
})
divi.addEventListener('click', function(){
    cliclear("/");
})
ac.addEventListener('click', function(){
    depurar();
})
igual.addEventListener('click', function(){
    calcular();
})



