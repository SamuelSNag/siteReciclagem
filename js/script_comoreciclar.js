function mobile(){
    document.querySelector("main").style.fontSize = "0.8em";
    let sections = document.querySelectorAll(".etapas section");
    let h2 = document.querySelectorAll(".etapas section h2");
    let figuras = document.querySelectorAll(".etapas section figure");
    let divs = document.querySelectorAll("#d1, #d2, #d3, #d4");
    for(i=0; i<sections.length; i++){
        if(i==1 || i==3){
            sections[i].style.flexDirection = "column-reverse";
        } else {
            sections[i].style.flexDirection = "column";
        }
        sections[i].style.fontSize = "1.5em";
        h2[i].style.fontSize = "1.3em";
        figuras[i].style.height = "8em";
        figuras[i].style.width = "fit-content";
        figuras[i].style.borderRadius = "1em";
        figuras[i].children[0].style.height = "8em";
        divs[i].style.width = "fit-content";
        divs[i].style.borderRadius = "0.6em";
        divs[i].style.padding = "0.6em";
    }

}