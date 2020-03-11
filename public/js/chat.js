const socket = io();

socket.on("WelcomeUser", (message) => {
    document.getElementById("count").innerHTML = message;
});

// socket.on("returnSuccess", (message) => {
//     document.getElementById("count").innerHTML = "return";
// });

// socket.on("countUpdated", (count) => {
//     console.log("Count has been updated ", count);
//     document.getElementById("count").innerHTML = count;
// });

// document.querySelector("#increment").addEventListener("click", () => {
//     console.log("Clicked");
//     socket.emit("return");
// });

document.querySelector("#inputForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Clicked");
    socket.emit("sendMessage", document.getElementById("inputMessage").value);
});
