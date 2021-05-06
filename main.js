const btn = document.querySelectorAll(".box");
const audio = document.querySelectorAll(".audio");


btn.forEach((sound, trackNo) =>{
    sound.addEventListener("click", ()=>{
        var snd = new Audio(`../audios/music${trackNo}.mp3`);
        snd.play();
    });

});



