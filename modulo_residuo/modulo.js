document.getElementById("mod").addEventListener("click", modulo)

function modulo(){
	let numeros = prompt("Escribe un número entre 3 y 100:")
	if (numeros > 100){
		numeros = 100
	} else if (numeros < 3){
		document.write(`Ingresaste <b>${numeros}</b>. Te di la opción de empezar desde 3, desde ahí haremos la operación matemática.<br><br>`)
		numeros = 3
	}
	for(i = 1; i <= numeros; i ++){
		if (compara(i,3) && compara(i,5)) {
			document.write(`<b>${i}</b> => Divisible por 3 y 5`)
		} else if (compara(i,3)) {
			document.write(`<b>${i}</b> => Divisible por 3`)
		} else if (compara(i,5)) {
			document.write(`<b>${i}</b> => Divisible por 5`)
		} else {
			document.write(`<b>${i}</b>`)
		}
		document.write("<br>")
	}
}

function compara(i,num){
	if (i % num == 0){
		return true
		} else {
			return false
		}
}