// ДЗ:
// Реализовать через js часы и будильник.

// реализовать визуальное отображение часов(электронных или механических)

// реализовать корректное отображение времени

// реализовать возможность установить будильник

// будильник можно поставить 2 видов на заданное время или через определенное время

let alarmTime = '';
let alarm = document.querySelector('#alarm');
let buttonAlarm = document.querySelector('.button-alarm'); 

let certain = document.querySelector('#certain-time');
let buttonCertain= document.querySelector('.button-certain'); 

buttonAlarm.addEventListener('click', () => {
    alarmTime = alarm.value;
    console.log(alarmTime)
});

buttonCertain.addEventListener('click', () => {
    let certainTime = certain.value;
    setTimeout(function(){
        alert('Будильник через время');
    }, certainTime * 1000);
});

function worcClock() {
    let clock = document.querySelector('.clock');
    let time = new Date().toLocaleTimeString('uk-UA', { hour: '2-digit', minute:'2-digit'});
    clock.textContent = time;

    if(time == alarmTime) {
        alert('Будильник!');
        alarmTime = '';
    }
}

setInterval(worcClock, 1000);
worcClock();



