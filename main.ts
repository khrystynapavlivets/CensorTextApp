/*
Завдання 1.

Написати розв’язок нижче описаного завдання (по одному рядку коду на кожний пункт)

Створіть змінну city з типом даних string.
Присвойте їй значення «Київ».
Змініть значення змінної city на «Львів».
Створіть змінну address з типом даних string і скопіюйте в неї значення змінної city.
Вивести значення змінної address з допомогою команди console.log().
------------------------------------------------------------------------------------------
*/

// let city: string;
// city = 'Київ';
// city = 'Львів';
// let address: string = city;
// console.log(address);


/*
Завдання 2.

Використовуючи конструкцію if..else через тернарний вираз, напишіть код, який отримує число через prompt, а потім виводить в console.log() повідомлення:

Число парне.
Число непарне.
Число 0.
------------------------------------------------------------------------------------------
*/

// let num = prompt("Введіть число:");
// if (num !== null) {
//     let number = parseFloat(num);
//     if (!isNaN(number)) {
//         let massage =
//             number === 0 ? 'Число 0' :
//                 number % 2 === 0 ? 'Число парне.' :
//                     'Число непарне.'
//         console.log(massage);

//     }
//     else {
//         console.log("Невірне введення. Будь ласка, введіть число.");
//     }
// }
// else {
//     console.log("Введення скасовано або не введено.");
// }


/*
Завдання 3.

Написати розв’язок нижче описаного завдання за допомогою function declaration:

Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
Кількість параметрів у функції може бути від 2х і більше.
Приклад роботи:

max(5,-2) – має повернути 5.
max(5,-2, 30, 6) – має повернути 30
------------------------------------------------------------------------------------------
*/

// function max(...arg: number[]): void {
//     let max = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//         if (max < arg[i]) {
//             max = arg[i]
//         }
//     }
//     console.log("Максимальне число:", max);
// }
// max(5, -2); // має повернути 5.
// max(5, -2, 30, 6) // має повернути 30


/*
Завдання 4.

Напишіть функцію getSqrt(number), яка вираховує корінь квадратний. Для визначення кореня використовуйте Math. В залежності від того що передали в функцію має виводити наступні повідомлення:

Якщо передане число повертати - Квадратний корінь з стільки то дорівнює стільки то.
Якщо передали не число - Повинно бути числове значення.
Якщо число менше 0 - Введіть додатнє число.
Якщо в функцію нічого не передали - Будь ласка, введіть число!
------------------------------------------------------------------------------------------
*/

// function getSqrt(number: number | string | undefined): string {
//     if (typeof number === "number") {
//       if (number >= 0) {
//         return `Квадратний корінь з ${number} то дорівнює ${Math.sqrt(number)}`;
//       } else {
//         return 'Введіть додатнє число.';
//       }
//     } else if (typeof number === "string") {
//       return 'Повинно бути числове значення.';
//     } else {
//       return 'Будь ласка, введіть число!';
//     }
//   }

//   console.log(getSqrt(3)); // Квадратний корінь з 3 то дорівнює 1.7320508075688772
//   console.log(getSqrt(-5)); // Введіть додатнє число.
//   console.log(getSqrt(0)); // Квадратний корінь з 0 то дорівнює 0
//   console.log(getSqrt(225)); // Квадратний корінь з 225 то дорівнює 15
//   console.log(getSqrt("abc")); // Повинно бути числове значення.
//   console.log(getSqrt(undefined)); // Будь ласка, введіть число!


/*
Завдання 5.

Необхідно відтворити функціонал як на відео Cenzor, а саме:

При кліку на ADD добавляти заборонене слово, яке відображатиметься в списку “Bad words”
Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
При кліку на Cenzor перевіряється чи є в textarea заборонене слово, якщо так його заміняє на *, причому на ту кількість яка довжина слова
Якщо textarea порожня виводити повыдолення про заповнення поля
------------------------------------------------------------------------------------------
*/

// Масив для зберігання заборонених слів
let badWords: string[] = [];

const badWordInput = document.querySelector(".bad-word") as HTMLInputElement;
const addWordButton = document.getElementById("add-word") as HTMLButtonElement;
const resetInputButton = document.getElementById("reset-input") as HTMLButtonElement;
const textArea = document.getElementById("text") as HTMLTextAreaElement;
const cenzorButton = document.getElementById("cenzor") as HTMLButtonElement;
const badWordsList = document.querySelector(".red-word") as HTMLSpanElement;

addWordButton.addEventListener('click', function (): void {
    if (badWordInput.value === '') {
        badWordInput.classList.add('redBorder');
        badWordInput.placeholder = 'Please write a word!';
    }
    else {
        badWordInput.placeholder = "word here...";
        badWordInput.classList.remove("redBorder");
        updateBadWordsList();
        badWordInput.value = '';
    }
})


function updateBadWordsList(): void {
    // Додати нове слово до масиву badWords, якщо воно ще не існує в ньому
    const word = badWordInput.value.trim();
    if (!badWords.includes(word)) {
        badWords.push(word);
    }

    // Додати значення з елементу з класом "red-word" до масиву badWords
    if (badWordsList) {
        const redWordText = badWordsList.textContent;
        if (redWordText) {
            const redWords = redWordText.split(/,\s*/);
            const uniqueRedWords = [...redWords, ...badWords].filter((value, index, self) => self.indexOf(value) === index);
            badWords = uniqueRedWords; // Оновити масив без повторень
        }

        const newWord = badWords[badWords.length - 1]; // Отримуємо останнє додане слово
        if (badWordsList.textContent === '') {
            badWordsList.textContent += newWord; // Якщо список порожній, просто додаємо слово
        } else {
            badWordsList.textContent += `, ${newWord}`; // Інакше додаємо кому та нове слово
        }
    }
}

resetInputButton.addEventListener("click", function (): void {
    if (badWordInput) {
        badWordsList.textContent = "";
        badWords.splice(0, badWords.length);
    }
});



cenzorButton.addEventListener('click', function (): void {
    const text = textArea.value;
    const words = text?.split(/[' ',.!?]+/);
    if (words) {
        // Пройтися по кожному слову і перевірити, чи воно є в списку заборонених слів
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (badWords.includes(word)) {
                // Якщо слово є в списку заборонених слів, замінити його на зірочки
                words[i] = '*'.repeat(word.length);
            }
        }
    }
    // Об'єднати слова назад у текст і оновити textarea
    textArea.value = words.join(' ');
})