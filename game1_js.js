let score = 0;

function checkCode() {
    let userCode = document.getElementById("code-input").value.trim();
    let correctCode = `def calculate_total(price, tax=0.1):\n    return price * tax + price\n\nprint(calculate_total(100))`;

    if (userCode === correctCode) {
        document.getElementById("result").innerHTML = "✅ Верно! Ошибка исправлена.";
        score += 10;
    } else {
        document.getElementById("result").innerHTML = "❌ Ошибка! Попробуйте ещё раз.";
    }

    document.getElementById("score").innerText = score;
}
