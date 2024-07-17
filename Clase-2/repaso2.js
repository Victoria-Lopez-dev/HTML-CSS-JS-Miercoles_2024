//listas
//sintaxis : los items de la lista entre corchetes y separados por una coma 
let nombre="Marta";
let lista2=[3,4,5,6,5];

//indice    0   1    2   3       4 ....
let lista=["dato",34,true,"Juan",nombre,lista2];

console.log(lista[2])


//metodos
//agregar-sacar-reemplazar push() unshift() pop() shift() 
lista.push("valor agregado",nombre,333)//agregar al final de la lista
lista.unshift("dato2")//agregar al inicio de la lista

let datoExtraido=lista.pop() //saca el ultimo item
lista.shift()//saca el primer item

//splice(param1,param2,optativo)
//param1 -> indice
//param2 -> cantidad de item 
//lista.splice(3,2) -> sacar de cualquier lugar de la lista items
lista.splice(3,2,"Juana","Mariana")// reemplazar items por otros

console.log(lista)
console.log(datoExtraido)

//let stringItem=lista[6];

//console.log(stringItem)

//console.log(stringItem.split(" ").pop())

//objetos
//producto -> ["remera",1000,["rojo","azul"]]
//producto ->{nombre:"remera",precio:1000,colores:["rojo","azul"]}
//acceder propiedad de objetos -> objeto.propiedad
//modificar-agregar propiedad de objetos -> objeto.propiedad=nuevoValor
//length -> largo strings - arrays (numero)

const listaAlumnos=[
    {
    nombre:"Juan",
    edad:33
},{
    nombre:"Marta",
    edad:44
},{
    nombre:"Paula",
    edad:55
}
]
let total=0;

// total+=listaAlumnos[0].edad

// total+=listaAlumnos[1].edad

// total+=listaAlumnos[2].edad

//let edadPromedio=total/3

//bucles -> simplifica acciones repetitivas 


//for| forof | while | dowhile

//for -> utilizarlo para recorrer listas / como acciones multiples sin listas

//sintaxis for

// for(accion inicial;condicion ;accion por vuelta){
//     accion a repetir 
// }
//...
for(let indice=0;indice<listaAlumnos.length;indice++){
    total+=listaAlumnos[indice].edad
}
let edadPromedio=total/3
console.log(edadPromedio)

//for-of -> aplica a listas . Recorre la lista completa

//sintaxis:
//for(ref of lista){
//acciones a repetir
//}

for(alumno of listaAlumnos){
    console.log(alumno.nombre)
}

//while -> mientras de "true " la condicion , realiza la accion entre llaves

//sintaxis : while(condicion){accion/es a repetir}

//let dato=prompt("Ingrese Nombre");


let indice=0;
// while(indice<listaAlumnos.length){
//     total+=listaAlumnos[indice].edad
//     indice++
// }
// while(dato !== "Fin"){
//     console.log(dato)
//     dato=prompt("Ingrese otro Nombre o 'Fin' para cortar el pedido");
// }

//do while -> acciona por lo menos una vez . acciona y despues se fija la condicion para ver si repite o no
//sintaxis: do{accion/es a repetir}while(condicion)

do{
    console.log(`el indice es ${indice}`)
}while(indice!==0)

//funciones nativas de JS - metodos se aplican en listas
//lista.metodo()


// const listaAlumnos=[
//     {
//     nombre:"Juan",
//     edad:33
// },{
//     nombre:"Marta",
//     edad:44
// },{
//     nombre:"Paula",
//     edad:55
// }
// ]

//map() - forEach() (alternativa al for of)

// for(alumno of listaAlumnos){
//     console.log(alumno.nombre)
// }

listaAlumnos.forEach((alumno)=>{ console.log(alumno.nombre)})

let nuevaListaAlumnos=listaAlumnos.map((alumno)=>{
    alumno.regular = true
    return alumno
});


//- filter() -> filtrar -> devuelve un array. Si no encuentra ninguno devuelve un array vacio
let resultado= listaAlumnos.filter((alumno)=>{return alumno.edad >60});

console.log(resultado)
//- find() -> buscar -> devuelve el primer item que cumple con la condicion.Si no encuentra ninguno devuelve "undefined"
let resultado2=listaAlumnos.find((alumno)=>{return alumno.edad >60})
console.log(resultado2)

// let productos=[{
//     nombre:"remera",
//     stock:30
// },{
//     nombre:"pantalon",
//     stock:10
// }]

// let resultado3=productos.find((prod)=>{return prod.nombre ==="zapatilla"})

// if(resultado3 == undefined){
//     console.log("no dispongo del producto")
// }

//-------------------

// DOM -> Document Object Model

console.dir(document)

document.title="Cambio titulo"
//metodos -> querySelector()-> trae el primer elemento | querySelectorAll()-> trae array
//ubicar elementos del HTML (nodos)

let h1=document.querySelector("h1");
let section1=document.querySelectorAll("section")

console.dir(h1)
console.dir(section1)

//eventos -> acciones que tienen inicio y fin , de las cuales generamos respuestas 

//'click.,mouseover,...

// dos maneras
//nodo.addEventListener(evento,()=>{})

let boton= document.querySelector("#boton1");

boton.addEventListener('click',(event)=>{
    console.log(event)
    document.querySelector("h2").textContent="CHAU"
})
//atributo en HTML on+evento=funcion


const cambiarColor=(param)=>{
    console.log(param)
    section1.forEach((seccion)=>seccion.style.backgroundColor="pink")
}
const mostrarNodo=(nodo)=>{
    console.log(nodo)
}
