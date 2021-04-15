const $btn = document.getElementById('btn');
const $resultHolder = document.getElementById('result');

function printgugu() {
    let val = document.getElementById('num').value;
    let str = '';

    if (val=='') {
        alert('숫자를 입력해주세요.');
        return;
    }

    for(let i = 1; i < 10; i++) {
        str = `${str}${val} x ${i} = ${val*i}<br>`;
    }
    $resultHolder.innerHTML = str;
}

$btn.addEventListener('click', (event) => printgugu());