/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;
    var terrenoMetro;
    var alambreTotal;

    largoTerreno=txtIdLargo.value;
    anchoTerreno=txtIdAncho.value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    terrenoMetro = 2 * (largoTerreno + anchoTerreno);
    alambreTotal = 3 * terrenoMetro;

    alert ("Alambre a comprar es " + alambreTotal + " metros");
}
function Circulo () 
{
	var radioCirculo;
    var cantidadAlambre;
    var alambreTotal;

    radioCirculo=txtIdRadio.value;

    radioCirculo = parseFloat(radioCirculo);

    cantidadAlambre = 2 * Math.PI.toFixed(3) * (radioCirculo);
    alambreTotal = 3 * cantidadAlambre;

    alert ("Alambre a comprar " + alambreTotal + " metros");
}
function Materiales () 
{
	var largoTerreno;
    var anchoTerreno;
    var bolsaCal;
    var bolsaCemento;
    var totalTerreno;

    largoTerreno=txtIdLargo.value;
    anchoTerreno=txtIdAncho.value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    totalTerreno = largoTerreno * anchoTerreno;
    bolsaCal = (totalTerreno * 3).toFixed(2);
    bolsaCemento = (totalTerreno * 2).toFixed(2);

    alert ("Se necesitan " + bolsaCemento + " bolsas de cemento " + " y " + bolsaCal + " bolsas de cal");
}


//txtIdLargo
//txtIdAncho
//txtIdRadio