let longitud=()=>{
    let nom=document.getElementById('nom').value 
    let text=nom.length 
    alert("Tiene una cantidad de "+text+" letras");
}

function mayuscula(){
    let nom=document.getElementById('nom').value 
    let text=nom.toUpperCase()
    alert("So nombre en mayuscula "+text);
}

function minuscula(){
    let nom=document.getElementById('nom').value 
    let text=nom.toLowerCase()
    alert("Su nombre en minuscula "+text);
}

let caracter=()=>{
    let nom=document.getElementById('nom').value 
    let text=nom.subtring(0,1)
    alert("La inicial de su nombre es "+text);
}