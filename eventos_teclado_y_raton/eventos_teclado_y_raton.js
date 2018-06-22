a = document.getElementById('area_de_dibujo');
let area = a.getContext('2d');
let c;

let bordeIzquierda = colorAleatorio()
let bordeAbajo = colorAleatorio()
let bordeDerecha = colorAleatorio()
let bordeArriba = colorAleatorio()
let w = a.width

// Asignar numeros de teclas a constantes con Json
const teclas = {
    UP : 38,
    RIGHT : 39,
    DOWN : 40,
    LEFT: 37
}

function colorAleatorio() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.lineWidth = 2
    lienzo.moveTo(xinicial,yinicial)
    lienzo.lineTo(xfinal,yfinal)
    lienzo.stroke()
    lienzo.closePath()
}

// Inicio Dibujar Borde
    dibujarLinea(bordeIzquierda, 0, 0, 0, w, area)
    dibujarLinea(bordeAbajo, 0, w, w, w, area)
    dibujarLinea(bordeDerecha, w, w, w, 0, area)
    dibujarLinea(bordeArriba, w, 0, 0, 0, area)
// Fin Dibujar Borde

function tamano() {
    area.clearRect(1, 1, 400, 400);
    document.getElementById('mensaje').innerHTML = "<h3>CUIDADO: Es hermoso, pero cambia de colores muy rápido..!<br>[ Ten precaución si sufres de EPILEPSIA ]</h3>"
    c = document.getElementById('tamano').value;

    // Inicio Dibujar con Teclas y Raton
    document.addEventListener("keydown", dibujarConTeclado)
    document.getElementById("area_de_dibujo").addEventListener("mousemove", dibujarConRaton)

    // Dibujar en Mandala
    document.getElementById("alerta").innerHTML = "<button onclick='ejecutaAlerta()' id='alerta'>Presióname</button>"
}

function crearDibujo() {
    dibujarMandala(area, document.getElementById('puntos').value, c / 2);

}

function dibujarMandala(papel, cuenta_puntos, radio) {
    let points = []
    for (let i = 0; i <= cuenta_puntos; i++) {
        angulo = i * 2 * Math.PI / cuenta_puntos - Math.PI / 2;
        points.push({
            'x': radio + radio * Math.cos(angulo),
            'y': radio + radio * Math.sin(angulo)
        });
    }
    papel.clearRect(1, 1, c, c);
    papel.beginPath();
    papel.lineWidth = 1;
    for(let i = 0; i < points.length; i++) {
        for(let j = 0; j < points.length; j++) {
            papel.moveTo(points[i].x, points[i].y);
            papel.lineTo(points[j].x, points[j].y);
        }
    }
    papel.strokeStyle = colorAleatorio();
    papel.stroke();
}

// Crear Mandala
document.getElementById('puntos').oninput = crearDibujo;
crearDibujo();

//let y = dibujarMandala().points
let x = 100
let y = 100

function dibujarConTeclado(evento) {
    let movimiento = 5
    // Uso de "switch/case", para reemplazar temporalmente "if/else" en este ejercicio
    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(bordeArriba, x, y, x, y - movimiento, area)
            y = y - movimiento
        break;
        case teclas.DOWN:
            dibujarLinea(bordeAbajo, x, y, x, y + movimiento, area)
            y = y + movimiento
        break;
        case teclas.RIGHT:
            dibujarLinea(bordeDerecha, x, y, x + movimiento, y, area)
            x = x + movimiento
        break;
        case teclas.LEFT:
            dibujarLinea(bordeIzquierda, x, y, x - movimiento, y, area)
            x = x - movimiento
        break;
        default:
            console.log("Otra Tecla")   
    }
}

function dibujarConRaton(evento2) {
    dibujarLinea(colorAleatorio(), evento2.pageX-8, evento2.pageY -299, evento2.pageX -10, evento2.pageY -301, area)
    console.log(`pageCoords > X:${evento2.pageX} Y:${evento2.pageY}`)
  }

function ejecutaAlerta() {   
    let alert = window.open('','','width=400,height=200')
    alert.document.write('<h2>Perfecto! Ahora mueve el ratón encima del dibujo para colorear</h2><br>[ Este mensaje se cerrará automáticamente ]')
    alert.moveTo(100, 100);
    alert.focus()
    setTimeout(function() {alert.close();}, 5000)
}
