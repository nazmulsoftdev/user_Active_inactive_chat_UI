// check user active or inactive

var userStatus = document.querySelector(".activeTitle");
var userActiveBox = document.querySelector(".activeSymbol");
var sendButton = document.querySelector(".sendBtn");

const handleActiveUser = (even) => {
    if (even.type == "offline") {
        userStatus.innerHTML = "Offline";
        userActiveBox.style.backgroundColor = "#b33939";
        sendButton.setAttribute("disabled", "");
        console.log("User Offline");
    }
    if (even.type == "online") {
        console.log("User Online");
        userStatus.innerHTML = "Online";
        userActiveBox.style.backgroundColor = "#44bd32";
        sendButton.removeAttribute("disabled");
    }
};

window.addEventListener("online", handleActiveUser);
window.addEventListener("offline", handleActiveUser);

// form validation

function sendMessage() {
    var userData = document.querySelector(".chatData");
    var createMessage = document.createTextNode(userData.value);
    var createEle = document.createElement("p");
    var conCateData = document.querySelector(".chatStoreWrapper");
    createEle.append(createMessage);
    conCateData.appendChild(createEle);
    userData.value = "";
}