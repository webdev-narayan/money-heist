let menu = document.querySelector('#nav_btn');
let navlinks = document.querySelector('.links');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navlinks.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navlinks.classList.remove('active')
}