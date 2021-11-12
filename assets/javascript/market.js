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
var plbtn = document.getElementsByClassName('tf-option');
var i;
for(i = 0; i < plbtn.length; i++){
    plbtn[i].addEventListener('click', function(){
        var pbday = document.getElementsByClassName('prolist-bt-day');
        var olable = document.getElementsByClassName('tf-olable');
        if(this.children[0].getAttribute('data-value')){
            document.getElementById('tf-button-text').innerHTML = this.children[0].getAttribute('data-value');
            for(j = 0; j < pbday.length; j++){
                pbday[j].classList.remove('pbday-active');
            }
            for(j = 0; j < pbday.length; j++){
                if(pbday[j].children[0].innerHTML == this.children[0].getAttribute('data-value')){
                    pbday[j].classList.add('pbday-active');
                }
            }
        }else{
            for(j = 0; j < pbday.length; j++){
                pbday[j].classList.remove('pbday-active');
            }
            this.classList.add('pbday-active');
            for(j = 0; j < olable.length; j++){
                if(olable[j].children[0].getAttribute('data-value') == this.children[0].innerHTML){
                    olable[j].click();
                }
            }
        }
    });
}
var stbtn = document.getElementsByClassName('stbtn');
var i;
for(i = 0; i < stbtn.length; i++){
    stbtn[i].addEventListener('click', function(){
        var bn = this.nextElementSibling;
        if(bn.style.display === 'none'){
            var bz = document.getElementsByClassName('bzelem');
            for(j = 0; j < bz.length; j++){
                bz[j].style.display = 'none';
            }
            var bt = document.getElementsByClassName('ntb-star-button');
            for(k = 0; k < bt.length; k++){
                bt[k].innerHTML = '<img src="assets/images/hbstar.png" alt="collector-x">';
            }
            bn.style.display = 'block';
            if(this.classList.contains('ntb-star-button')){
                this.innerHTML = '<img src="assets/images/blstar.png" alt="collector-x">';
            }
        }else{
            bn.style.display = 'none';
            if(this.classList.contains('ntb-star-button')){
                this.innerHTML = '<img src="assets/images/hbstar.png" alt="collector-x">';
            }
        }
    });
}
var tslist = document.getElementsByClassName('tso-oplist');
var i;
for(i = 0; i < tslist.length; i++){
    tslist[i].addEventListener('click', function(){
        for(j = 0; j < this.children.length; j++){
            if(this.children[j].classList.contains('checkplus')){
                if(this.children[j].children[0].classList.contains('tdplus')){
                    this.children[j].innerHTML = '<img class="tdcheck" src="assets/images/tdcheck.png" alt="collector-x">';
                }else{
                    this.children[j].innerHTML = '<img class="tdplus" src="assets/images/tdplus.png" alt="collector-x">';
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
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    var cheight = document.getElementsByClassName('cheight');
    var heighna = cheight[0].offsetHeight + cheight[1].offsetHeight + cheight[2].offsetHeight;
    var heighnb = heighna + cheight[3].offsetHeight - 200;
    var nthead = document.getElementById('ntable-head');
    var nthdr = document.getElementById('ntable-head-row');
    var ntbody = document.getElementById('ntable-body');
    if(document.body.scrollTop > heighna & document.body.scrollTop < heighnb || document.documentElement.scrollTop > heighna & document.documentElement.scrollTop < heighnb){
        ntbody.style.marginTop = nthead.offsetHeight + 'px';
        nthead.classList.add('nth-sticky');
        nthdr.classList.add('nhr-sticky');
    }else{
        ntbody.style.marginTop = 0;
        nthead.classList.remove('nth-sticky');
        nthdr.classList.remove('nhr-sticky');
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
    document.getElementById('prolist-bt-table').click();
    document.getElementById('cf-button').click();
}