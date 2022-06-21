function playSong() {
    var play = document.getElementById("play-btn");
    var pause = document.getElementById("pause-btn");
    var player = document.getElementById("player-live");
        if (play.style.display = "inline-block") {
            play.style.display = "none";
            pause.style.display = "inline-block";
            player.style.animationPlayState = "running";             
        }
}

function pauseSong() {
    var play = document.getElementById("play-btn");
    var pause = document.getElementById("pause-btn");
    var player = document.getElementById("player-live");
        if (pause.style.display = "inline-block") {
            pause.style.display = "none";
            play.style.display = "inline-block";
            player.style.animationPlayState = "paused";            
        }
}