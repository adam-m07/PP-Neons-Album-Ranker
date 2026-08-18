const album = JSON.parse(sessionStorage.getItem("selectedAlbum"));

const albumDiv = document.getElementById("album");

const img = document.createElement("img");
img.src = album.image;
img.width = 300;

const title = document.createElement("h2");
title.textContent = album.name;

const artist = document.createElement("p");
artist.textContent = album.artist;

albumDiv.appendChild(img);
albumDiv.appendChild(title);
albumDiv.appendChild(artist);


const vocals = document.getElementById("vocals");
const vocalsValue = document.getElementById("vocalsValue");

vocals.oninput = () => {
    vocalsValue.textContent = vocals.value;
};

const production = document.getElementById("production");
const productionValue = document.getElementById("productionValue");

production.oninput = () => {
    productionValue.textContent = production.value;
};

const lyrics = document.getElementById("lyrics");
const lyricsValue = document.getElementById("lyricsValue");

lyrics.oninput = () => {
    lyricsValue.textContent = lyrics.value;
};

const storytelling = document.getElementById("storytelling");
const storytellingValue = document.getElementById("storytellingValue");

storytelling.oninput = () => {
    storytellingValue.textContent = storytelling.value;
};


const score = document.getElementById("score");

score.value = Math.round(
    (parseInt(vocals.value) +
        parseInt(production.value) +  parseInt(lyrics.value) + parseInt(storytelling.value)) / 4
);

const saveButton = document.getElementById("save");

saveButton.onclick = () => {
    alert(
        album.name + " by " +
        album.artist +
        " has been given a score of " +
        score.value + "/100"
    );
};

const homeButton = document.getElementById("home");

homeButton.onclick = () => {
    window.location.href = "index.html";
};