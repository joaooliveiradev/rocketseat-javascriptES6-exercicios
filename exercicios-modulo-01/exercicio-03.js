// 3.1
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10);


// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);


// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = function () {
    return new Promise(function (resolve, reject) {
        return resolve();
    })
}

const promise = () => new Promise(resolve,reject => resolve());


