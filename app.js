// let name = "Anton"
// let age = 12.7
// let scores = 100

// // let name2 = ...

// let isMenuShow = true;

// let count = undefined;
// // undefined - значения нет

// let avatar = null;

// let user = {
//     email: "anton@mail.ru",
//     login: "anton",
//     role: "admin",
//     changeEmail(newEmail) { this.email = newEmail },
//     parents: {
//         mother: {
//             email: "mamaAntona@mail.ru",
//             parents: {
//                 mother: {
//                     email: "mamaMami@mail.ru"
//                 }
//             }
//         },
//         father: {
//             email: "papaAntona@mail.ru",
//         }
//     }
// };

// console.log(user.email);
// console.log(user.login);

// user.changeEmail("new@mail.ru");

// console.log(user.parents.mother.email);



// console.log ( document.body );



let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

let button = document.querySelector("button");
let input = document.querySelector("input");
let mainText = document.querySelector('.mainText');

// Таймер
let timer = document.querySelector('.timer');

let maxSeconds = 100;
let currentSeconds = maxSeconds;

timer.innerText = currentSeconds;

const timerId = setInterval(() => {
    if (currentSeconds < 1) {
        alert("Время кончилось")
        clearInterval(timerId);
        button.disabled = true;
        input.disabled = true;
        return;
    }

    currentSeconds--;
    timer.innerText = currentSeconds;
}, 1000);

function handleClick() {
    if (input.value == randomNumber) {
        mainText.innerText = "Победа ✔"
        clearInterval(timerId);
        button.disabled = true;
        input.disabled = true;
    }
    else if (input.value < randomNumber) {
        mainText.innerText = "Больше"
    }
    else {
        mainText.innerText = "Меньше"
    }
}

// button.addEventListener("click", handleClick)

button.onclick = handleClick;