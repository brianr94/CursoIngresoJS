/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ingreseImporte;
	var descuento;
	var resultado;

	ingreseImporte=txtIdImporte.value;

	ingreseImporte = parseFloat(ingreseImporte);

	descuento = ingreseImporte - (ingreseImporte * 25 / 100);
	//resultado = ingreseImporte - descuento;

	txtIdResultado.value=descuento;
}

//txtIdResultado
//txtIdImporte