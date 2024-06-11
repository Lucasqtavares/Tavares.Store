// Alterar conteúdo de um elemento HTML
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('h1').innerHTML = "Bem-vindo à nossa Loja  Tavares Store!";
});

// Função de validação do formulário
function validateForm(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name === "" || email === "" || message === "") {
        alert("Todos os campos devem ser preenchidos.");
        return false;
    } else {
        alert("Mensagem enviada com sucesso!");
        console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
        document.getElementById('contactForm').reset();
    }
}

// Alterar estilo de um elemento
document.querySelector('button').addEventListener('mouseover', () => {
    document.querySelector('button').style.backgroundColor = '#555';
});

document.querySelector('button').addEventListener('mouseout', () => {
    document.querySelector('button').style.backgroundColor = '#333';
});


// Função para adicionar produtos ao carrinho
function addToCart(productName, price) {
    // Aqui você pode adicionar lógica para adicionar o produto ao carrinho
    console.log(`Produto "${productName}" adicionado ao carrinho por R$ ${price}.`);
    // Adicione aqui a lógica para adicionar o produto ao carrinho
}
// Array para armazenar os produtos no carrinho
let carrinho = [];

// Função para adicionar produtos ao carrinho
function addToCart(productName, price) {
    // Cria um objeto representando o produto
    const product = {
        nome: productName,
        preco: price
    };

    // Adiciona o produto ao carrinho
    carrinho.push(product);

    // Exibe uma mensagem de sucesso
    alert(`"${productName}" adicionado ao carrinho por R$ ${price}.`);
}

// Função para exibir o conteúdo do carrinho
function showCart() {
    // Verifica se o carrinho está vazio
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
    } else {
        let message = "Produtos no carrinho:\n";
        // Itera sobre cada produto no carrinho e adiciona à mensagem
        carrinho.forEach((product, index) => {
            message += `${index + 1}. ${product.nome} - R$ ${product.preco}\n`;
        });
        // Exibe a mensagem com os produtos no carrinho
        alert(message);
    }
}
