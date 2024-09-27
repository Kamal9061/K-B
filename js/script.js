// Immediately try to play the audio
var myaudio = document.getElementById("my_audio");

// Try playing on load
myaudio.play().catch(function () {
    console.log("Autoplay blocked. Waiting for user interaction.");
});

// Fallback: Play audio on first user interaction (click)
document.addEventListener('click', function () {
    myaudio.play();
    console.log("Shaadi me zaroor aana");
}, { once: true }); // { once: true } ensures it only triggers once



// Set the date we're counting down to
var countDownDate = new Date("nov 25, 2024 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>" + days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);







/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '1.5rem',
    duration: 2000,
    delay: 200,
    // reset: true
});


// sr.reveal(`.rahul`,{ delay: 300, origin: 'top' })
sr.reveal(`.ganeshjiimg`, { origin: 'left', delay: 500 })
sr.reveal(`.pranjal`, { origin: 'right', delay: 500 })
sr.reveal(`.gif,.home_txt`, { delay: 1100, origin: 'top' })
sr.reveal(`.top-right-decoration,.top-left-decoration`, { origin: 'left', delay: 1900 })
sr.reveal(`.responsive-table__row`, { interval: 100 })
sr.reveal(`.table_container`, { delay: 100, origin: 'top' })
sr.reveal(`.happiness,.hindi_text`, { delay: 200, origin: 'bottom' })
sr.reveal(`.social__links`, { delay: 800, origin: 'bottom', interval: 200 })
sr.reveal(`.newsletter__description,.home__bottom`, { origin: 'left', delay: 300 })
sr.reveal(`.newsletter__form,.CTA`, { origin: 'right', delay: 300 })









// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

