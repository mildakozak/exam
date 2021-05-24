var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;
var i = 0;

function replaceParagraph() {
    const phrases = [
  'Frontløberne is an open platform for cultural and creative entrepreneurship. We believe in your ideas and we are happy to share our experience with you!',
  'In Frontløberne you are always welcome to work on your cultural project in a common room.  We appreciate a cup of coffee with an inspirational talk!',
  'We launch and develop cultural events, projects and workshops. We want to share our passion with you and create a dynamic atmosphere in Aarhus.'
  ];
    const headlines = [
  'MAKE YOUR IDEAS',
  'ENJOY GOOD COMPANY',
  'PARTICIPATE IN EVENTS'
  ];
    const headlines2 = [
  'COME TRUE',
  'WHILE WORKING',
  'FOR FREE'
  ];


    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;


    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;

        console.log(i);

        if (i === 1) {
            circle.style.strokeDashoffset = 1333,
                document.getElementById('headline-replace').innerHTML = headlines[0],
                document.getElementById('headline-replace-2').innerHTML = headlines2[0],
                document.getElementById('p-replace').innerHTML = phrases[0];
        } else if (i === 2) {
            circle.style.strokeDashoffset = 666,
                document.getElementById('headline-replace').innerHTML = headlines[1],
                document.getElementById('headline-replace-2').innerHTML = headlines2[1],
                document.getElementById('p-replace').innerHTML = phrases[1];
        } else if (i === 3)
            circle.style.strokeDashoffset = 0,
            document.getElementById('headline-replace').innerHTML = headlines[2],
            document.getElementById('headline-replace-2').innerHTML = headlines2[2],
            document.getElementById('p-replace').innerHTML = phrases[2];
    }

    if (i > 2) {
        i = 0;
    }

    i++

    const input = document.querySelector('input');
    setProgress(input.value);

    input.addEventListener('change', function (e) {
        if (input.value < 101 && input.value > -1) {
            setProgress(input.value);
        }
    })
}



const gap = 16;

/* JS CODE FOR THE "SLIDER" SECTION (Code by Victor Tuesta Ascoy) */

const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
