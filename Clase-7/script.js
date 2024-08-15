//API -> Aplication Programing Interface

//html5 -> Canvas - Geolocalizacion - D&D - WebStorage ...

//Geolocalizacion -> API ubicacion del dispositivo del usuario 
//siempre con permiso del usuario 


//getCurrentPositio()  - watchPosition()

//sintaxis
 let texto=document.querySelector("p");
const funcionOk=(position)=>{
    console.log(position)// position -> info sobre la ubicacion
   
    texto.textContent=`La ubicacion de este dispositivo se encuentra en la latitud ${position.coords.latitude}y longitud ${position.coords.longitude}con un margen de error de ${position.coords.accuracy}  metros`
};


const funcionError=(err)=>{
    console.log(err) // objeto de error con la info sobre el error 
    // el error puede tener los siguientes codigos:
    //1 -> no nos permite obtener la ubicacion el usuario
    //2 -> una falla /error en la busqueda
    //3 -> no hay suficiente tiempo para ubicarlo 
    if(err.code == 1){
        return texto.textContent="Al no darnos la autorizacion no podemos ubicarlo con Geolocalizacion...."
    }
    texto.textContent='Disculpe,no nos fue posible encontrar su ubicacion'


}
const objetoConfig={
    enableHighAccuracy:true,//booleano
    //timeout:200//milisegundos (tiempo limite)
   // maximumAge=ms // espera en milisegundos entre cada llamado
};

navigator.geolocation.getCurrentPosition(funcionOk,funcionError,objetoConfig)