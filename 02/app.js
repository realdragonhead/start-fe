console.log('app.js')

// var person = {
//     nick: 'FE',
//     age: 25,
//     area: 'jeju',
//     hobby: ['js', 'html'],
// };

// console.log(window);

// var arr = [1, 2, 3];

// for(var i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

//// 배열 CRUD (CREATE, READ, UPDATE, DELETE)
//// CREATE
// var todos = ['운동'];
// var todo = '게임';
// todos.push(todo);
// console.log(todos);
// //// READ
// todos.forEach(function(todo) {
//     console.log(todo);
// });
// //// UPDATE
// //updateIndex
// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//     return todo === updateTodo;
// });
// console.log(updateIndex);   //업데이트 인덱스 위치
// todos[updateIndex] = '공부';
// console.log(todos);
// //map
// var newTodos = todos.map(function(todo) {
//     if(todo === updateTodo) {
//         return '공부';
//     }
//     return todo;
// });
// ////DELETE
// var deleteIndex = todos.findeIndex(function(todo) {
//     return todo == updateTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos);

//동적타이핑
//얕은참조, 깊은참조

// var isMan = true;

// if(isMan) {
//     console.log(1);
// } else {
//     console.log(2);
// }
// var gender = isMan ? '남자' : '여자';
// console.log(gender);

// try {

// }
// catch(e){

// }
// finally {

// }

// window.alert('hello');
// alert('hello!');

// var who = prompt('Who are you?');
// console.log(who);

// var isDelete = confirm('정말 삭제하시겠습니까?');
// console.log(isDelete);

// var result = isNaN('1');
// var result2 = isNaN('a');
// console.log(result);    // 자동 형변환
// console.log(result2);

// function test() {
//     console.log('test()');
// }
// var id = setTimeout(test, 1000);
// console.log(id);


// function sum(a,b) {
//     return a + b;
// }
// console.log(sum(1,2));


// 함수는 객체타입으로 속성에 들어갈 수 있음
// var car = {
//     year: '2014',
//     starting: function() {
//         console.log('starting...');
//     },
// };
// car.starting();

//즉시실행 함수
// (function() {

// })();
// (function() {
//     var a = 'a';
//     console.log(a);
// })();

//생략 가능 전달인자
// function sum(x, y) {
//     if(!y) y =1;
//     console.log(x+y);
// }
// sum(3)

//가변길이 전달인자
// function sum() {
//     var size = 0;
//     for (var i =0; i<arguments.length; i++) {
//         size += arguemnts[i];
//     }
//     console.log(size);
// }

//표현식
//정규표현식 MSN 참고

//객체를 전달인자로 사용
// function area1(width, height) {
//     console.log(width*height);
// }
// function area1(option) {
//     console.log(option.width*option.height);
// }
