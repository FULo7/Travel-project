const icon = document.querySelector("#icon");
icon.onclick = () =>{
    document.body.classList.toggle("dark-theme");
    icon.src = "./dark theme icon/dark theme icon/sun.png";
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./dark theme icon/dark theme icon/sun.png";
    } else {
        icon.src = "./dark theme icon/dark theme icon/moon.png";
    }
}