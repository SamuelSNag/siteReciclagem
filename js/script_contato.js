function mobile(){
    document.querySelector(".principal").style.width = "80%";
    document.querySelector(".principal").style.height = "66dvh";
    document.querySelector(".principal .titulo h1").style.fontSize = "2em";
    document.querySelector(".principal .titulo p").style.fontSize = "0.9375em";
    document.querySelector(".principal form fieldset").style.borderRadius = "0.8em";
    let labels = document.querySelectorAll(".principal .conteudo fieldset label");
    for(i=0; i<labels.length; i++){
        labels[i].style.fontSize = "1em"
    }
    let input = document.querySelector(".principal .conteudo fieldset input");
    input.style.fontSize = "1.2em";
    input.style.width = "90%";
    input.style.padding = "0.3em 0.5em"
    let txta = document.querySelector(".principal .conteudo fieldset textarea");
    txta.style.fontSize = "1.2em";
    txta.style.width = "90%";
    txta.style.padding = "0.3em 0.5em"
    document.querySelector(".principal .conteudo fieldset button").style.fontSize = "1em";
    document.querySelector(".principal .conteudo fieldset button").style.padding = "0.3em 1.2em";
}