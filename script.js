var icon = document.querySelector("#menu")
var scr = document.querySelector("#yogesh1")

var flag = 0

icon.addEventListener("click",function(){
    if(flag == 0){
        scr.style.opacity = "1"
        icon.innerHTML = '<i class="ri-close-circle-fill"></i>'
        flag = 1
    }else{
        scr.style.opacity = "1%"
        icon.innerHTML = '<i class="ri-menu-line"></i>'
        flag = 0
    }
})