var sexta = [50,100,75,70];

function setup (){

  createCanvas (200,200);


}
function draw () {

  background ("white");
  mediasextas ();


}

function mediasextas () {

  var totalsexta = sexta [0] + sexta [1] + sexta [2] + sexta [3];

  var resultado = totalsexta / sexta.length;

  alert ("resultado:"  + resultado);

}
