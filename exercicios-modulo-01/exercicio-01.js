class Usuario {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    isAdmin() {
        return this.admin === true;
    }

}

/* Sua contrução está equivocada aqui, bati muito a cabeça nessa parte, mas basicamente, se você der um console.log no Adm1,
ele retornará undefined,undefined,true. Ou seja, o Admin não está passando o email e a senha para o usuario, isso acontece 
por causa do constructor na classe admin sobrepondo o construtor da classe Usuario.

class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}
*/

class Admin extends Usuario {
        admin = true;
}
//Em cima a propriedade admin apenas será adicionada ao objeto resultante, mas lembre de instalar o classproperties pra isso.

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');



console.log(User1.isAdmin());
console.log(Adm1.isAdmin()); 

