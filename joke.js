
//Access all HTML elements

let container = document.querySelector(".container");
let emoji = document.querySelector(".emoji");
let joke = document.querySelector(".joke");
let getJokeBtn = document.querySelector(".btns .refresh");
let CopyBtn = document.querySelector(".btns .copy");
let copyIcon = document.querySelector(".btns .copy i");
let copyText = document.querySelector(".btns .copy span");
let twitterBtn = document.querySelector(".btns .twitter");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";



//function to fetch and display a new joke
let getjoke = () => {
    joke.innerHTML = "Loading...";

    //fetch joke data from api and update HTML element
    fetch(url).then((res) => res.json()).then((data) => {
        joke.innerHTML = data.joke;
        console.log(data)
    })

    getEmoji();
}

let getEmoji = () => {
    //array of emojis to choose from
    let emojis = ["&#128514;", "&#129315;"];

    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    //update HTML element from the arry
    emoji.innerHTML = randomEmoji;
}

let copyJoke = () => {

    //write the joke text to the clipboard
    navigator.clipboard.writeText(joke.textContent);

    //update copy button icon and text to indicate success
    copyIcon.style.display = "none";
    copyText.style.display = "block";

    setTimeout(() => {
        copyIcon.style.display = "block";
        copyText.style.display = "none";
    }, 500);
}

let twittjoke = () => {
    let tweetURL = `https://twitter.com/intent/tweet?url=${joke.textContent}`;

    window.open(tweetURL, "_blank");
}

//add event listeners t button
getJokeBtn.addEventListener("click", getjoke);
CopyBtn.addEventListener("click", copyJoke);
twitterBtn.addEventListener("click", twittjoke);

//initialize joke display
getjoke();
getEmoji();