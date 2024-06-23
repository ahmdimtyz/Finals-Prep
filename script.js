document.getElementById('english-btn').addEventListener('click', function() {
    typeWriter('Whoever move first, is Gay');
    playMusic();
});

document.getElementById('spanish-btn').addEventListener('click', function() {
    typeWriter('El que se mueva, es Gay');
    playMusic();
});

function playMusic() {
    var music = document.getElementById('music');
    music.play();
}

function typeWriter(text) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerText = '';
    var i = 0;
    function type() {
        if (i < text.length) {
            messageDiv.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}
