const socket = io();

socket.on("countUpdated", (count) => {
    console.log("Count has been updated ", count);
    document.getElementById("count").innerHTML = count;
});

document.querySelector("#increment").addEventListener("click", () => {
    console.log("Clicked");

    socket.emit("increment");
    
});