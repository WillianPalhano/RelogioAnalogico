
$(document).ready(function () {
    console.log("Hello world");
    const elementSeconds = document.querySelector('#seconds');
    const elementMinutes = document.querySelector('#minutes');
    const elementHours = document.querySelector('#hours');
    clock()

    function clock () {
        let date = new Date();

        let s = date.getSeconds() * 6; //6 é o coeficiente exato em graus para o ponteiro do segundo viajar de um ponto para o outro
        let m = date.getMinutes() * 6 + (s / 60); //Em 60 segundos, o ponteiro viaja de um ponto para o outro, contando 1 minuto
        let h = date.getHours()  * 30 + (m / 12); // Em 12 minutos, o ponteiro viaja de um ponto para o outro, quando viaja 6 pontos(6x12=60 minutos), completa 1 hora.

        elementSeconds.style.transform = `rotate(${s}deg)`
        elementMinutes.style.transform = `rotate(${m}deg)`
        elementHours.style.transform = `rotate(${h}deg)`
    }

    setInterval(clock, 1000);
});
