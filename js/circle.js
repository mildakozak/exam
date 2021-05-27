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

        if (i == 1) {
            circle.style.strokeDashoffset = 1333,
                document.getElementById('headline-replace').innerHTML = headlines[0],
                document.getElementById('headline-replace-2').innerHTML = headlines2[0],
                document.getElementById('p-replace').innerHTML = phrases[0],
                document.getElementById('ellipse-1').style.fill = "#FBC117",
                document.getElementById('ellipse-2').style.fill = "#ECE9E1",
                document.getElementById('ellipse-3').style.fill = "#ECE9E1";
        } else if (i == 2) {
            circle.style.strokeDashoffset = 666,
                document.getElementById('headline-replace').innerHTML = headlines[1],
                document.getElementById('headline-replace-2').innerHTML = headlines2[1],
                document.getElementById('p-replace').innerHTML = phrases[1];
                document.getElementById('ellipse-2').style.fill = "#FBC117",
                document.getElementById('ellipse-3').style.fill = "#ECE9E1";
        } else{
                circle.style.strokeDashoffset = 0,
                document.getElementById('headline-replace').innerHTML = headlines[2],
                document.getElementById('headline-replace-2').innerHTML = headlines2[2],
                document.getElementById('p-replace').innerHTML = phrases[2],
                document.getElementById('ellipse-1').style.fill = "#FBC117",
                document.getElementById('ellipse-2').style.fill = "#FBC117",
                document.getElementById('ellipse-3').style.fill = "#FBC117",
                i = 0;
    }
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
