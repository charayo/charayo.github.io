//This controls the slide; changes it every 3secs
var fotoSlide = document.getElementById('fotoSlide');
var c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
var i = 0;
var d = 1;
var interval1;
var btnBeat;
var link = 'https://charayo.github.io/Glassfaze/';
var frameTag = document.getElementById('i-frameId');


function changeFoto() {
    fotoSlide.src = 'images/photo-' + d + '.png';
    d == 1 ? link = 'https://charayo.github.io/Glassfaze/' : false;
    d == 2 ? link = 'https://charayo.github.io/Glassfaze/' : false;
    d == 3 ? link = 'https://charayo.github.io/Glassfaze/' : false;
    d == 4 ? link = 'https://charayo.github.io/Pig-game-practice/' : false;
    d == 5 ? link = 'https://charayo.github.io/Pig-game-practice/' : false;
    d == 6 ? link = 'https://charayo.github.io/fiverr-calculator/' : false;
    d == 7 ? link = 'https://charayo.github.io/Rock-Paper-Scissors-Game/' : false;
    d == 8 ? link = 'https://charayo.github.io/simple-student-list-app/' : false;
    d == 9 ? link = 'https://charayo.github.io/API-Data-Fetcha-Data-App/' : false;
    d == 10 ? link = 'https://charayo.github.io/My-Alarm/' : false;
    d == 11 ? link = 'https://charayo.github.io/to-do-app/' : false;
    
    btnDiv.innerHTML = `<button onclick="iFrame()" id="btn" class="btn btn-primary form-control w-25 mt-2 beat">visit</button>`
    i++;
    if (i >= c.length) {
        i = 0;
    }
    d = c[i];

}
function iFrame() {
    frameTag.innerHTML = `<iframe src="${link}" frameborder="0" class="w-100" height="600px"></iframe>`;
}

function btnAnimation() {
    document.getElementById('btn').classList.toggle('beat')
}

function startAnime() {
    interval1 = setInterval(changeFoto, 6000);
    //makes the button beat
    btnBeat = setInterval(btnAnimation, 1000);    
}
startAnime();

//Thhis stop slide when clicked
function pauseAnime() {
    clearInterval(interval1);
    clearInterval(btnBeat);
}

document.getElementById('btnDiv').addEventListener('mouseover', pauseAnime);
document.getElementById('btnDiv').addEventListener('mouseout', startAnime);