document.getElementById("newNumber").addEventListener("click", function () {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    document.getElementById("result").innerHTML = randomNum;
}
)