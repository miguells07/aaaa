// Exercício 1
let timesDeFutebol = ["Flamengo", "Palmeiras", "Grêmio", "São Paulo"];
console.log("Primeiro time:", timesDeFutebol[0]);
console.log("Último time:", timesDeFutebol.at(-1));

// Exercício 2
let minhaListaDeTarefas = ["Comprar pão", "Estudar JavaScript", "Fazer exercícios"];
console.log("Lista de tarefas:", minhaListaDeTarefas);

// Exercício 3
let animais = ["cachorro", "gato", "papagaio", "coelho", "tartaruga"];
for (let i = 0; i < animais.length; i++) {
  console.log(`O animal na posição ${i} é ${animais[i]}`);
}

// Exercício 4
let numeros = [7, 12, 5, 20, 15, 8, 3, 22, 11, 4];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}
// Exercício 5
let frutas = ["maçã", "banana", "uva", "morango", "abacaxi"];
let i = 0;
while (i < frutas.length) {
  console.log(frutas[i]);
  i++;
}
console.log("Fim do Desafio!");

// Exercício 6
for (let num = 2; num <= 9; num++) {
  let linha = "";
  for (let mult = 1; mult <= 10; mult++) {
    linha += `${num} x ${mult} = ${num * mult}  `;
  }
  console.log(linha);
}
