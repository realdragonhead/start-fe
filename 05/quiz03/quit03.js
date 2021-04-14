var $box = document.querySelector('.box');

function findelement(str) {
    return document.querySelector(str);
}

function add_red() {
    var $boxs = document.querySelectorAll('.box');
    var i = 0;

    while($boxs[i]) {
        $boxs[i].classList.add('red');
        i++;
    }
}

function add_box() {
    var $body = document.querySelector('body')
    var $tmp_box = document.querySelector('.box');
    var tmp = $box.cloneNode();
    if($tmp_box)
        tmp = $tmp_box.cloneNode();
    $body.appendChild(tmp);
}

function del_box() {
    var $boxs = document.querySelectorAll('.box');
    if($boxs[0]) $boxs[0].remove();
}

function txt_box() {
    var $boxs = document.querySelectorAll('.box');
    var tmp = document.querySelectorAll('.txt')[0].value;
    var i = 0;

    while($boxs[i]) {
        $boxs[i].innerHTML = '';
        $boxs[i].append(tmp);
        i++;
    }
}

function reset_box() {
    var $boxs = document.querySelectorAll('.box');
    var i = 0;
    while(i < $boxs.length) {
        $boxs[i].remove();
        i++;
    }
    $box.className = 'box';
}

function tog_box() {
    var $boxs = document.querySelectorAll('.box');
    var option = $boxs[0].style.display;
    var set = ''; 
    var i = 0;
    if($boxs) {
        set = (option === 'none') ? 'block' : 'none';
        while($boxs[i]) {
            $boxs[i].style.display = set;
            i++;
        }
    }
}

function img_box() {
    var $boxs = document.querySelectorAll('.box');
    var link = "https://i.imgur.com/69NjYBH.png";
    var imgtag = "<img src='" + link + "' />";
    var i = 0;

    if(!$boxs[0]) {
        add_box();
        $boxs = document.querySelectorAll('.box');
        $boxs[0].innerHTML = imgtag;
        return ;
    }

    while($boxs[i]) {
        $boxs[i].innerHTML = imgtag;
        i++;
    }
}

function addEventtoBtn() {
    findelement('.text-btn').addEventListener('click', txt_box);
    findelement('.add-red').addEventListener('click', add_red);
    findelement('.add-btn').addEventListener('click', add_box);
    findelement('.delete-btn').addEventListener('click', del_box);
    findelement('.reset-btn').addEventListener('click', reset_box);
    findelement('.toggle-btn').addEventListener('click', tog_box);
    findelement('.image-btn').addEventListener('click', img_box);
}

addEventtoBtn();
