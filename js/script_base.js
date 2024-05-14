console.log(window.innerHeight+" - "+window.innerWidth);
if(window.innerHeight>window.innerWidth) {
    document.querySelector(".principal").style.margin = "16px 4%";
    document.querySelector(".att").innerHTML = '<link rel="stylesheet" href="CSS/style_sup.css">';
    
    let btn = document.querySelector(".btn");
    btn.addEventListener("click", function(){
        let menu = document.querySelector(".flex");
        let tamanho = document.querySelector(".flex nav").offsetHeight;
        if (menu.style.height == "0px" || menu.style.height == "") {
            menu.style.height = ""+tamanho+"px";
        } else {
            menu.style.height = "0px";
        } 
    });
    if (typeof chama === 'function'){
        chama();
    }
}
