// call the checkName when Homepage initially loads.
window.onload = function () {
    checkName();
};

// check if player name has already been stored
function checkName() {
    let playerName = localStorage.getItem("playerName");
    if (!playerName) {
        openPopup();
    } else {
        closePopup();
        document.getElementById("welcomeMessageName").innerText = "Welcome back to Bedwars Adventure, " + playerName + "!";
    }
}

// open popup window on homepage
function openPopup() {
    document.getElementById("openPopUp").style.display = "block";
    document.getElementById("inputName").value = "";
}

// closes popup window
function closePopup() {
    document.getElementById("openPopUp").style.display = "none";
}

// writes a personalised meesage with player name on the homepage
function displayName() {
    var userName = document.getElementById("inputName").value;
    if (userName.trim() !== "") {
        localStorage.setItem("playerName", userName.trim());
        closePopup();
        let message = "Welcome to Bedwars Adventure, " + userName + "!";
        document.getElementById("welcomeMessageName").innerText = message;
        alert("Name verified! " + userName + ", press OK to continue.");
    } else {
        alert("Please enter a valid name.");
    }
}

// allow user enter new player name.
function changePlayerName() {
    localStorage.removeItem("playerName");
    openPopup();
}
