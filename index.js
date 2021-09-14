/*
Name: Alia Ibrahim Bandarkar
#Task-4
Javascript file
*/

let song=document.querySelector(".songName");
let singer=document.querySelector(".singerName");
let movie=document.querySelector(".movieName");
let duration=document.querySelector(".Duration");
let songimage=document.querySelector(".img");


let previousbtn=document.querySelector(".prev");
let next=document.querySelector(".next");
let playpauseBtn=document.querySelector(".play-pause");

let index_num=0;
let playing=false;

let track=document.createElement('audio');

let track_list= [      //Displays name of the playing song, it's artist, image on the screen, movie name of the song and the duration
  {
    name: "Phir Bhi Aas Lagi Hai Dil Mein",
    path: "Music/m1.mp3",
    artist: "Jai Walia, Sagar Kalra",
    im:"images/m1.jpg",
    movie:"Album",
    duration:"03:16"
  },
  {
    name: "Is Qadar",
    path: "Music/m2.mp3",
    artist: "Tulsi Kumar, Darshan Raval",
    im:"images/m2.jpg",
    movie:"Album",
    duration:"03:46"
  },
  {
    name: "Tujhe Bhoolna Toh Chaaha",
    path: "Music/m3.mp3",
    artist: "Jubin Nautiyal",
    im:"images/m3.jpg",
    movie:"Album",
    duration:"04:35"
  },
  {
    name: "Oye Hoye Hoye",
    path: "Music/m4.mp3",
    artist: "Jassie Gill",  
    im:"images/m4.jpg",
    movie:"Album",
    duration:"02:52"
  },
  {
    name: "Birthday Pawri",
    path: "Music/m5.mp3",
    artist: "Meet Bros",
    im:"images/m5.jpg",
    movie:"Album",
    duration:"04:04"
  },
  {
    name: "Kutti Mohabbat",
    path: "Music/m6.mp3",
    artist: "Jubin Nautiyal",
    im:"images/m6.jpg",
    movie:"Mumbai Saga",
    duration:"03:48"
  },

];

function loadSong(index_num)
{
  track.src=track_list[index_num].path;

  track.load();
  song.textContent="Song Name: "+track_list[index_num].name;
  singer.textContent="Singer Name: "+track_list[index_num].artist;
  songimage.src=track_list[index_num].im;
  movie.textContent="Movie Name: "+track_list[index_num].movie;
  duration.textContent="Duration: "+track_list[index_num].duration;
  track.addEventListener("ended",next)
}

loadSong(index_num)

// play or pause button event
playpauseBtn.addEventListener("click", () => 
{
  if(playing)
  {
    pausemusic();

  }
  else
  {
    playmusic();
  }
});


//play music function
function playmusic()
{
  track.play();
  playing=true;
  playpauseBtn.classList.replace("fa-play","fa-pause");
}



//pause music function
function pausemusic()
{
  track.pause();
  playing=false;
  playpauseBtn.classList.replace("fa-pause","fa-play");
}


//prev music button event
previousbtn.addEventListener("click", () => 
{
  if(index_num > 0)
  {
    index_num= index_num - 1;
  } 
  else
  {
    index_num= track_list.length - 1;
  }

  loadSong(index_num);
  playmusic();
});


//next music button event
next.addEventListener("click", () => 
{
  if(index_num < track_list.length - 1)
  {
    index_num= index_num + 1;
  } 
  else
  {
    index_num= 0;
  }

  loadSong(index_num);
  playmusic();
});


let so=document.getElementsByClassName("play-song");
for(let i=0; i < so.length; i++)
{
  so[i].addEventListener("click", () =>
  {
    loadSong(i);
    playmusic();
  });
}