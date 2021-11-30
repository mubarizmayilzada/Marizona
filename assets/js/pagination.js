const ulTag = document.querySelector("ul");
let totalPages = 20;
function element(totalPages, page) {
    let liTag = "";
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;
    if(page > 1){
        liTag += `<li class="libutton prev" onclick = "element(totalPages, ${page - 1})><span><i class="fas fa-angel-left"></i> Prev</span></li>` ;
    }

        for (let pageLength = beforePages; pageLength < afterPages; pageLength++) {
            if (page == pageLength) {
                activeLi = 'active';
            }
            else{
                activeLi = '';
            }
            liTag += `<li class="numb ${activeLi}"><span>${pageLength}</span> </li>`
        }

    if(page < totalPages){
        liTag += `<li class="libutton next" onclick = "element(totalPages, ${page + 1}><span>Next <i class="fas fa-angel-right"></i>Prev</span></li>` ;
    }
    ulTag.innerHTML = liTag;
}
element(totalPages, 5);