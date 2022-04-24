console.log('hola');

window.addEventListener('load', function () {
    init();
});


function init() {
    document.getElementById("video").addEventListener("canplay", function () {
        document.getElementById("mensaje").innerHTML = "";
    });

    document.getElementById("input").addEventListener("change", function () {
        console.log('Vídeo cargando');
        document.getElementById("mensaje").innerHTML = "Vídeo cargando. Puede demorar varios minutos!";
        let file = (this.files[0]);


        if (!file.type.match('video.*')) {
            alert('El tipo de archivo no es soportado por el navegador');
            return;
        }

        let media = URL.createObjectURL(this.files[0]);
        let video = document.getElementById('video');
        video.src = media;
        video.style.display = 'block';
    });
}

function play() {
    let video = document.getElementById('video');
    video.play();
}

function pause() {
    let video = document.getElementById('video');
    video.pause();
}

function volumeUp() {
    let video = document.getElementById('video');
    video.volume += 0.1;
}

function volumeDown() {
    let video = document.getElementById('video');
    video.volume -= 0.1;
}