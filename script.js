console.log("Welcome to Spotify !! ");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");

let songs = [
    {songName : "Warriyo - Mortals", filePath : "Songs/1.mp3", coverpath : "Covers/1.jpg"},
    {songName : "Cielo - Huma Huma", filePath : "Songs/2.mp3", coverpath : "Covers/2.jpg"},
    {songName : "DefKev - Invincible", filePath : "Songs/3.mp3", coverpath : "Covers/3.jpg"},
    {songName : "Different Heaven & Ehide", filePath : "Songs/4.mp3", coverpath : "Covers/4.jpg"},
    {songName : "Janji Heroes tnight", filePath : "Songs/5.mp3", coverpath : "Covers/5.jpg"},
    {songName : "Fuck U", filePath : "Songs/6.mp3", coverpath : "Covers/6.jpg"},
    {songName : "Rabba Rabba Salam", filePath : "Songs/7.mp3", coverpath : "Covers/7.jpg"},
    {songName : "ABCDEFU", filePath : "Songs/8.mp3", coverpath : "Covers/8.jpg"},
    {songName : "Infinity", filePath : "Songs/9.mp3", coverpath : "Covers/9.jpg"}
]


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    // element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
});

// audioElement.play();

// Handle play/pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update SeekBar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex >= 8){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById("prev").addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 8;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})