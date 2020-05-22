let listaDestinos = new Array (
        "Salvador",
        "São Paulo",
        "Rio de Janeiro"
);

let idadeComprador = 16;
const estaAcompanhada = true;

if (idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDestinos.splice (1,1);
        // remover item por que esse destino está sendo vendido
        console.log(listaDestinos);
}else if(estaAcompanhada){
        console.log("Comprador menor de idade mas acompanhado");
        listaDestinos.splice (1,1);
        console.log(listaDestinos);

    }else{    
    console.log ("Comprador menor de idade, não vender");
    console.log (listaDestinos);
    }
}

