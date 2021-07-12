/*Riani, Brian

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultadoSuma;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoSuma = numeroUno + numeroDos;

	alert ("la suma es " + resultadoSuma);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultadoResta;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoResta = numeroUno - numeroDos;

	alert ("la resta es " + resultadoResta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultadoMultipilicar;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoMultipilicar = numeroUno * numeroDos;

	alert ("la multiplicacion es " + resultadoMultipilicar);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultadoDivision;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoDivision = numeroUno / numeroDos;

	alert ("la division es " + resultadoDivision);
}
