var $target = document.getElementById('box');
var startX = 0, startY = 0, tleft = 0, ttop = 0, currentX = 0, currentY = 0;

function dragStart() {
    var $target = document.getElementById('box');
    var e = window.event;
    
    startX = e.clientX;
    startY = e.clientY;
    tleft = $target.offsetLeft;
    ttop = $target.offsetTop;

    $target.addEventListener('mousemove', draging);
    document.addEventListener('mouseup', dragdrop);
}

function draging() {
    var e = window.event;
    var $target = document.getElementById('box');
    var currentX = e.clientX;
    var currentY = e.clientY;
    var resultX = currentX - startX;
    var resultY = currentY - startY;
    
    
    $target.style.left = (tleft + resultX)+"px";
    $target.style.top = (ttop + resultY)+"px";
    $target = document.getElementById('box');
}

function dragdrop() {
    var $target = document.getElementById('box');
    $target.removeEventListener('mousedown', dragStart);
    $target.removeEventListener('mousemove', draging);
    $target.removeEventListener('mousedrop', dragdrop);
    console.log('마우스 클릭 해제');
}

function EventAdder() {
    var $target = document.getElementById('box');
    $target.addEventListener('mousedown', dragStart);
}


$target.addEventListener('click', EventAdder);
