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
