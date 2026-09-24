const obj1 = {
    "name": "Computador",
    "price": 50.9,
    "due-date": "2025-04-15"
}

const obj2 = {
    name: "Computador",
    "price": 50.9,
    "due-date": "2025-04-15"
}

const obj3 = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

const txt = `{"nome": "Computador", "price: 50.9, "due-date": "2025-04-15"}`;

const objt4 = JSON.parse(txt);

const txt2 = JSON.stringify(obj3);

/*
   JSON.parse() -> converte uma string JSON em um objeto JavaScript
   JSON.stringifly() -> corverte um objeto JavaScript em uma string JSON
*/

/*Funções*/

function soma1(a, b) {
    return a + b;
};

const soma2 = function(a, b){
    return a + b;
};

const soma3 = (a, b) => {
    return a + b;
};

const soma4 = (a, b) => a + b;

// Função que não tem retorno definido, retorna undefined
function mostrarPreco(preco) {
    console.log(`O preço R$ ${preco.toFiexd(2)}`);
};

//Variaveis definidas dentro da função pertencem somente ao escopo da função

function areaCirculo(raio) {
    const pi = 3.14;
    return pi * raio * raio;
};

// Function hoisting: declarações de funções são "movidas" para cima pelo motor do JavaScript

teste(5);

function teste(x){
    console.log("Teste 1 "+ x);
}

// Funções podem ser passadas como argumento

function tripolo(num) {
    return num * 3;
}

function aplicarFuncao(num, funcao) {
    const result = funcao(num);
    console.log(`Resultado: ${result}`);
}

aplicarFuncao(5, tripolo);


