let nome = 'Rafael';
let idade = 25;
let estaAprovado = true;
let sobrenome = undefined;
let corSeleccionado = null;
var cidade = 'Sao paulo';

let pessoa = {
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de souza',


};



//Arrays

let familia = [nome,idade,cidade];

console.log(familia[0]);

//function

let nomePessoa = "nomeUsuario"

function resetaNome(nome1,nome2){
    nomePessoa = nome1 + " " + nome2;
};

console.log(nomePessoa);
resetaNome("marcelo e","gabriel")
console.log(nomePessoa)


// Realizar um tarefa , nao devolve nada

function dizerNome(){
     console.log('Daniel')
}

dizerNome();

// faz um calculo e retorna algo

function MultiplicadorPorDois(valor){
    return valor * 2;

}

let resultado = MultiplicadorPorDois(5)

console.log(resultado);
   
// operador ternario

let pontos = 100
let tipo = pontos > 100 ? 'premium' : 'comum'
console.log(tipo)

//*** Operadores logicos

//Operador e  (&&)
//Retorna TRUE se os dois operandos forem true


let maiorDeIdade = false;
let possuirCarteiraDeTrabalho = true;
//let podeAplicar = maiorDeIdade && possuirCarteiraDeTrabalho;

//console.log(podeAplicar)

//Operador Logico ou (||)
//Operador true se um dos operadandos forem true

let podeAplicar = maiorDeIdade || possuirCarteiraDeTrabalho;

console.log(podeAplicar)


// Exercicio 01


let a ='vermelho';
let b = 'azul';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// IF..Else

 let hora = 19;
 //let hora = "Tarde"
 //let hora = "Noite"

 if(hora > 6 && hora < 12) {
    console.log("Bom dia")
 }
 else if(hora > 12 && hora < 18){
    console.log("Boa tarde")
 }
 else {

    console.log("boa noite")
 }
 
 //switch case

let permissao = 'diretor'

 switch (permissao){

    case 'comum':
    console.log('usuario comum');
    break;

    case 'gerente':
    console.log('usuario gerente');
    break;

    case 'diretor':
    console.log('usuario diretor');
    break;
    
    default: 
    console.log('usuario nao indentificado');
 }

 //Loop

 //1.for
 //2.while
 //3.Do..while
 //4.for..In
 //5.for..of

for(let i = 5; i >= 1; i--) {
    if(i % 2 !== 0){
        console.log(i)

    }
    
}

// while loop

/* let i = 0 
// while(i){
    if(i % 2 !== 0){
        console.log(i)
    }
    
}
*/

// For-in loop

const pessoa03 = {
    
    name: 'Danilos',
    age: 25

};
   

for(let chave in pessoa03) {
    console.log(chave,pessoa03['name']);
}

const color = ['black', 'laranja','pink'];

for (let indice in color) {
    console.log(indice,color[indice])

}

//For-of loop
for(let cor of color){
    console.log(cor);

}

//** Exercicio02
let valorMaior = max(5,9)

console.log(valorMaior);

function max(numero1, numero2){

  if(numero1 > numero2)
    return numero1
    return numero2

}

//** Exercicio03


const result = fizBuzz(10);
console.log(result);

function fizBuzz(entrada){
    
    if(typeof entrada !== 'number'  )
    return "Nao é um  numero"

    if(entrada % 3 == 0 && entrada % 5 === 0 )
    return "fizzbuzz" 

    if(entrada % 3 == 0  )
    return "fizz" 

    if(entrada % 5 == 0  )
    return "Buzz" 
    
}


// ** Exercicio04

const pontoCarteira = 0
console.log(verificarVelocidade(97))


function verificarVelocidade(velocidade){

    const velocidadeMaxima = 70
    const pontosCalculado = 5
    const limiteCarteira = 12

      if(velocidade <= velocidadeMaxima )
      return "ok"

       else {

        const pontos1 = Math.floor(((velocidade - velocidadeMaxima) /pontosCalculado  ))
        console.log('Pontos de multa', pontos1 )   
        
        
        if (pontos1 > limiteCarteira )
        console.log("carteira suspensa")
        
       }

}

//Exercicio05

    exibirTipo(5);
    function exibirTipo(limite){
        for (let i = 0; i <= limite; i++)
            if (i % 2 === 0)
                console.log(i,'PAR')
            else 
            console.log(i,'IMPAR')
    }


    //EXERCicio06
    //Resolução 1

    const filmes = ['anabelle','Lana',10];

            for(let movies of filmes){
                if(typeof movies == 'string')
               console.log(movies)
                 
            }

        
    //EXERCicio06
    //Resolução 2

    const cinema ={

        titulo: 'Vingadores',
        anoFilme : 2018,
        personagem : 'thor',
        diretor :'Robin'
    }


    exibirPropriedades(cinema)
    function exibirPropriedades(obj){

        for (prop in obj)
                console.log(prop,obj[prop])

    }

    //EXERCicio07

    som(10);

    function som(limiteTotal){
        let multiplos3 = 0;
        let multiplos5 = 0;

        for( x =0;x <= limiteTotal; x++){
            if(x % 3 == 0)
            multiplos3 += x;
            if(x % 5 == 0)
            multiplos5 += x;
        }
            
         console.log(multiplos3 + multiplos5);
    }

    //Exercicio08

    const array = [70,70,80];

    console.log(mediaDoAluno(array));
 

    function mediaDoAluno(notas){
      
        const media = calcularMedia(notas);
        
        if(media <= 59)
        return 'F';
        if(media <= 69)
        return 'd';
        if(media <= 79)
        return 'c';
        if(media <= 89)
        return 'b';
        return 'a';
    }


    function calcularMedia(array){
        let somar = 0;
        for(let valor of array){
            somar += valor;
        }
        return somar/(array.length)

    }

    //EXERCicio09

    exibirAsteriscos(10)

    function exibirAsteriscos(linhas){
        let padrao ='';
        for(let linha = 1; linha <= linhas; linha++){
            padrao += '*';
            console.log(padrao);
        }
            
    }


    //EXERCicio10

    //exibirNumeroPrimos(15);

    /* function exibirNumeroPrimos(maximo){
        for(let numero = 2; <= maximo; numero++){
            let ehPrimo = true;

                for(let divisor = 2; divisior < numero; divisor++){
                      if(numero % divisor == 0){
                        ehPrimo = false;
                        break;
                          
                      }
                        
                }


            if (ehPrimo) console.log(numero);

        }
    }
    */

    ////////////////////////////////
    // Factory function

    function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
        return {
            marcaCelular,
            tamanhoTela,
            capacidadeBateria,
            ligar() {
                console.log("Fazendo ligação...")
            }
        }

    }


    const celular1 = criarCelular('Zenfone',5.5,5000);
    console.log(celular1);


    //Pascal Case
    function Cel(marcaCel,telaTamanho,capacityBaterry){
        this.marcaCel = marcaCel,
        this.telaTamanho = telaTamanho,
        this.capacityBaterry = capacityBaterry,
        this.on = function(){
            console.log("Calling...");
        }
    }
        const chamar = new Cel('iphone',7.7,400);
        console.log(chamar);
        
    //Interação dinamica JS    
        const mouse = {
            camisa : "yellow",
            calçao : 45

        }
        mouse.velocidade = 500;
        mouse.trocaDPI = function(){
            console.log("mudando DPI");

        }
        delete mouse.velocidade;
        delete mouse.trocaDPI;
        console.log(mouse);

        //Clonando objetos 

        const novoObjeto = Object.assign({

        },mouse);

        console.log(novoObjeto);



        //Exercicio11
        
        let endereço ={

            avenue: 'ana rosa',
            cidade: 'sp', 
            cep: 08131530

        };

        exibirEndereço(endereço)

        function exibirEndereço(dados){

            for (prop1 in dados)
                console.log(prop1,dados[prop1])

        }

        //Exercicio 12

        function adress(rua,city,codigo){
            this.rua = rua,
            this.city = city,
            this.codigo = codigo
        }

        const endereço1 = new adress('g','h','i');
        const endereço2 = new adress('g','h','i');


        function saoIguais(endereço1,endereço2){
            return endereço1.rua === endereço2.rua && endereço1.codigo === endereço2.codigo && endereço1.city === endereço2.city
        }


        //Exercicio 13, 14

        let postagem = {
            titulo : "lop",
            mensagem : 'hi',
            autor : 'anderson',
            viws: 10,
            comentarios : [
                { autor: 'a',mensagem: 'b'},
                { autor: 'a',mensagem: 'b'}

            ],
            estaAovivo : true
        }

        console.log(postagem);

        let faixaPreco = [
            {tooltip: 'ate R$700', MINIMO: 0, maximo: 700},
            {tooltip: 'ate R$700 a R$1000', MINIMO: 0, maximo: 1000},
            {tooltip: 'ate R$100 ou mais', MINIMO: 0, maximo: 90000},

        ];

            











     



   


 





        
    
