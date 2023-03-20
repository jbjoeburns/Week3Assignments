let boomsfx = new Audio('boom.wav');
let clapsfx = new Audio('clap.wav');
let hihatsfx = new Audio('hihat.wav');
let kicksfx = new Audio('kick.wav');
let openhatsfx = new Audio('openhat.wav');
let ridesfx = new Audio('ride.wav');
let snaresfx = new Audio('snare.wav');
let tinksfx = new Audio('tink.wav');
let tomsfx = new Audio('tom.wav');

const animation = background.animate(
    [
      { transform: "scale(100%)" },
      { transform: "scale(99%)" }
    ], {
      easing: 'linear',
      duration: 80
    });

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === 'd' || name === 'D') {
        boomdrum.style.transform = 'rotate(180deg)'
        boomdrumtxt.style.opacity = "0"
        boomsfx.load();
        boomsfx.play();
        animation.play();
        setTimeout(() => {
            boomdrum.style.transform = 'rotate(0deg)'
            boomdrumtxt.style.opacity = "1"
        }, "50");
    }
    if (name === 'f' || name === 'F') {
        clapdrum.style.transform = 'rotate(180deg)'
        clapdrumtxt.style.opacity = "0"
        clapsfx.load();
        clapsfx.play();
        animation.play();
        setTimeout(() => {
            clapdrum.style.transform = 'rotate(0deg)'
            clapdrumtxt.style.opacity = "1"
        }, "50");
        
    }
    if (name === 'g' || name === 'G') {
        hihatdrum.style.transform = 'rotate(180deg)'
        hihatdrumtxt.style.opacity = "0"
        hihatsfx.load();
        hihatsfx.play();
        animation.play();
        setTimeout(() => {
            hihatdrum.style.transform = 'rotate(0deg)'
            hihatdrumtxt.style.opacity = "1"
        }, "50");
    }
    if (name === 'z' || name === 'Z') {
        kickdrum.style.transform = 'rotate(180deg)'
        kickdrumtxt.style.opacity = "0"
        kicksfx.load();
        kicksfx.play();
        animation.play();
        setTimeout(() => {
            kickdrum.style.transform = 'rotate(0deg)'
            kickdrumtxt.style.opacity = "1"
        }, "50");
    }
    if (name === 'x' || name === 'X') {
        openhatdrum.style.transform = 'rotate(180deg)'
        openhatdrumtxt.style.opacity = "0"
        openhatsfx.load();
        openhatsfx.play();
        animation.play();
        setTimeout(() => {
            openhatdrum.style.transform = 'rotate(0deg)'
            openhatdrumtxt.style.opacity = "1"
        }, "50");
    }
    if (name === 'c' || name === 'C') {
        ridedrum.style.transform = 'rotate(180deg)'
        ridedrumtxt.style.opacity = "0"
        ridesfx.load();
        ridesfx.play();
        animation.play();
        setTimeout(() => {
            ridedrum.style.transform = 'rotate(0deg)'
            ridedrumtxt.style.opacity = "1"
        }, "50");
        
    }
    if (name === 'v' || name === 'V') {
        snaredrum.style.transform = 'rotate(180deg)'
        snaredrumtxt.style.opacity = "0"
        snaresfx.load();
        snaresfx.play();
        animation.play();
        setTimeout(() => {
            snaredrum.style.transform = 'rotate(0deg)'
            snaredrumtxt.style.opacity = "1"
        }, "50");
    }
    if (name === 'b' || name === 'B') {
        tinkdrum.style.transform = 'rotate(180deg)'
        tinkdrumtxt.style.opacity = "0"
        tinksfx.load();
        tinksfx.play();
        animation.play();
        setTimeout(() => {
            tinkdrum.style.transform = 'rotate(0deg)'
            tinkdrumtxt.style.opacity = "1"
        }, "50");
    }
    if (name === 'n' || name === 'N') {
        tomdrum.style.transform = 'rotate(180deg)'
        tomdrumtxt.style.opacity = "0"
        tomsfx.load();
        tomsfx.play();
        animation.play();
        setTimeout(() => {
            tomdrum.style.transform = 'rotate(0deg)'
            tomdrumtxt.style.opacity = "1"
        }, "50");
    }

});

boomdrum.addEventListener("click", ()=>{
    boomdrum.style.transform = 'rotate(180deg)'
    boomdrumtxt.style.opacity = "0"
    boomsfx.load();
    boomsfx.play();
    animation.play();
    setTimeout(() => {
        boomdrum.style.transform = 'rotate(0deg)'
        boomdrumtxt.style.opacity = "1"
    }, "50");
});
clapdrum.addEventListener("click", ()=>{
        clapdrum.style.transform = 'rotate(180deg)'
        clapdrumtxt.style.opacity = "0"
        clapsfx.load();
        clapsfx.play();
        animation.play();
        setTimeout(() => {
            clapdrum.style.transform = 'rotate(0deg)'
            clapdrumtxt.style.opacity = "1"
        }, "50");
});
hihatdrum.addEventListener("click", ()=>{
    hihatdrum.style.transform = 'rotate(180deg)'
    hihatdrumtxt.style.opacity = "0"
    hihatsfx.load();
    hihatsfx.play();
    animation.play();
    setTimeout(() => {
        hihatdrum.style.transform = 'rotate(0deg)'
        hihatdrumtxt.style.opacity = "1"
    }, "50");
});
kickdrum.addEventListener("click", ()=>{
    kickdrum.style.transform = 'rotate(180deg)'
    kickdrumtxt.style.opacity = "0"
    kicksfx.load();
    kicksfx.play();
    animation.play();
    setTimeout(() => {
        kickdrum.style.transform = 'rotate(0deg)'
        kickdrumtxt.style.opacity = "1"
    }, "50");
});
openhatdrum.addEventListener("click", ()=>{
    openhatdrum.style.transform = 'rotate(180deg)'
    openhatdrumtxt.style.opacity = "0"
    openhatsfx.load();
    openhatsfx.play();
    animation.play();
    setTimeout(() => {
        openhatdrum.style.transform = 'rotate(0deg)'
        openhatdrumtxt.style.opacity = "1"
    }, "50");
});
ridedrum.addEventListener("click", ()=>{
    ridedrum.style.transform = 'rotate(180deg)'
    ridedrumtxt.style.opacity = "0"
    ridesfx.load();
    ridesfx.play();
    animation.play();
    setTimeout(() => {
        ridedrum.style.transform = 'rotate(0deg)'
        ridedrumtxt.style.opacity = "1"
    }, "50");
        
});
snaredrum.addEventListener("click", ()=>{
    snaredrum.style.transform = 'rotate(180deg)'
    snaredrumtxt.style.opacity = "0"
    snaresfx.load();
    snaresfx.play();
    animation.play();
    setTimeout(() => {
        snaredrum.style.transform = 'rotate(0deg)'
        snaredrumtxt.style.opacity = "1"
    }, "50");
});
tinkdrum.addEventListener("click", ()=>{
    tinkdrum.style.transform = 'rotate(180deg)'
    tinkdrumtxt.style.opacity = "0"
    tinksfx.load();
    tinksfx.play();
    animation.play();
    setTimeout(() => {
        tinkdrum.style.transform = 'rotate(0deg)'
        tinkdrumtxt.style.opacity = "1"
    }, "50");
});
tomdrum.addEventListener("click", ()=>{
    tomdrum.style.transform = 'rotate(180deg)'
    tomdrumtxt.style.opacity = "0"
    tomsfx.load();
    tomsfx.play();
    animation.play();
    setTimeout(() => {
        tomdrum.style.transform = 'rotate(0deg)'
        tomdrumtxt.style.opacity = "1"
    }, "50");
});


contolslink.addEventListener("click", ()=>{
    alert(`Press key listed on drum or click to play sound, enter number then click metronome below to change BPM (default 60).`)
});


let clocktick = new Audio('clock.mp3');

silhouette.addEventListener("click", ()=>{
    if (silhouette.style.opacity != "0") {
        silhouette.style.opacity = "0"
        clocktick.pause();
        clocktick.load();
    }
    else {
        var beatsPerMin = document.getElementById("myText").value;
        if (beatsPerMin.match(/^[0-9]+$/) == null){
            alert(`PLEASE INPUT A NUMBER ONLY ${typeof beatsPerMin}`)
            return
        }
        silhouette.style.opacity = "0.3";
        // clock is by default 60 beats per minute, so need to divide beatsPerMin by 60 to get playback speed
        beatsPerMinCalculated = beatsPerMin / 60
        alert(`BPM: ${beatsPerMin}`)
        clocktick.play();
        clocktick.playbackRate=beatsPerMinCalculated;
        clocktick.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
});