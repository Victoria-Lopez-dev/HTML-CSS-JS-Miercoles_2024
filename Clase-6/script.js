//API : Aplication programming interface (Interfaz de programacion de aplicaciones)

// conjunto de subrutinas - funciones que podemos utilizar para hacer mas "simple" procedimientos.

//coneccion entre servidor y el navegador

//incorporadas HTML5
//- geolocalizacion - drag&drop 
//canvas(grafica) -> trazos y rectangulos (formas primitivas)

//llamamos al nodo
let canvas=document.querySelector("canvas");//500x500

let lienzo=canvas.getContext("2d");

let anguloGrados=(grados)=>{
   return  Math.PI/180* grados 
}
console.dir(lienzo);

//rectangulos
//fillRect(x,y,width,height)
//color fondo -> fillStyle 
//color borde -> strokeStyle
//globalAlpha -> transparencias 0-1

lienzo.fillStyle="violet";
lienzo.strokeStyle="#F90";
lienzo.globalAlpha=1;
lienzo.lineWidth=5

lienzo.fillRect(20,10,50,50)// rectangulos con relleno
lienzo.strokeRect(20,10,50,50)//rectangulos sin relleno(solo contorno)
// lienzo.clearRect()// "limpiar" zonas del lienzo


//trazos -> inicia beginPath()
lienzo.strokeStyle="black";
lienzo.lineWidth=1;

lienzo.beginPath();

lienzo.moveTo(50,100);//movernos a donde querramos iniciar el trazo
lienzo.lineTo(10,20);
lienzo.lineTo(40,20);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle="green";
lienzo.fillStyle="lightblue";
lienzo.moveTo(100,100);
lienzo.arc(105,105,50,anguloGrados(0),Math.PI*2,true)//arc(x,y,radio,ang.inicio,ang,fin,direccion)
lienzo.moveTo(100,10);
lienzo.quadraticCurveTo(200,100,140,10)//(pcx,pcy,x,y)  ->1 punto de control
lienzo.stroke();
 lienzo.fill();//al utilizar este metodo podemos no utilizar closePath();


lienzo.beginPath();
lienzo.strokeStyle="#44FF55";
lienzo.moveTo(200,60);
lienzo.bezierCurveTo(100,70,300,80,200,100);//2 puntos de control utiliza (pcx1,pcy1,pcx2,pcy2,x,y)
lienzo.stroke();
lienzo.closePath();

//Math.PI/180* grados 

//texto -> relleno: fillText(texto,x,y) o contorno: strokeText(texto,x,y)
// lienzo.beginPath();
// lienzo.strokeStyle="brown";
// lienzo.fillStyle="darkblue";
// lienzo.font="30px Franklin";
// lienzo.strokeText("Chau",160,130);
// lienzo.font="20px Arial";
// lienzo.fillText("HOLA",160,30);
// lienzo.stroke();
// lienzo.fill();
// lienzo.closePath();

let armarPalabra=(xP,yP)=>{

    lienzo.beginPath();
    lienzo.fillStyle="darkblue";
    lienzo.font="20px Arial";
    lienzo.fillText("HOLA",xP,yP);
    lienzo.fill();
};
let x=160;let y=30;
let funcionAnimacion;
let animacionPalabra=()=>{
 funcionAnimacion=setInterval(()=>{
        lienzo.clearRect(160,10,290,100);
        armarPalabra(x,y);
        x++;y++
    },100);

} 

const paraAnimacion=()=>{
    clearInterval(funcionAnimacion);
}
