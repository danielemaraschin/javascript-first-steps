let listaDestinos = new Array (
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

let idadeComprador = 16;
const estaAcompanhada = true;
let temPassagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhada
    ){
    console.log("Boa Viagem!");
    listaDestinos.splice (1,1);
    console.log(listaDestinos);
    }else{    
    console.log ("Comprador menor de idade, não vender");    
}

console.log ("Embarque: \n\n")
if ( idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem")
}else{
        console.log("Você não pode embarcar");
}