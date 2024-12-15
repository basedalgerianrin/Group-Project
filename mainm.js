function goToPage(page) {
    window.location.href = page;
}
document.getElementById("full").style.display = "none";
document.getElementById("limited").style.display = "none";
document.getElementById("fail").style.display = "none";
document.getElementById("fail").style.display="none";

function offerChecker() {
    var offer = document.getElementById("offer").value;
    if (offer >= 50) {
        document.getElementById("full").style.display = "block";
        document.getElementById("limited").style.display = "none";
        document.getElementById("fail").style.display = "none";
        document.getElementById("full").style.background = "green"



    } else if (offer < 50 && offer >= 21) {
        document.getElementById("limited").style.display = "block";
        document.getElementById("full").style.display = "none";
        document.getElementById("fail").style.display = "none";
        document.getElementById("limited").style.background = "orange"

    } else {
        document.getElementById("full").style.display = "none";
        document.getElementById("limited").style.display = "none";
        document.getElementById("fail").style.display = "block";
        document.getElementById("fail").style.background = "red"
    }
}