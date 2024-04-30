const numero = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const rquad = document.getElementById('rquad');
const int = document.getElementById('int');


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Seu Número +2 é ${numero + 2} </p>`;
rquad.innerHTML = `Raiz quadrada: ${numero ** 0.5}`;
int.innerHTML = `${numero} é inteiro: ${Number.isInteger(numero)}`;
