var bars_button=document.querySelector('#click_button')
var bars_button_1=document.querySelector('#spand_menu')
var menu_ul=document.querySelector('#menu_ul')


bars_button.addEventListener('click',function(){
    bars_button_1.style.display='block'
    bars_button.style.display='none'
    menu_ul.style.display='block'
    
});
bars_button_1.addEventListener('click', function(){
    bars_button_1.style.display='none'
    bars_button.style.display='block'
    menu_ul.style.display='none'
});




/////////////////////////////////////////////////////////
var top_nav_button=document.querySelector('#top-contact');
var top_nav_button_contant_close=document.querySelector('#contact-close');
var lcd=document.querySelector('#lcd');


top_nav_button.addEventListener('click', function(){
    lcd.style.display='block'
    top_nav_button_contant_close.style.display='inline-block'
    top_nav_button.style.display='none'
});

top_nav_button_contant_close.addEventListener('click', function(){
    lcd.style.display='none'
    top_nav_button_contant_close.style.display='none'
    top_nav_button.style.display='inline-block'
});