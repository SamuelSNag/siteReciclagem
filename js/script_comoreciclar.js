function chama(){
    let sections = document.querySelectorAll(".etapas section");
    let divs = document.querySelectorAll("#d1, #d2, #d3, #d4");
    for(i=0; i<sections.length; i++){
        if(i==1 || i==3){
            sections[i].style.flexDirection = "column-reverse";
        } else {
            sections[i].style.flexDirection = "column";
        }
        divs[i].style.width = "100%";
    }
}