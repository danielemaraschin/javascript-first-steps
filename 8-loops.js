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

while ( contador < 3){    
    if(listaDestinos [contador] == destino){
            destinoExiste = true;
         break;
    }
     //else{
    //     console.log('Destino não existe')
    // }
    contador++;
}   

console.log ("Destino existe", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!")
}