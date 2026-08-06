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

/* =====================================
   SURPRISE PAGE SCRIPT
===================================== */

const reasons = [

{
title:"❤️ Reason 1 – Your Smile 😊",
image:"images/Photo1.jpg",
text:"Tumhari smile meri favourite cheez hai. Chahe mera din kitna bhi stressful ho, tumhari ek hasi meri saari tension door kar deti hai. Tum hasta hua chehra meri life ki sabse beautiful memory hai."
},

{
title:"❤️ Reason 2 – Your Eyes 👀",
image:"images/Photo2.jpg",
text:"Tumhari aankhon mein ek alag hi sukoon hai. Jab bhi unmein dekhta hoon, lagta hai poori duniya wahin ruk gayi hai. Unmein mujhe pyaar, care aur apna future dikhta hai."
},

{
title:"❤️ Reason 3 – Your Caring Nature 🥹",
image:"images/Photo3.jpg",
text:"Tum jis tarah meri care karti ho aur meri chhoti chhoti baaton ka dhyan rakhti ho, woh mujhe har din special feel karata hai. Tum meri comfort zone ho."
},

{
title:"❤️ Reason 4 – Our Beautiful Journey ✨",
image:"images/Photo4.jpg",
text:"13 December 2020 se lekar aaj tak ka har moment meri life ki sabse beautiful story hai. Main chahta hoon ki ye journey hamesha isi tarah chalti rahe."
},

{
title:"❤️ Reason 5 – Your Sweet Voice 🎶",
image:"images/Photo5.jpg",
text:"Tumhari awaaz sunte hi dil ko ek ajeeb sa sukoon milta hai. Chahe kitna bhi bura din ho, tumhari ek 'Hello' sab kuch better bana deti hai."
},

{
title:"❤️ Reason 6 – Your Cute Everything 💖",
image:"images/Photo6.jpg",
text:"Tumhari innocence, tumhari simplicity aur tumhari har chhoti si baat mujhe aur bhi zyada tumse pyaar karne par majboor karti hai."
},

{
title:"❤️ Reason 7 – You Make Me Better 🌹",
image:"images/Photo7.jpg",
text:"Tumse milne ke baad mujhe khud ka better version banne ka mann karta hai. Tum meri strength bhi ho aur meri motivation bhi."
},

{
title:"❤️ Reason 8 – Simply Because You're You ❤️",
image:"images/Photo8.jpg",
text:"Main tumse kisi ek wajah se nahi, balki tumhari har chhoti si baat ke liye pyaar karta hoon. Thank you meri life ka sabse beautiful part banne ke liye."
}

];

let currentReason = 0;

const gift = document.getElementById("giftWrapper");
const lid = document.getElementById("lid");
const surprise = document.getElementById("surpriseContent");
const music = document.getElementById("birthdayMusic");

gift.onclick = function(){

lid.classList.add("open");

setTimeout(()=>{

surprise.style.display="block";

music.play().catch(()=>{});

showReason();

},900);

};

function showReason(){

document.getElementById("reasonTitle").innerHTML=reasons[currentReason].title;

document.getElementById("reasonText").innerHTML=reasons[currentReason].text;

document.getElementById("reasonImage").src=reasons[currentReason].image;

}

document.getElementById("nextReasonBtn").onclick=function(){

currentReason++;

if(currentReason<reasons.length){

showReason();

launchFireworks();

createHeart();

}

else{

document.getElementById("reasonsSection").style.display="none";

document.getElementById("letterSection").style.display="block";

launchFireworks();

createConfetti();

}

};
