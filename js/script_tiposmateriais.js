function mobile(){
    let paragrafos = document.querySelectorAll(".principal .conteudo p");
    for(i=0; i<paragrafos.length; i++){
        paragrafos[i].style.fontSize = "0.75em";
    }
    let h1 = document.querySelector(".principal h1");
    h1.style.fontSize = "1.6em";
    let li = document.querySelectorAll(".introducao ul li");
    for(i=0; i<li.length; i++){
        li[i].style.fontSize = "0.75em";
    }
    let h2 = document.querySelectorAll(".principal h2");
    for(i=0; i<h2.length; i++){
        h2[i].style.fontSize = "1.2em";
    }
    let secao = document.querySelectorAll(".principal section");
    for(i=0; i<secao.length; i++){
        secao[i].style.flexWrap = "wrap";
    }
    let items = document.querySelectorAll(".principal .items");
    let h3 = document.querySelectorAll(".principal h3");
    let cartao = document.querySelectorAll(".principal .cartao");
    let img = document.querySelectorAll(".principal .cartao img");
    let p = document.querySelectorAll(".principal .cartao .cartao-back p");
    for(i=0; i<items.length; i++){
        items[i].style.width = "fit-content";
        items[i].style.margin = "0.5em";
        h3[i].style.fontSize = "1em";
        cartao[i].style.height = "9.4736em";
        cartao[i].style.width = "7.105em";
        img[i].style.height = "9.4736em";
        img[i].style.width = "7.105em";
        p[i].style.fontSize = "0.84em";
        p[i].style.fontWeight = "bold";
    }
}