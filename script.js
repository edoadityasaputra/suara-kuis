function jawabanBenar() {
    const audio = document.getElementById("benarSound");
    audio.currentTime = 0;
    audio.play();
}

function jawabanSalah() {
    const audio = document.getElementById("salahSound");
    audio.currentTime = 0;
    audio.play();
}

// EVENT KEYBOARD
document.addEventListener("keydown", function(event) {

    // Cegah scroll kalau spasi ditekan
    if (event.code === "Space") {
        event.preventDefault();
    }

    // BENAR
    if (
        event.code === "KeyB" ||
        event.code === "Enter" ||
        event.code === "Space"
    ) {
        jawabanBenar();
    }

    // SALAH
    if (
        event.code === "KeyS" ||
        event.code === "Backspace"
    ) {
        jawabanSalah();
    }

});
