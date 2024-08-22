let listaProd=localStorage.getItem("productos");

if(listaProd!== null){
   let arrayProd= JSON.parse(listaProd)//pasamos de JSON a un array

   arrayProd.forEach(producto => {
        let item=document.createElement("li");
        item.textContent=`${producto.prod} de precio ${producto.precio}`
        let ul=document.querySelector("ul");
        ul.appendChild(item)
   });
}