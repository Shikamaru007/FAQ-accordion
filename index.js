
function toggleAcc(element){
    const allItems = document.querySelectorAll(".block-deet");
    const openDeets = element.nextElementSibling;
    const allIcons = document.querySelectorAll(".icons");
    const currentIcon = element.querySelector(".icons");
    
    allItems.forEach((item, index) => {
        if(item !== openDeets){
            item.classList.remove("active");
            item.style.maxHeight = "0px";
            allIcons[index].src = "assets/images/icon-plus.svg";      
        }      
    })

    if(openDeets.classList.contains("active")){
        openDeets.style.maxHeight = null;
        openDeets.classList.remove("active");
        currentIcon.classList.remove("active")
        currentIcon.src = "assets/images/icon-plus.svg";
    }
    else {
        openDeets.classList.add("active");
        openDeets.style.maxHeight = `${openDeets.scrollHeight}px`;
        currentIcon.classList.add("active")
        currentIcon.src = "assets/images/icon-minus.svg";
        
    }


}