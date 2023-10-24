var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var badWords = [];
var badWordInput = document.querySelector(".bad-word");
var addWordButton = document.getElementById("add-word");
var resetInputButton = document.getElementById("reset-input");
var textArea = document.getElementById("text");
var cenzorButton = document.getElementById("cenzor");
var badWordsList = document.querySelector(".red-word");
addWordButton.addEventListener('click', function () {
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
});
function updateBadWordsList() {
    var word = badWordInput.value.trim();
    if (!badWords.includes(word)) {
        badWords.push(word);
    }
    if (badWordsList) {
        var redWordText = badWordsList.textContent;
        if (redWordText) {
            var redWords = redWordText.split(/,\s*/);
            var uniqueRedWords = __spreadArray(__spreadArray([], redWords, true), badWords, true).filter(function (value, index, self) { return self.indexOf(value) === index; });
            badWords = uniqueRedWords;
        }
        var newWord = badWords[badWords.length - 1];
        if (badWordsList.textContent === '') {
            badWordsList.textContent += newWord;
        }
        else {
            badWordsList.textContent += ", ".concat(newWord);
        }
    }
}
resetInputButton.addEventListener("click", function () {
    if (badWordInput) {
        badWordsList.textContent = "";
        badWords.splice(0, badWords.length);
    }
});
cenzorButton.addEventListener('click', function () {
    var text = textArea.value;
    var words = text === null || text === void 0 ? void 0 : text.split(/[' ',.!?]+/);
    if (words) {
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (badWords.includes(word)) {
                words[i] = '*'.repeat(word.length);
            }
        }
    }
    textArea.value = words.join(' ');
});
