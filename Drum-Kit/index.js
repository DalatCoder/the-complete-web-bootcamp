Array.from(document.querySelectorAll(".drum")).forEach(el =>
    el.addEventListener("click", e => {
        playAudio(e.target.textContent);
        activeDrum(e.target.textContent);
    })
);

document.addEventListener("keypress", e => {
    playAudio(e.key);
    activeDrum(e.key);
});

function playAudio(label) {
    let audioFileName = "";
    switch (label) {
        case "w":
            audioFileName = "crash.mp3";
            break;
        case "a":
            audioFileName = "kick-bass.mp3";
            break;
        case "s":
            audioFileName = "snare.mp3";
            break;
        case "d":
            audioFileName = "tom-1.mp3";
            break;
        case "j":
            audioFileName = "tom-2.mp3";
            break;
        case "k":
            audioFileName = "tom-3.mp3";
            break;
        case "l":
            audioFileName = "tom-4.mp3";
            break;
        default:
            return;
    }

    const audio = new Audio(`/sounds/${audioFileName}`);
    audio.play();
}

function activeDrum(label) {
    const drumEl = document.querySelector(`.${label}`);
    if (drumEl) {
        drumEl.classList.add("active-drum");
        setTimeout(() => drumEl.classList.remove(`active-drum`), 500);
    }
}
