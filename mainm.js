function goToPage(page) {
    window.location.href = page;
}


function offerChecker() {
    var offer = document.getElementById("offer").value;

    document.getElementById("full").style.display = "none";
    document.getElementById("limited").style.display = "none";
    document.getElementById("forbid").style.display = "none";

    if (offer >= 50) {
        document.getElementById("full").style.display = "block";
        document.getElementById("limited").style.display = "none";
        document.getElementById("forbid").style.display = "none";
        document.getElementById("full").style.background = "green"



    } else if (offer < 50 && age >= 21) {
        document.getElementById("limited").style.display = "block";
        document.getElementById("full").style.display = "none";
        document.getElementById("forbid").style.display = "none";
        document.getElementById("limited").style.background = "orange"

    } else {
        document.getElementById("full").style.display = "none";
        document.getElementById("limited").style.display = "none";
        document.getElementById("forbid").style.display = "block";
        document.getElementById("forbid").style.background = "red"
    }
}