let listaDestinos = new Array (
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

let idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Maranhão";

console.log("\n Destinos Possíveis:");
console.log(listaDestinos);



const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

for (let cont = 0 ;cont < 3, cont++){    
    if(listaDestinos [contador] == destino){
            destinoExiste = true;
        break;
    }
  }   

console.log ("Destino existe", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!")
}