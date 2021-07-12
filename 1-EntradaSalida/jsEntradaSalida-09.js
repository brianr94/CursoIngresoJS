/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importeSueldo;
	var	resultadoAumento;

	importeSueldo=txtIdSueldo.value;

	importeSueldo = parseFloat(importeSueldo);

	resultadoAumento = importeSueldo * 1.1;

	document.getElementById('txtIdResultado').value = resultadoAumento;//funciona como el alert, siempre a lo ultimo (resultado siempre a lo ultimo).

}

//txtIdResultado
//txtIdSueldo