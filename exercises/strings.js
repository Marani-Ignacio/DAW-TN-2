//2-a)
var palabra = "Monumental";
console.log(palabra.toUpperCase());

//2-b)
var palabra = "River Plate";
resultado = palabra.substring (0,5);
console.log(resultado);

//2-c)
var palabra = "River Plate";
resultado = palabra.substring (5);
console.log(resultado);

//2-d)
var palabra = "DESARROLLO WEB";
primeraLetra = palabra.substring (0,1).toUpperCase();
restoPalabra = palabra.substring (1).toLowerCase();
console.log(primeraLetra + restoPalabra);

//2-e)
var palabra = "Desarrollo web";
posicion = palabra.indexOf(" ");
console.log(posicion);

//2-f)
var palabra = "dESARROLLO wEB";
espacioEnBlanco = palabra.indexOf(" ");

primeraPalabra = palabra.substring (0, espacioEnBlanco);
primeraLetraPrimeraPalabra = primeraPalabra.substring (0,1).toUpperCase();
restoPrimeraPalabra = primeraPalabra.substring (1, espacioEnBlanco).toLowerCase();
primeraPalabra = primeraLetraPrimeraPalabra + restoPrimeraPalabra;

segundaPalabra = palabra.substring (espacioEnBlanco + 1);
primeraLetraSegundaPalabra = segundaPalabra.substring (0,1).toUpperCase();
restoSegundaPalabra = segundaPalabra.substring (1).toLowerCase();
segundaPalabra = primeraLetraSegundaPalabra + restoSegundaPalabra;

console.log(primeraPalabra + " " + segundaPalabra);