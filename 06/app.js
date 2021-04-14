var a = 'aa';
console.log(a);

/* 실무 */
let a = 'aa';
const b = 'bb';
var c = '11';
/* b = 11; */ // error
console.log(a,b)

/* 템플릿 표현식 */
var url = 'https://1boon.kakao.com/' + cp;
const url =  `https://1boon.kakao.com/{cp}`

var str = 'aaaaaaa \
sadaf';
const s = `aaaaaaaa
cccccc
ddddd`
console.log(str)

/* 기본 매개 변수(기본적으로 할당되는 매개변수) */
function sum(x, y=1) {
	return x + y;
}
console.log(sum(1, 2));

/* map */
// 옛날 방식
const arr = [1, 2, 3];
const newArr = arr.map(function(item) {
	return item +1;
});
console.log(newArr);
// ECMA
const arr = [1, 2, 3]'

const newArr = arr.map((item) => item + 1);
// 인자가 하나일때는 괄호 생략 가능
const newArr = arr.map(item => item + 1);
console.log(newArr)

document.getElementById('box').addEventListener('click', event => console.log(1));

/* 전개 구문 */

function sum(x, y, z) {
	return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
console.log(sum(1, 2, 3))

// 별개의 배열을 생성할때 전개 구문을 사용한다.
const words = ['a', 'b'];
const newWords = [...words];
console.log(newWords)

/* 참고 */
a = [1]
b = a
b.push(2)
// a => [1, 2], b => [1, 2]

const arr1 = [3, 4 ,5]
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2)

const obj = {
	a: 1,
	b: 2,
};
const newObj = { ...obj };
console.log(newObj);

/* Rest 파라미터 */
// 전개구문이 함수의 매개변수로 들어가는 것을 말한다.
// 가변 인자 함수
function func(...param) {
	console.log(param);
}

func(1, 2, 3);

/* 구조 분해 할당 */
var team = obj.team;
var area = obj.area;

var col1 = cols[0];
var col2 = cols[1];

const { team, area } = obj;
const [col, col2] = cols
const[, col2] = cols

const words = ['a', 'b'];
const [c2, c2] = words;
// c1 => 'a', c2 => 'b'

function getArea(options) {
	return options.width * options.height;
}

function getArea({ width, height }) {
	return width * height;
}

/* 향상된 객체 리터럴 */
// property 이름과 value 이름이 같을때 할당 방법
const number = 1234;
const student = {
	number,
}
const student = {
	number,
	// playGame:function() {
	// },
	playGame() {
		console.log('play');
	},
}

