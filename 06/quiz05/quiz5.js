const elemList = document.getElementsByClassName('box');
const [$box1, $box2] = elemList;
let startX = 0, startY = 0, tleft = 0, ttop = 0, currentX = 0, currentY = 0;
let $target = null;

function drag(event) {
    if (event.target == $box1) {
        $target = $box1;
    } else if(event.target == $box2) {
        $target = $box2;
    } else {
        return;
    }

    let shiftX = event.clientX - $target.getBoundingClientRect().left;
    let shiftY = event.clientY - $target.getBoundingClientRect().top;
  
    document.body.append($target);
  
    moveAt(event.pageX, event.pageY);
  
    function moveAt(pageX, pageY) {
      $target.style.left = `${pageX - shiftX}px`;
      $target.style.top = `${pageY - shiftY}px`;
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    $target.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      $target = null;
    };
};

$box1.addEventListener('mousedown', drag);
$box2.addEventListener('mousedown', drag);