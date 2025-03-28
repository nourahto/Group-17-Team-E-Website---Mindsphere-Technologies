// ✅ Intro Animation - Letter by Letter
const text = "Mindsphere Technologies";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("intro-text").textContent += text[index];
        document.getElementById("intro-text").style.opacity = "1";
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// ✅ Remove intro after animation
setTimeout(() => {
    document.getElementById("intro").style.display = "none";
}, 5000);

// ✅ Cookie Banner
document.getElementById("accept-btn").addEventListener("click", () => {
    document.getElementById("cookie-banner").style.display = "none";
});

document.getElementById("decline-btn").addEventListener("click", () => {
    alert("You cannot escape. We are watching.");
});

// ✅ Glitch Effect Trigger
document.querySelectorAll(".glass-card").forEach(card => {
    card.addEventListener("mouseover", () => {
        card.classList.add("glitch-effect");
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("glitch-effect");
    });
});

// ✅ Creepy Random Pop-ups
function createCreepyPopup() {
    const messages = [
        "Are you alone?",
        "I see you.",
        "They are watching.",
        "System Error... or is it?",
        "Something's not right...",
        "RUN."
    ];
    
    let popup = document.createElement("div");
    popup.classList.add("creepy-popup");
    popup.innerText = messages[Math.floor(Math.random() * messages.length)];

    // Random positioning
    popup.style.top = `${Math.random() * 80 + 10}%`;
    popup.style.left = `${Math.random() * 80 + 10}%`;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = "0";
        setTimeout(() => document.body.removeChild(popup), 500);
    }, 3000);
}

// ✅ Randomly show pop-ups every 10-20 seconds
setInterval(createCreepyPopup, Math.random() * (20000 - 10000) + 10000);

// ✅ Video Sound Toggle
const video = document.getElementById("featured-video");
const unmuteBtn = document.createElement("button");
unmuteBtn.innerText = "🔊 Unmute";
unmuteBtn.classList.add("unmute-btn");

unmuteBtn.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false;
        unmuteBtn.innerText = "🔇 Mute";
    } else {
        video.muted = true;
        unmuteBtn.innerText = "🔊 Unmute";
    }
});

document.body.appendChild(unmuteBtn);

const aiMessages = [
    "Processing user input...",
    "Analyzing neural pathways...",
    "Decoding thought patterns...",
    "Encrypting your memories...",
    "Establishing control link...",
    "Predicting next action..."
];

function startAITyping() {
    let aiBox = document.createElement("div");
    aiBox.classList.add("ai-typing-box");
    document.body.appendChild(aiBox);

    function typeMessage() {
        let message = aiMessages[Math.floor(Math.random() * aiMessages.length)];
        aiBox.textContent = message;
        setTimeout(typeMessage, Math.random() * 8000 + 4000); // Random delay (4s - 12s)
    }

    typeMessage();
}

document.addEventListener("DOMContentLoaded", startAITyping);
