let expand_popup = document.getElementById('expand_popup');
let popup_container = document.querySelector('.popup_container');
let popup = document.querySelector('.popup');
let close = document.querySelector('.close');
expand_popup.addEventListener('click',()=>{
    popup.style.display = 'block';
});
close.addEventListener('click',()=>{
    popup.style.display = 'none';
});
popup_container.addEventListener('click',()=>{
    popup.style.display = 'none';
});