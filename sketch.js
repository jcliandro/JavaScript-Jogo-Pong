//Jogo Pong
//Iniciado em 16/06/2023
//Autor: Jean CArlos Liandro

let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let velocidadeXbolinha = 5;
let velocidadeYbolinha = 5;


function setup (){
  createCanvas(600, 400);
}

function draw (){
  background (5)
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXbolinha
  yBolinha += velocidadeYbolinha
  
  if (xBolinha + raio > width || xBolinha -raio < 0) {
    velocidadeXbolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYbolinha *= -1;
  }
}