
function encrypt(text) {
    return text
        .replace("e","enter")
        .replace("i","imes")
        .replace("a","ai")
        .replace("o","ober")
        .replace("u","ufat");
}

function decrypt(text) {
    return text
        .replace("ufat", "u")
        .replace("ober", "o")
        .replace("ai", "a")
        .replace("imes", "i")
        .replace("enter", "e");
}

function encryptAction() {
    const input = document.getElementById("input-text");
    const result = document.getElementById("result");
    const resultText = document.getElementById("result-text")
    const noResult = document.getElementById("no-result");

    let text = input.value;

    resultText.value = encrypt(text);
    result.hidden = false;
    
    noResult.hidden = true;
}

function decryptAction() {
    const input = document.getElementById("input-text");
    const resultText = document.getElementById("result-text");

    let text = resultText.value;

    input.value = decrypt(text);
}

function copy() {
    const resultText = document.getElementById("result-text");

    let text = resultText.value;
    
    navigator.clipboard.writeText(text);
}