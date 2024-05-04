const numero = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');

numeroTitulo.innerHTML = numero;

const texto = document.getElementById('texto');

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p> Arredondamento para baixo: ${Math.floor(numero)}`;
texto.innerHTML += `<p> Arredondamento para cima: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}`;