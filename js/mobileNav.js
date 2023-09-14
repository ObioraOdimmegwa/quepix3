function mobileNav(){
    document.getElementById("m1").addEventListener("click", close )
    document.getElementById("m2").addEventListener("click", close);
    document.getElementById("m3").addEventListener("click", close);
}

function close(){
    document.getElementById("mmNav").classList.remove("sidebar-visible");
    document.getElementById("bbIcon").classList.remove("burger-close");
    document.getElementById("bbIcon2").classList.remove("burger-close");
}

mobileNav();