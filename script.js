//HOla Mundo
//alert('Hola Mundo');
console.log('Hola Mundo');

// comentario de línea
/*
Comentario de
varias líneas
 */

console.log('Línea uno');
console.log('Línea dos');

// Variables

let a = 5;
console.log(a);
 
// cadenas

let nombre = 'Roberto';
console.log("Hola mundo",nombre);
console.log('Hola Mundo'+nombre);
console.log(`Hola Mundo ${nombre}`);

//let b = 4, c = 5, d = 6;

let b = 4;
let c = 5;
let d = 6;

let nombreCompleto = 'Roberto Morales';
let nombre_completo = 'Roberto Morales';

let $ = 1;
let _ = 2;

// Constantes

const PI = 3.1416;
const COLOR_BLANCO = '#FFFFFFF';
//PI = 5;
//const codigo = getId();

// Tipos de datos

// Dinámicamente tipado, Case Sensitive

let x;
x = 25;
x = 2.2425;
x = "Hola";
x = true;

// Tipo de dato Number
let n = 4;
n = 4.2526;

let num = n;
num = 5;
console.log(n);
console.log(num);

//Valores numéricos especiales:  Infinity, NaN
console.log(1/0);
console.log("Hola" / 2);

// Tipo dato BigInt
// mayores que(2^52 - 1) 9.007.199.254.740.991

num = 444451234567789854322345667765223n;
console.log(num);

// Tipo String

nombre = 'Roberto';
let mensaje = "Hola mundo";
mensaje = 'Hola mundo';
mensaje = `Hola mundo`; //backticks acepta interpolación (funcionalidad extendida)

// Tipo Boleano
let verdadero = true;
let falso = false;

// Valor null

num = null;
// en JS null NO significa un objeto inexistente;
// Un valor especial que representa nada, vacío o valor desconocido;

// Valor undefined

// Valor especial que significa no asignado

let prueba;
console.log(prueba);

// typeof typeof(variable)
num = 4;
console.log(typeof(num));
num = 4.5;
console.log(typeof(num));
num = "h"/2;
console.log(typeof(num));
num = 1/0;
console.log(typeof(num));
num = true;
console.log(typeof(num));
num = null;
console.log(typeof(num)); // ERROR DE JAVASCRIPT

// Conversión de datos

let cadena = "123";
let conversion = Number(cadena);
conversion = Number("4z"/2);

console.log(`El valor ${conversion} es de tipo ${typeof(conversion)}`);

/*     Tabla de conversiones NUMBER    */
/*
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN

*/

// Conversiones numéricas ocurren automaticcament en funciones matemáticas y expresiones
conversion = '6' / 2;
conversion = '6' * 2;
conversion = '6' * '2';
conversion = '6' + '2'; // el + prevalece la concatenación que la suma
conversion = null * true;
conversion = true * true;

// Concatenación prevalece con el signo +
conversion = 1 + '2';
conversion = '1' + 2;
conversion = 2 + 2 + '1';
console.log(`El valor ${conversion} es de tipo ${typeof(conversion)}`);

// Conversión Booleano

/*     Tabla de conversiones BOOLEANA    */
/*
undefined -> false
null -> false
string '' -> false
0 -> false
NaN -> false
string '0'-> true
'    ' -> true
string 'hola' -> true
[1-x] -> true
*/

// Conversiones implícitas en bloque if y while

conversion = Boolean('hola');
console.log(`El valor ${conversion} es de tipo ${typeof(conversion)}`);

// COMPARACIONES

// Al comparar valores de diferentes tipos, JS primero convierte los valores a Números.
// toda comparación con NaN es false.
// El undefined y el null son iguales entre si pero no a ningún otro valor (igualación no estricta ==)

console.log(2 > true); // true
console.log('2' > 1); // true
console.log('hola' > 0); // false
console.log('hola' < 0); // false
console.log('hola' == 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); //true ERROR DE JAVASCRIPT
console.log(null == 0); // false
console.log(null == undefined); // true
console.log(null === undefined); // false




/*     Tabla de conversiones NUMBER    */
/*
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN

*/