

function offerChecker() {

    document.getElementById("half").style.display = "none";
    document.getElementById("limited").style.display = "none";
    document.getElementById("fail").style.display = "none";
    document.getElementById("fail").style.display = "none";

    var offer = document.getElementById("offer").value;
    if (offer >= 50) {
        document.getElementById("half").style.display = "block";
        document.getElementById("limited").style.display = "none";
        document.getElementById("fail").style.display = "none";
        document.getElementById("full").style.background = "green"



    } else if (offer < 50 && offer >= 21) {
        document.getElementById("limited").style.display = "block";
        document.getElementById("half").style.display = "none";
        document.getElementById("fail").style.display = "none";
        document.getElementById("limited").style.background = "none";

    } else {
        document.getElementById("half").style.display = "none";
        document.getElementById("limited").style.display = "none";
        document.getElementById("fail").style.display = "block";
        document.getElementById("fail").style.background = "none";
    }
}