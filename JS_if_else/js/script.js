let inputIn = document.querySelector('.input-in');
let btn = document.querySelector('button');

btn.onclick = () => {
    let input_value = +inputIn.value;
    if (input_value >= 16 && input_value < 60) {
        alert('Добро пожаловать!');
    }
    else if (input_value >= 60) {
        alert('Старичок, ты точно сюда?');
    }
    else {
        alert('Малыш, тебе сюда нельзя!');
    }
    inputIn.value = '';
}

let inpputHw1 = document.querySelector('.input-hw1');
let inpputHw2 = document.querySelector('.input-hw2');
let btnHw = document.querySelector('.btn-hw');

btnHw.onclick = function () {
    let inpputHw_value1 = +inpputHw1.value;
    let inpputHw_value2 = +inpputHw2.value;
    if (inpputHw_value1 > inpputHw_value2) {
        alert(inpputHw_value1);
    } else {
        alert(inpputHw_value2);

    }
}
