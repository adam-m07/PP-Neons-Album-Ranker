// Get search term from URL
const params = new URLSearchParams(window.location.search);
const query = params.get("q");

// Fetch from backend
async function loadResults() {
    const response = await fetch(`http://localhost:3000/search?q=${query}`);
    const data = await response.json();

    const resultsDiv = document.getElementById("results");

    data.albums.items.forEach(album => {
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = album.images[0].url;
        img.width = 150;

        const title = document.createElement("p");
        title.textContent = album.name + " - " + album.artists[0].name;

        div.appendChild(img);
        div.appendChild(title);

       // Click to select album
        div.onclick = () => {

            const selectedAlbum = {
                name: album.name,
                artist: album.artists[0].name,
                image: album.images[0].url
            };

            sessionStorage.setItem(
                "selectedAlbum",
                JSON.stringify(selectedAlbum)
            );

            window.location.href = "rank.html";
        };

        resultsDiv.appendChild(div);
    });
}

loadResults();