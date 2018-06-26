let vp = document.getElementById("villaSergio")
let papel = vp.getContext("2d")

const teclas = {
    UP : 38,
    RIGHT : 39,
    DOWN : 40,
    LEFT: 37
}

let fondo = {
  url : "tile.png",
  cargaOk : false
}
fondo.imagen = new Image()
fondo.imagen.src = fondo.url
fondo.imagen.addEventListener("load", cargarFondo)

let vaca = {
  url : "vaca.png",
  cargaOk : false
}
vaca.imagen = new Image()
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargarVacas)

let pollo = {
  url : "pollo.png",
  cargaOk : false
}
pollo.imagen = new Image()
pollo.imagen.src = pollo.url
pollo.imagen.addEventListener("load", cargarPollos)

let cerdo = {
  url : "cerdo.png",
  cargaOk : false
}
cerdo.imagen = new Image()
cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener("load", cargarCerdo)

let hombreLobo = {
  url : "hombreLobo.gif",
  cargaOk : false,
  width : 71,
  height : 84
}
hombreLobo.imagen = new Image()
hombreLobo.imagen.src = hombreLobo.url
hombreLobo.imagen.addEventListener("load", cargarHombreLobo)


function cargarFondo(){
  fondo.cargaOk = true
  dibujar()
}
function cargarVacas(){
  vaca.cargaOk = true
  dibujar()
}
function cargarPollos(){
  pollo.cargaOk = true
  dibujar()
}
function cargarCerdo(){
  cerdo.cargaOk = true
  dibujar()
}
function cargarHombreLobo(){
  hombreLobo.cargaOk = true
  dibujar()
}

function dibujar(){
if (fondo.cargaOk) {
  papel.drawImage(fondo.imagen, 0, 0)
} if (vaca.cargaOk) {
    console.log(`cantidad Vacas: ${cantidadVacas}`)
    for (let i = 0; i < cantidadVacas; i++) {
      let x = (aleatorio(0, 6) * 70)
      let y = (aleatorio(0, 6) * 70)
      papel.drawImage(vaca.imagen, x, y)
    }
  } if (pollo.cargaOk) {
      console.log(`cantidad Pollos: ${cantidadPollos}`)
      for (let i = 0; i < cantidadPollos; i++) {
        let x = (aleatorio(0, 6) * 70)
        let y = (aleatorio(0, 6) * 70)
        papel.drawImage(pollo.imagen, x, y)
      }
    }  if (cerdo.cargaOk) {
          console.log(`cantidad Cerdos: ${cantidadCerdos}`)
          for (let i = 0; i < cantidadCerdos; i++) {
            let x = (aleatorio(0, 6) * 70)
            let y = (aleatorio(0, 6) * 70)
            papel.drawImage(cerdo.imagen, x, y)
          }
        } if (hombreLobo.cargaOk) {
            papel.drawImage(hombreLobo.imagen, xHombreLobo, yHombreLobo, hombreLobo.width, hombreLobo.height)
            document.addEventListener("keydown", moverConTeclado)
          }
}

let cantidadVacas = aleatorio(0,10)
let cantidadPollos = aleatorio(0,10)
let cantidadCerdos = aleatorio(0,10)
let xHombreLobo = aleatorio(0, 420)
let yHombreLobo = aleatorio(0, 420)

function aleatorio(min, maxi)
{
  let resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function moverConTeclado(evento) {
    let movimiento = 15
    if (evento.keyCode == teclas.UP){
      moverImagen(hombreLobo.imagen, xHombreLobo, yHombreLobo - movimiento, papel)
      yHombreLobo = yHombreLobo - movimiento
      console.log(yHombreLobo)
    } else if (evento.keyCode == teclas.DOWN){
      moverImagen(hombreLobo.imagen, xHombreLobo, yHombreLobo + movimiento, papel)
      yHombreLobo = yHombreLobo + movimiento
      console.log(yHombreLobo)      
    } else if (evento.keyCode == teclas.RIGHT){
      moverImagen(hombreLobo.imagen, xHombreLobo + movimiento, yHombreLobo, papel)
      xHombreLobo = xHombreLobo + movimiento
    } else if (evento.keyCode == teclas.LEFT){
      moverImagen(hombreLobo.imagen, xHombreLobo - movimiento, yHombreLobo, papel)
      xHombreLobo = xHombreLobo - movimiento
    } else {console.log("Otra Tecla")}
}

function moverImagen(animal, xinicial, yinicial, papel) {
    // papel.clearRect(x, y, x+1, y+1)
    papel.beginPath()
    papel.drawImage(animal, xHombreLobo, yHombreLobo, hombreLobo.width, hombreLobo.height)
    papel.stroke()
    papel.closePath()
}