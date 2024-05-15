console.log(window.innerHeight+" - "+window.innerWidth);
if(window.innerHeight>1400){
    if(window.innerHeight>window.innerWidth) {
        document.querySelector(".principal").style.margin = "16px 4%";
        document.querySelector(".att").innerHTML = '<link rel="stylesheet" href="CSS/style_sup.css">';
        
        let btn = document.querySelector(".btn");
        btn.addEventListener("click", function(){
            let menu = document.querySelector(".flex");
            let tamanho = document.querySelector(".flex nav").offsetHeight;
            if (menu.style.height == "0px" || menu.style.height == "") {
                menu.style.height = ""+tamanho+"px";
                document.querySelector(".btn").innerHTML = "✖︎";
                document.querySelector(".btn").style.fontSize = "2em";
            } else {
                document.querySelector(".btn").innerHTML = "≡";
                document.querySelector(".btn").style.fontSize = "2.5em";
                menu.style.height = "0px";
            } 
        });
        if (typeof mobile === 'function'){
            mobile();
        }
    }  
}
