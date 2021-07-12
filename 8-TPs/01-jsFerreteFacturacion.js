/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
    var precio2;
    var precio3;
    var sumaFinal;

    precio1=txtIdPrecioUno.value;
    precio2=txtIdPrecioDos.value;
    precio3=txtIdPrecioTres.value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    sumaFinal = (precio1 + precio2 + precio3);

    alert ("El precio final es " + sumaFinal );
}
function Promedio () 
{
	var precio1;
    var precio2;
    var precio3;
    var promedioFinal;

    precio1=txtIdPrecioUno.value;
    precio2=txtIdPrecioDos.value;
    precio3=txtIdPrecioTres.value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    promedioFinal = (precio1 + precio2 + precio3) / 3;

    alert ("El promedio es " + promedioFinal);

}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var precioFinal;

    precio1=txtIdPrecioUno.value;
    precio2=txtIdPrecioDos.value;
    precio3=txtIdPrecioTres.value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    precioFinal = (precio1 + precio2 + precio3) * 1.21;

    alert ("El precio Final es " + precioFinal);
}



//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres