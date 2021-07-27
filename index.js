let sono_audio = document.querySelector("audio.sono");
let sharingan_img = document.querySelector(".img-sharingan");
let normal_img = document.querySelector(".img-normal-sharingan");
let container = document.querySelector(".container")

container.addEventListener("click", Play);

function Play(){
    sono_audio.play();
    container.classList.toggle("active");

}