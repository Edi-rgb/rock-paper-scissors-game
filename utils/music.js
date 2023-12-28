const audio = document.getElementById('audio')

let isPlaying = true

function playingMusic(){

    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }

}

export default playingMusic; 

