/* Cuáles valores se toman por verdaderos y cuáles por falso */

Boolean(); //false
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false


Boolean(1); //Verdadero
Boolean("a"); //Verdadero
Boolean([]); //Verdadero
Boolean({}); //Verdadero
Boolean(function(){}); //Verdadero