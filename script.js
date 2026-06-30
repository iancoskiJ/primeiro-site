const curtidas = document.getElementById("curtidas") // Pega o botão de curtidas
curtidas.addEventListener("click",aumentarCurtidas) // quando clicar chama a função

// função de aumentar curtidas
function aumentarCurtidas(){
let quantidade = document.querySelector("span")
quantidade.textContent++;
}