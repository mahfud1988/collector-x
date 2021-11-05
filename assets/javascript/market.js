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
var plbtn = document.getElementsByClassName('prolist-bt-button');
var i;
for(i = 0; i < plbtn.length; i++){
    plbtn[i].addEventListener('click', function(){
        var dd = this.nextElementSibling;
        if(dd.style.display === 'none'){
            dd.style.display = 'block';
            for(j = 0; j < this.children.length; j++){
                if(this.children[j].classList.contains('prolist-bt-icon')){
                    this.children[j].innerHTML = '<i class="fas fa-chevron-up"></i>';
                }
            }
        }else{
            dd.style.display = 'none';
            for(j = 0; j < this.children.length; j++){
                if(this.children[j].classList.contains('prolist-bt-icon')){
                    this.children[j].innerHTML = '<i class="fas fa-chevron-down"></i>';
                }
            }
        }
    });
}
function showProlist(id){
    var prtab = document.getElementsByClassName('prolist-tab');
    for(i = 0; i < prtab.length; i++){
        prtab[i].style.display = 'none';
    }
    if(id == 'prolist-tab-card'){
        document.getElementById('prolist-bt-card').innerHTML = '<img src="assets/images/bt4imgb.png" alt="collector-x">';
        document.getElementById('prolist-bt-table').style.background = 'white';
        document.getElementById('prolist-bt-table').style.color = '#230604';
    }else{
        document.getElementById('prolist-bt-card').innerHTML = '<img src="assets/images/bt4img.png" alt="collector-x">';
        document.getElementById('prolist-bt-table').style.background = '#52AFB2';
        document.getElementById('prolist-bt-table').style.color = 'white';
    }
    document.getElementById(id).style.display = 'block';
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
    document.getElementById('prolist-bt-table').click();
    document.getElementById('cf-button').click();
}