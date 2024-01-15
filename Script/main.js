function LoginQuest() {
    const phrase = prompt("what do I always call you?");

    if (phrase.toLowerCase() === "my love" || phrase.toLowerCase() === "nyells" || phrase.toLowerCase() === "nyella" || phrase.toLowerCase() === "dana" || phrase.toLowerCase === "zooms") {
        alert('Welcome home, ' + phrase)
    } else {
        LoginQuest();
    };

};

LoginQuest();

const myVideo = document.querySelector("video");
const myLabel = document.querySelector("h3");

function switchVideo() {


    const mySrc =myVideo.getAttribute("src");
    
    if (mySrc === "Images/Snappy.mp4") {

        myVideo.setAttribute("src", "Images/fruit.mp4");
        myLabel.textContent = "Fruit";

    } else if (mySrc === "Images/fruit.mp4") {

        myVideo.setAttribute("src", "Images/lanterns.mp4");
        myLabel.textContent = "Lanterns";

    } else {

        myVideo.setAttribute("src", "Images/Snappy.mp4");
        myLabel.textContent = "Snappy"

    };

};

document.querySelector("button").addEventListener("click", () =>{

    switchVideo();
    
})