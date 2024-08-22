//pliegue y despliegue del navegador

function desplegar(){
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
}
//defino los cambios del tema noche
const estiloNoche=()=>{
    let body=document.querySelector("body");
    let botones=document.querySelectorAll(".boton");
    body.classList.add("fondo")
    botones.forEach((boton)=>{boton.classList.add("botonNight")})
}
//------------------------


/*
WebStorage API incorporada HTML5-> guardar informacion en la parte del front
(No guardar info sensible )
guarda la info en el browser del usuario
*/
//metodos: WebStorage.getItem() WebStorage.setItem(key,valor) WebStorage.removeItem()
//mecanismos de WebStorage:
//localStorage -> nos permite almacenar info de manera indefinida
//sessionStorage -> nos permite almacenar info de manera temporal (mientras no cierre la sesion )

//webStorage almacena tipo de dato string 

//si almaveno en el mismo mecanismo con la misma key distintos valores,sobreescribe el valor anterior con el nuevo

let nombre="Juan Cruz";
let lista=[2,3,4,5,6];


localStorage.setItem("nombre1",nombre)
sessionStorage.setItem("numero",true);

let data=localStorage.getItem('nombre1');
let numero=sessionStorage.getItem("numero")
//alert(data)

console.log(numero)
lista.push(333)
console.log(lista)
localStorage.setItem("lista",JSON.stringify(lista));
let listaWebStorage=localStorage.getItem("lista")
console.log(listaWebStorage)

let objeto={dato1:"bla",dato2:433};


localStorage.setItem("data",JSON.stringify(objeto));
let objetoLStorage=localStorage.getItem("data")//al estar en formato JSON lo tengo que transformar de nuevo para poder usarlo
let objetoTransformado=JSON.parse(objetoLStorage)
objetoTransformado.nuevaPropiedad="hola"
console.log(objetoTransformado)

//JSON -> JavaScript Object Notation -> formato texto 

//JSON metodos

//JSON.stringify()-> pasar de objeto/array a JSON
//JSON.parse() -> pasar JSON a objeto



//-----aplicacion de Web Storage 


//tema noche

let temaNoche=()=>{
    document.querySelector("body").classList.add("fondo");

    let botones=document.querySelectorAll("button");
    botones.forEach((button)=>{button.classList.add("botonNight")})

    //guardar info en el WebStorage

    localStorage.setItem("tema","noche")

}

let temaDia=()=>{
    document.querySelector("body").classList.remove("fondo");

    let botones=document.querySelectorAll("button");
    botones.forEach((button)=>{button.classList.remove("botonNight")})

    localStorage.setItem("tema","dia")
}

let infoTema=localStorage.getItem("tema");//si no se encuentra una key con ese nombre nos devuelve null

if(infoTema !== null){
   if(infoTema =="noche"){
        temaNoche()
    }else{
        temaDia()
    } 
}

//Ejemplo 2
//Ver el horario para definir un estilo predeterminado
let fecha= new Date//propio de JS que nos devuelve un objeto de tiempo y tiene muchos metodos para conseguir año,horas,dia actual
console.log(fecha.getHours())//obtenemos el horario
let horaActual=fecha.getHours();


// if(infoTema == null){
//     if(horaActual>18){
//         temaNoche()
//     }else{
//         temaDia()
//     }
// }

let cantidad=localStorage.getItem("cantidadProd");
if(cantidad !== null){
    document.querySelector("#cantidad").textContent=cantidad;
}
//Actividad
//hacer que al clickear los botones de "comprar" sume de a 1 unidad en el canasto y que si me voy a la hoja secundaria me muestre una lista de cada producto comprado
let listaProd=[]
const sumarCanasto=()=>{
   let cantidadActual= document.querySelector("#cantidad");
   let cantidad=parseInt(cantidadActual.textContent)+1
   cantidadActual.textContent=cantidad;
   localStorage.setItem("cantidadProd",cantidad)
    listaProd.push({prod:"silla",precio:2500});
    localStorage.setItem("productos",JSON.stringify(listaProd))
}

const sumarProducto=()=>{
    sumarCanasto()
}
const borrarCompra=()=>{
    localStorage.removeItem("productos");
    localStorage.removeItem("cantidadProd")
    document.querySelector("#cantidad").textContent=0
    
}