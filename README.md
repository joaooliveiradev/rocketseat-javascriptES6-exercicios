
# Este projeto é apenas os exercícios finais de cada módulo do curso de JavaScript ES6 Starter da RocketSeat

## Exercícios: Módulo 01 

**1) Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario".**

**A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
`true` na classe.**

**Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
retorna se o usuário é administrador ou não baseado na propriedade `admin` ser `true` ou não.**

```javascript
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
```

**2) A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):**
```javascript
const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
```
**2.1) Utilizando o ```map```**  

Crie uma variável que contenha todas idades dos usuários: [23, 15, 30] 

**2.2) Utilizando o ```filter```**  

Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

**2.3) Utilizando o ```find```**  

Crie uma variável que procura por um usuário que trabalhe na empresa Google: ```undefined```

**2.4) Unindo operações**  

Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:

```javascript
// Resultado:
[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
```

**3) Converta as funções nos seguintes trechos de código em Arrow Functions:**
```javascript
// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});
```
```javascript
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);
```
```javascript
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
```
```javascript
// 3.4
const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 })
}
```
**4) Exercícios de Desestruturação**  

**Desestruturação Simples**

A partir do seguinte objeto:
```javascript
const empresa = {
 nome: 'Rocketseat',
 endereco: {
 cidade: 'Rio do Sul',
 estado: 'SC',
 }
};
```
Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
fim deve ser possível fazer o seguinte:
```javascript
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
```

**Desestruturação em parâmetros**

Na seguinte função:
```javascript
function mostraInfo(usuario) {
 return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })
```
Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
separadamente e a função poder retornar apenas:
```javascript
return `${nome} tem ${idade} anos.`;
```
**5) Utilizando o operador de rest/spread (...) realize as seguintes operações:**  

**5.1 Rest**  

A partir do array: ```const arr = [1, 2, 3, 4, 5, 6]``` , defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados
```javascript
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
```
Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
```javascript
// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
```
**5.2 Spread**

A partir do objeto e utilizando o operador spread:

```javascript
const usuario = {
 nome: 'Diego',
 idade: 23,
 endereco: {
 cidade: 'Rio do Sul',
 uf: 'SC',
 pais: 'Brasil',
 }
};
```
Crie uma variável ```usuario2``` que contenha todos os dados do usuário porém com nome ```Gabriel.```  

Crie uma variável ```usuario3``` que contenha todos os dados do usuário porém com cidade ```Lontras.```

**6) Converta o seguinte trecho de código utilizando Template Literals:**
```javascript
const usuario = 'Diego';
const idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
```
**7) Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:**
```javascript
const nome = 'Diego';
const idade = 23;
const usuario = {
 nome: nome,
 idade: idade,
 cidade: 'Rio do Sul',
};
```

## Exercícios: Módulo 02 

**1) Crie um arquivo chamado ```functions.js``` com o seguinte conteúdo:**
```javascript
export const idade = 23;
export default class Usuario {
 static info() {
 console.log('Apenas teste');
 }
}
```
**1.1 Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para ClasseUsuario
e chame a função ```info()```**

**1.2 Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;**

**1.3 Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade
para ```IdadeUsuario```**

## Exercícios: Módulo 03

Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e o
babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.

### Exercício

Transforme os seguintes trechos de código utilizando async/await:

```javascript
// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
}
umPorSegundo();
```
```javascript
import axios from 'axios';
function getUserFromGithub(user) {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
```
```javascript
class Github {
 static getRepositories(repo) {
 axios.get(`https://api.github.com/repos/${repo}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Repositório não existe');
  })
 }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
```
```javascript
const buscaUsuario = usuario => {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 });
}
buscaUsuario('diego3g');
```
