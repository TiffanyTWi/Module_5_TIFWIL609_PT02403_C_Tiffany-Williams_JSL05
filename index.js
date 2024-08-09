// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];
songs.push({ title: "Sure Thing", artist: "Miguel", genre: "R&B"});
songs.push({ title: "Free Mind", artist: "Tems", genre: "R&B" });
songs.push({ title: "Please Please Please", artist: "Sabrina Carpenter", genre: "Pop" });
songs.push({ title: "Slow It Down", artist: "Benson  Boone", genre: "Pop" });
songs.push({ title: "The Pot", artist: "Tool", genre: "Rock" },);

console.log(songs);

// Object containing each Guardian's preferred genre
const guardians = [
    { name: "Star-Lord", preferredGenre: "Rock"},
    { name: "Gamora", preferredGenre: "Pop"},
    { name: "Drax", preferredGenre: "R&B"},
    { name: "Rocket", preferredGenre: "R&B"},
    { name: "Groot", preferredGenre: "Pop"},
    // Add preferences for Drax, Rocket, and Groot
];

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    return guardians.map(guardian => {
        const filteredSongs = songs.filter(song => song.genre === guardian.preferredGenre);
        return {
            gardian: guardian.name,
            playlist: filteredSongs
        };
    });
    // Use the map() function to create playlists for each Guardian
    // Your code here
}
const playlists = generatePlaylist(guardians, songs);
console.log(playlists);

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);

document.getElementById('playlists').innerText = guardians;
