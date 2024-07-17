/* manejar datos : interpreta -> numeros - caracteres - booleanos */
//Numbers
2748
3.5 // 3 y medio
5,6 // 5 y 6
//NaN -> Not a Number -> indicar que no es un numero (su tipo nNumber) 
//String -> comillas (dobles - simples - tamplate literals/bastics )

"sadhjk3"
'Lorem ipsum dolor sit amet consectetur adipis'


//Booleans -> verdadero -false

false
true 

//otras palabras
// undefined
// null
// NaN
// break
// return

//Operadores 
//Aritmeticos -> calculos
//simbolos : + - * /
console.log(55+44)
let total=66 - 10


//concatenacion -> une strings 


console.log("hola "+ "Juan Cruz "+ 45)
console.log(`hola ${total}` )

//-Comparacion -> compara y devuelve un booleano
//simbolos : ==/=== /!= /!== />/</<=/>= -> compara datos numericos

//igualdad -> el valor o valor + tipo de dato

console.log(33 == "33")//compara solo valor
console.log(33 === "33")//compara tipo y valor

console.log("hola" == "HOLA")

//length -> largo de un string ( o de un array)
console.log("hola".length>"alfombra".length)

//- Logicos -> comparan operaciones -> boolean
//simbolos:
// &&-> compara que ambas/todas las operaciones se cumplan
// ||-> compara que por lo menos alguna  de todas las operaciones se cumpla
//!-> se fija que no se cumpla esa operacion

44+20>10 && "hola"=="HOLA"//false
44+20>10 || "hola"=="HOLA"//true
//!lista.includes("ventana")//que no se cumpla para dar true(da el opuesto a la operacion )
//console.log(!lista.includes("ventana"))


//consola -> console.table()/dir()/log()

//variables -> espacio de memoria almacenar info y utilizarla a lo largo del documento

//palRes nombre=valor

//palRes -> var - let (definir una variable y cambiar su contenido) -const (defino su valor y no lo puedo modificar )

let nombrePersona="Marta";

console.log("hola "+ nombrePersona)
console.log(`hola ${nombrePersona}`)
console.log(`hola 
    nombrePersona`)

    //condicionales : if/else | switch | op. ternario
    //operador ternario

    //sintaxis
    
    //condicion?accion-si-se-cumple : accion-si-no-se-cumple;

    let edad=14;
    let tarjetaCred=true

    edad>=16?  console.log("puede hacer compras") : console.log("no puede hacer compras");

//if/else 
//sintaxis:

//  if(condicion){
//     accion-si-se-cumple
//  }else{
//     accion-si-no-se-cumple;
//  }
let dia="Miercoles"

if(edad>=16){
    if(tarjetaCred){
        console.log("puede hacer compras")
    }else{
        console.log("necesita una tarjeta para comprar en este sitio")
    }
    
}else{
    console.log("no puede hacer compras")
}

if(dia == "Miercoles"){
   console.log("Asistir a la AVS")
}

//para la proxima AVS  iniciamos con eventos - bucles - listas - DOM 
//unidad 2 video y audio