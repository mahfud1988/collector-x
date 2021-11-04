function menuButton(id){
    var mb = document.getElementsByClassName('menu-button');
    for(i = 0; i < mb.length; i++){
        mb[i].classList.remove('menu-button-active');
    }
    document.getElementById(id).classList.add('menu-button-active');
}
function showCarousel(count){
    var caroux = document.getElementById('carousel-x');
    var x = count * 100;
    if(x >= 0){
        caroux.style.left = '-' + x + '%';
    }else{
        caroux.style.left = x + '%';
    }
    var ccircle = document.getElementsByClassName('cc-circle');
    for(i = 0; i < ccircle.length; i++){
        ccircle[i].classList.remove('cc-circle-active');
    }
    ccircle[count].classList.add('cc-circle-active');
}
const slider = document.querySelector('.explore-body-inner');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
isDown = true;
slider.classList.add('ebinn-active');
startX = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
isDown = false;
slider.classList.remove('ebinn-active');
});
slider.addEventListener('mouseup', () => {
isDown = false;
slider.classList.remove('ebinn-active');
});
slider.addEventListener('mousemove', (e) => {
if(!isDown) return;
e.preventDefault();
const x = e.pageX - slider.offsetLeft;
const walk = (x - startX) * 1;
slider.scrollLeft = scrollLeft - walk;
console.log(walk);
});
document.querySelectorAll(".inrange").forEach(function(el) {       
el.oninput =function(){            
var valPercent = (el.valueAsNumber  - parseInt(el.min)) / (parseInt(el.max) - parseInt(el.min));
    var style = 'background-image: -webkit-gradient(linear, 1% 0%, 100% 0%, color-stop('+ valPercent+', #EB5749), color-stop('+ valPercent+', #E9E6E6));';
    el.style = style;
};
el.oninput();
});
function insort(){
    var insort = document.getElementById('inspiration-sort');
    var fcbtx = document.getElementById('filter-cbtxt');
    if (insort.style.maxHeight) {
        insort.style.maxHeight = null;
        fcbtx.innerHTML = '<i class="fas fa-chevron-down"></i>';
    }else{
        insort.style.maxHeight = insort.scrollHeight + "px";
        fcbtx.innerHTML = '<i class="fas fa-chevron-up"></i>';
    }
}
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    var section = document.getElementsByClassName('section');
    var heighna = section[0].offsetHeight + section[1].offsetHeight + section[2].offsetHeight + section[3].offsetHeight + section[4].offsetHeight + section[5].offsetHeight;
    var heighnb = section[0].offsetHeight + section[1].offsetHeight + section[2].offsetHeight + section[3].offsetHeight + section[4].offsetHeight + section[5].offsetHeight + section[6].offsetHeight - 290;
    var topcoel = document.getElementById('topco');
    var ctctt = document.getElementById('ctopco-title');
    var ctctx = document.getElementById('ctopco-sticky-inner');
    if(document.body.scrollTop > heighna & document.body.scrollTop < heighnb || document.documentElement.scrollTop > heighna & document.documentElement.scrollTop < heighnb){
        ctctt.classList.add('ctopco-sticky');
        ctctx.classList.add('ctopco-sticky-inner');
    }else{
        if(ctctt.classList.contains('ctopco-sticky')){
            ctctt.classList.remove('ctopco-sticky');
            ctctx.classList.remove('ctopco-sticky-inner');
        }
    }
}
function cfooter(){
    var ftctp = document.getElementById('footer-crtop');
    var footerc = document.getElementById('footer-inner-2');
    var cftext = document.getElementById('cf-text');
    var cficon = document.getElementById('cf-icon');
    if (footerc.style.maxHeight) {
        footerc.style.maxHeight = null;
        cftext.innerHTML = 'Expand Footer';
        cficon.innerHTML = '<i class="fas fa-chevron-up"></i>';
        ftctp.style.display = 'block';
    }else{
        footerc.style.maxHeight = footerc.scrollHeight + "px";
        cftext.innerHTML = 'Collapse Footer';
        cficon.innerHTML = '<i class="fas fa-chevron-down"></i>';
        ftctp.style.display = 'none';
    }
}
window.onload = function(){
    document.getElementById('cf-button').click();
}