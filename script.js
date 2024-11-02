const filmes = {
    ação: [
        "Mad Max: Estrada da Fúria",
        "John Wick",
        "Duro de Matar",
        "Os Vingadores"
    ],
    comédia: [
        "A Grande Aposta",
        "Superbad: É Hoje",
        "As Branquelas",
        "O Lobo de Wall Street"
    ],
    drama: [
        "A Rede Social",
        "O Poderoso Chefão",
        "Forrest Gump",
        "Parasita"
    ],
    terror: [
        "O Exorcista",
        "Corra!",
        "A Bruxa",
        "It: A Coisa"
    ]
};

function recomendarFilme() {
    const categoria = document.getElementById("category").value;
    const filmesCategoria = filmes[categoria];
    const filmeAleatorio = filmesCategoria[Math.floor(Math.random() * filmesCategoria.length)];
    
    document.getElementById("recomendacao").textContent = `Recomendação: ${filmeAleatorio}`;
}
