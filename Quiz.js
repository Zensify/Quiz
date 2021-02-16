let btnEl = document.getElementById("submit-btn");
btnEl.onclick = markQuiz;

//Getting the values from .html input names
function markQuiz() {
    cat = parseInt(document.querySelector('input[name = "cat"]:checked').value);
    cookiezi = parseInt(document.querySelector('input[name = "cookiezi"]:checked').value);
    peppy = parseInt(document.querySelector('input[name = "peppy"]:checked').value);
    skin = parseInt(document.querySelector('input[name = "skin"]:checked').value);

    //math
    result = cat + cookiezi + peppy + skin;

    //Levels of scores/grades 
    document.getElementById("grade").innerHTML = result;
    console.log(result)
    if (result == 0) {
        result2 = "You either don't play the game or you live under a rock";
    }
    if (result == 25) {
        result2 = "Spend more time in the community";
    }
    if (result == 50) {
        result2 = "You're getting there";
    }
    if (result == 75) {
        result2 = "Almost there";
    }
    if (result == 100) {
        result2 = "Osu! Nerd";
    }
    document.getElementById("grade2").innerHTML = result2;
}