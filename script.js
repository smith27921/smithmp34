let isPlaying = false;
let currentSongIndex = 0;
let isShuffle = false;
let isRepeat = false;

const songs = [
    {
        title: "Pop Rocks",
        artist: "Alan Walker",
        file: "audio/song1.mp3",
        cover: "https://via.placeholder.com/200x200.png?text=Song+Cover+1"
    },
    {
        title: "Feel Good Beats",
        artist: "Marshmello",
        file: "audio/song2.mp3",
        cover: "https://via.placeholder.com/200x200.png?text=Song+Cover+2"
    },
    {
        title: "Mood Boosters",
        artist: "The Weeknd",
        file: "audio/song3.mp3",
        cover: "https://via.placeholder.com/200x200.png?text=Song+Cover+3"
    }
];

function playSong(index) {
    currentSongIndex = index;
    const song = songs[currentSongIndex];
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');
    const albumCover = document.getElementById('album-cover');
    const playPauseIcon = document.getElementById('play-pause-icon');

    audioSource.src = song.file;
    audioPlayer.load();
    audioPlayer.play();

    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    albumCover.src = song.cover;

    isPlaying = true;
    playPauseIcon.className = "bi bi-pause-circle-fill";
}

function togglePlayPause() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseIcon = document.getElementById('play-pause-icon');
    if (isPlaying) {
        audioPlayer.pause();
        playPauseIcon.className = "bi bi-play-circle-fill";
    } else {
        audioPlayer.play();
        playPauseIcon.className = "bi bi-pause-circle-fill";
    }
    isPlaying = !isPlaying;
}

function prevSong() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = songs.length - 1;
    }
    playSong(currentSongIndex);
}

function nextSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;
    } else if (isRepeat) {
        currentSongIndex = 0;
    }
    playSong(currentSongIndex);
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    const shuffleIcon = document.getElementById('shuffle-icon');
    shuffleIcon.classList.toggle('active', isShuffle);
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    const repeatIcon = document.getElementById('repeat-icon');
    repeatIcon.classList.toggle('active', isRepeat);
}

// Initial setup
playSong(0);