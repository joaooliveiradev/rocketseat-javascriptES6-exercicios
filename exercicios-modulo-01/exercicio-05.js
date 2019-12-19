//5.1 Rest

const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr;

function soma(...params) {
    return params.reduce((a, b) => a + b);
}


//5.2 Spread

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: "Gabriel"} 

const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: "Lontras"}}

