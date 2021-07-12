/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendo;
	var numeroDivisor;
	var mostrarResto;

	numeroDividendo=txtIdNumeroDividendo.value;
	numeroDivisor=txtIdNumeroDivisor.value;

	numeroDividendo = parseInt(numeroDividendo);
	numeroDivisor = parseInt(numeroDivisor);

	mostrarResto = numeroDividendo % numeroDivisor;

	alert("El resto es " + mostrarResto);


}


//txtIdNumeroDividendo
//txtIdNumeroDivisor
//no hace falta poner entre operaciones () para que se hagan las sumas,restas,etc. es solo para dar prioridad a las operaciones.
//no usar verbos para las variables porque pueden confundir con funciones.