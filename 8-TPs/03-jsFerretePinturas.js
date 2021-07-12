/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
    var gradoCelsius;

    temperatura=txtIdTemperatura.value;

    temperatura = parseFloat(temperatura);

    gradoCelsius = (temperatura - 32) * 5 / 9;

    alert (temperatura + " Fahrenheit son " + gradoCelsius + " centigrados");
}

function CentigradosFahrenheit () 
{
	var gradoFahrenheit;
    var temperatura;

    temperatura=txtIdTemperatura.value;

    temperatura = parseFloat(temperatura);

    gradoFahrenheit = (temperatura * 1.8) + 32;

    alert (temperatura + " centigrados son " + gradoFahrenheit + " Fahrenheit");
}

//txtIdTemperatura