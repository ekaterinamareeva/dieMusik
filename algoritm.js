document.getElementById("verify").onclick = function() {
    let a = Number(document.getElementById("a").value);
    let x;

    if (a > 100) {
        x = 0;
    } else if (a < 61) {
        x = a;
    } else {
        x = a ** 4;
    }

    document.getElementById("result").value = x;
}
