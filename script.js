 // =========================
// PREMIUM BIRTHDAY WEBSITE
// script.js
// =========================

// -------------------------
// Countdown Timer
// Set Varsha's birthday
// -------------------------

const birthday = new Date("August 8, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        startConfetti();

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();


// -------------------------
// Floating Hearts
// -------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (18 + Math.random() * 35) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);
}

setInterval(createHeart, 500);


// -------------------------
// Smooth Fade Animation
// -------------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(70px)";

    section.style.transition = "1s";

    observer.observe(section);

});


// -------------------------
// Music Controls
// -------------------------

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

if (musicBtn && music) {

    musicBtn.onclick = function () {

        if (music.paused) {

            music.play();

            musicBtn.innerHTML = "⏸ Pause Music";

        } else {

            music.pause();

            musicBtn.innerHTML = "▶ Play Music";
        }
    };
}


// -------------------------
// Confetti
// -------------------------

function startConfetti() {

    for (let i = 0; i < 250; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.width = "10px";

        confetti.style.height = "10px";

        confetti.style.borderRadius = "50%";

        const colors = [
            "#ff4fa2",
            "#ffd700",
            "#00e5ff",
            "#7CFC00",
            "#ffffff",
            "#ff9800"
        ];

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.zIndex = "9999";

        confetti.style.transition =
            (3 + Math.random() * 3) + "s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.transform =
                "translateY(110vh) rotate(720deg)";

        }, 100);

        setTimeout(() => {

            confetti.remove();

        }, 7000);
    }
}


// -------------------------
// Typewriter Effect
// -------------------------

const typeTarget = document.getElementById("typing");

if (typeTarget) {

    const message =
        "Every heartbeat of mine whispers your name ❤️";

    let i = 0;

    function typing() {

        if (i < message.length) {

            typeTarget.innerHTML += message.charAt(i);

            i++;

            setTimeout(typing, 70);
        }
    }

    typing();
}


// -------------------------
// Surprise Button
// -------------------------

const surpriseBtn = document.getElementById("surpriseBtn");

if (surpriseBtn) {

    surpriseBtn.onclick = function () {

        startConfetti();

        alert("Happy Birthday My Darling ❤️\n\nI Love You Forever.");
    };
}


// -------------------------
// Scroll Progress Bar
// -------------------------

window.onscroll = function () {

    const winScroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled =
        (winScroll / height) * 100;

    const progress =
        document.getElementById("progressBar");

    if (progress) {

        progress.style.width = scrolled + "%";
    }
};
const reasons=[

{

title:"❤️ Reason 1 - Tumhari Smile😊",

text:"Tmhari smile...aise toh tmhe lagta h bahut dangerous h🤣..but wo bebaak hasi😍..hme bahut psnd hai♥️...like jaan se jyda pyari h🥰...charming hai🤩..lively h...aur mere liye toh had se khoobsurat😌"

},

{

title:"❤️ Reason 2 - Tumhara Caring Nature🫶🏻",

text:"Tum jis trh meri care krti ho😊 aur bina bole meri feelings samajh leti ho🫢.. wo mujhe har din special feel krata hai😎...Tumhare saath hone se hr problem chhoti lagti hai🤏🏻."

},

{

title:"❤️ Reason 3 - Tum Mujhe Samajhti Ho🫰🏻",

text:"Kabhi kabhi bina kuch kahe tum meri feelings samajh leti ho👉🏻👈🏻...Shayad isi ko real connection kehte hain🤔..ye baat mujhe hr din tumhare aur kareeb le aati hai🤗."

},

{

title:"❤️ Reason 4 - Tumhari Respect🫡",

text:"Tum hmesha hr insaan ki respect karti ho😌....Tumhara nature aur simplicity hi tmhe sabse alg aur sabse beautiful banati hai☝🏻✨."

},

{

title:"❤️ Reason 5 - Hmari Journey🛣️",

text:"13 December 2020 se lekr aaj tk ka hr moment meri life ki sbse beautiful memory hai💭. Main chahta hu ye journey kabhi khatam na ho♾️."

},

{

title:"❤️ Reason 6 - Tum Mujhe Better Banati Ho🤵🏻‍♂️",

text:"Tumse milne ke baad mujhe khud ka better version banne ka mann karta hai😎....Tum meri strength bhi ho💪🏻 aur meri motivation bhi🫡."

},

{

title:"❤️ Reason 7 - Tum Meri Khushi Ho🥰",

text:"Meri khushi kisi cheez mein nahi😊...balki tumhare saath bitaye hue chhote chhote moments mein hai⌛....wahi moments meri life ka sbse bada gift hain🎁."

},

{

title:"❤️ Reason 8 - Sirf Tum💝",

text:"Sach kahu😌... in sb reasons se bhi bda ek☝🏻 reason hai...mai tumse kisi wajah se nahi🙅🏻‍♂️..blki tumhari hr chhoti si baat ke liye pyaar karta hu🤗...Thank you meri life ka sbse beautiful part banne ke liye🙇🏻‍♂️. Happy Birthday My Darling ❤️"

}
