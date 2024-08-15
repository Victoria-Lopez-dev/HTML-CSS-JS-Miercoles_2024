//drag and drop API para poder arrastrar elementos 


//"arrastrable " -> por defecto <a>, <img>
//atributo draggable -> valor booleano


//7 eventos -> addEventListener() - atributos : on+evento

//ejemplo
const uncolor=(ndo)=>{
    ndo.style.color="red"
}


//2 grupos -> ocurren en el elemento a arrastrar -  ocurren en la "zona de destino"


//elemento a ser arrastrado
let h1= document.querySelector("h1");
//dragstart - dragend -drag

h1.addEventListener("dragstart",(event)=>{
    console.log("inicio de arrastre")

    //objeto D&D -> dataTransfer almacenar -traer informacion
//3 metodos : setData(tipo,info) - getData(tipo) - clearData(tipo)

//tipo -> "Text" - "URL" - "text/plain"-"text/html" - 'text/uri-list"
event.dataTransfer.setData("Text",h1.id)

});

const dragStart2=(event)=>{
    event.dataTransfer.setData("Text",event.target.id)
}


// h1.addEventListener("drag",()=>{
//     console.log("evento drag")
// });
// h1.addEventListener("dragend",()=>{
//     console.log("una vez que soltamos al elemento")
// });


//zona de destino
//dragenter -  dragleave - drop- dragover
const mostrarDragEnter=()=>{
    //console.log("ondragenter")//dragenter detecta cuando ingresamos arrastrado un elemento
}
const mostrarSalida=()=>{
   // console.log("ondragleave")
}
const eventoOnDragOver=(e)=>{
    console.log("dragover")// se ejecuta cuando nos encontramos con un elemento siendo arrastrado dentro de la zona destino y cuando al mismo se suelta dentro de este.
    e.preventDefault();

}

// const eventoDrop=(e)=>{
 
//     let info=e.dataTransfer.getData("Text");
//     let nodo= document.querySelector(`#${info}`);
//     console.dir(nodo)
//     e.target.innerHTML=`
//     <h1>${nodo.textContent}</h1>
//     `
//     nodo.style.visibility="hidden"
//     console.log(nodo)
//     e.dataTransfer.clearData("Text")
  
// }

const eventoDrop=(event)=>{
   let info= event.dataTransfer.files[0];//files es un array que contiene la informacion del documento arrastrado 
   console.log(info)

   if(info.type === "application/pdf"){
        event.target.innerHTML=`
        <p>${info.name}</p>
        <img src="./imagenes/img-pdf.png"/>
    `
   }
}

 // para trasladar un elemento interno : dragstart - dragover- drop 


