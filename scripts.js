// Adicione scripts globais aqui

// Exemplo: Alterar cor de fundo aleatoriamente
function changeBackgroundColor() {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ffcc99'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Exemplo: Exibir mensagem de boas-vindas no console ao carregar a página
console.log('Bem-vindo ao Meu Site!');

// Exemplo: Manipular o formulário de login
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Adicione lógica de autenticação aqui (por exemplo, exibir mensagem)
        console.log(`Tentativa de login - Usuário: ${username}, Senha: ${password}`);
        alert('Login bem-sucedido! (Apenas simulação)');
    });
});
