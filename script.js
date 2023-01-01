
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

    let text = input.value.trim();

    if(text !== ''){
        resultText.value = encrypt(text);
        result.hidden = false;
        result.style.display = 'flex';
        result.style.flexDirection = 'column';
        result.style.justifyContent = 'center';
        result.style.alignItems = 'center';
        result.style.justifyItems = 'center';
        result.style.width = '100%';
        result.style.height = '100%';
        
        noResult.hidden = true;
    }
}

function decryptAction() {
    const input = document.getElementById("input-text");
    const resultText = document.getElementById("result-text");

    let text = resultText.value.trim();

    if(text !== ''){
        input.value = decrypt(text);
    }
}

function copy() {
    const resultText = document.getElementById("result-text");

    let text = resultText.value;
    
    navigator.clipboard.writeText(text);
}