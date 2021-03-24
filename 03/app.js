var link = document.querySelector('#link');
link.addEventListener('click', function() {
    console.log(11111);
    // event.stopPropagation();
    event.preventDefault();
});


// var list = document.querySelector('#list');
// console.log(list.children);

// var app = document.getElementById('list');

// app.addEventListener('click', function (event) {
//     if(event.target.nodeName == 'LI') {
//         console.log(2);
//     }
//     event.stopPropagation();
// })
// document.body.addEventListener('click', function () {
//     console.log('body');
// })

// debugger;
// for(var i=0; i<list.children.length; i++) {
//     console.log(list.children[i]);
//     list.children[i].addEventListener('click', function() {
//         console.log(1);
//     });
// }

// var clickCount = 0;
// function popup(event) {
//     console.log(++clickCount);
//     console.log(arguments, event, event.type, event.currentTarget);
// }
// document.body.addEventListener('click',popup);

// function clickBody() {
//     console.log('click');
// }

// document.querySelector('.box').addEventListener('click', clickBody);


// console.log(window.outerWidth);
// console.log(window.name);
// window.open('http://www.daum.net');
// window.close();

// window.alert(1);
// history.back();

// console.log(document.getElementById('debug'));

// var debug = document.getElementById('debug');
// console.log(debug);
