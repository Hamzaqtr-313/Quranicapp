console.log("Welcome to Quranic");

let songIndex = 0;
let audioElement = new Audio("songs/my-hope-is-on-you.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songName"));

let songs = [
  {
    songName: "My Hope",
    filePath: "songs/my-hope-is-on-you.mp3",
    coverPath: "covers/myhope.jpg",
  },
  {
    songName: "Aharun",
    filePath: "songs/aharun-aharun.mp3",
    coverPath: "covers/bgquran.png",
  },
  {
    songName: "Jamal Al Wujood",
    filePath: "songs/jamal-al-wujood.mp3",
    coverPath: "covers/bg.quran.png",
  },
  {
    songName: "Kullu Nafsin",
    filePath: "songs/kullu-nafsin-zaikatul-maut.mp3",
    coverPath: "covers/quranlogo.jpg",
  },
  {
    songName: "Rahmatul Lil Alameen",
    filePath: "songs/rahmatun-lil-alameen.mp3",
    coverPath: "covers/quranlogo.jpg",
  },
  {
    songName: "Surah Muzammil",
    filePath: "songs/surah-al-muzammil.mp3",
    coverPath: "covers/quranlogo.jpg",
  },
  {
    songName: "Surah Waqiah",
    filePath: "songs/surah-al-waqiah.mp3",
    coverPath: "covers/quranlogo.jpg",
  },
  {
    songName: "Surah Maryam",
    filePath: "songs/surah-maryam.mp3",
    coverPath: "covers/quranlogo.jpg",
  },
  {
    songName: "Surah As Sajdah",
    filePath: "songs/surat-as-sajdah.mp3",
    coverPath: "covers/quranlogo.jpg",
  },
  {
    songName: "The Beauty of Existance",
    filePath: "songs/the-beauty-of-existance.mp3",
    coverPath: "covers/bg.quran.png",
  },
  {
    songName: "The Way Of Tears",
    filePath: "songs/the-way-of-tears.mp3",
    coverPath: "covers/bg.quran.png",
  },
];
// songItems.forEach((element) => {
//   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// });
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

// const makeAllPlays = () => {
//   element.classList.remove("fa-pause");
//   element.classList.add("fa-play");
//   Array.from(document.getElementsByClassName("songItemPlay")).forEach(
//     (element) => {}
//   );
// };
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>
  element.addEventListener("click", (e) => {
    console.log(e.target);
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    // audioElement.src = "songs/${songIndex + 1}.mp3";
    audioElement.src = `songs/${songIndex + 1}.mp3`;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  })
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 10) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
