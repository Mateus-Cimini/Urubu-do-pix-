function rende(event) {
    event.preventDefault();

    let grana = document.getElementById("inputGrana").value;
    let textoResultado = document.getElementById("texto-resultado");
    let areadoresultado = document.getElementById("areadoresultado");

    let rendimento = ( grana * 10 )

    textoResultado.innerHTML = "Em 30 dias você vai receber = R$" + rendimento;

    areadoresultado.classList.remove("esconde")

}