console.log("Página carregada com sucesso");

const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    console.log("Botão clicado");
    alert("Você clicou no botão!");
});