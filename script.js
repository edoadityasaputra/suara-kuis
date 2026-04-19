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

// Fokus ke halaman
window.onload = function() {
    document.body.focus();
};

// EVENT KEYBOARD
window.addEventListener("keydown", function(event) {

    console.log(event.code); // DEBUG

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
