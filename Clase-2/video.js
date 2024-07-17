

//----------------------------------

//video como audio tienen un metido play() que inicia la reproduccion y pause() pausa la reproduccion
let video=document.querySelector("#video2");
let mostrarSegaSeg;

const inicioVideo=()=>{
    video.play()
    console.log(video.duration)

    mostrarSegaSeg=setInterval(()=>{
        document.querySelector(".tiempo-actual").textContent=video.currentTime
    },1000)//me muestra el tiempo actual a cada minuto
    
}
const pausaVideo=()=>{
    video.pause();
    clearInterval(mostrarSegaSeg)//cancelo la ejecucion de mostrar seg a seg el tiempo actual
}

//duration -> duracion total del video/audio(seg)
//currentTime -> tiempo actual (seg)
//muted -> boolean 

//setInterval(funcion,tiempo(ms)) -> ejecuta una funcion por cada cierto tiempo que le indiquemos
//para "cancelar" la ejecucion de su funcion -> clearInterval -> clearInterval(setInterval)

//mostrar en minutos -> 1 minuto == 60seg 
// seg /60 -> minutos