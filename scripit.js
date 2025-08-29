// Selecionando o botão e o parágrafo pelo ID
const botaoMagia = document.getElementById('btn-magia');
const paragrafoMagico = document.getElementById('paragrafo-magico');

// Adicionando um "ouvinte de evento" (event listener) ao botão
botaoMagia.addEventListener('click', () => {
    // Definindo um array de cores para a magia
    const cores = ['#27ae60', '#9b59b6', '#f39c12', '#2ecc71', '#3498db'];
    
    // Escolhendo uma cor aleatória
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    
    // Mudando o estilo e o texto do parágrafo
    paragrafoMagico.style.color = corAleatoria;
    paragrafoMagico.textContent = 'Parabéns, aventureiro! Você ativou a magia do JavaScript!';
    paragrafoMagico.style.fontWeight = 'bold';
    
    // Desabilitando o botão para que a magia aconteça apenas uma vez
    botaoMagia.disabled = true;
    botaoMagia.textContent = 'Magia Ativada!';
});