/* ==========================================
   Happy Birthday Avni ❤️
   SCRIPT.JS - PART 1
========================================== */

// Get Elements
const bgMusic = document.getElementById("bgMusic");
const passwordPage = document.getElementById("passwordPage");
const mainWebsite = document.getElementById("mainWebsite");

const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const wrongPassword = document.getElementById("wrongPassword");

const landing = document.getElementById("landing");
const introScreen = document.getElementById("introScreen");
const continueIntro = document.getElementById("continueIntro");
const openGift = document.getElementById("giftBox");
const story = document.getElementById("story");
const storyContainer = document.getElementById("storyContainer");
const nextStory = document.getElementById("nextStory");

// Story Counter

let currentStory = 0;

/* ==========================================
   PASSWORD
========================================== */

unlockBtn.addEventListener("click", unlockWebsite);

passwordInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        unlockWebsite();

    }

});

function unlockWebsite(){

    if(passwordInput.value === websiteData.password){

       passwordPage.classList.add("hidden");

mainWebsite.classList.remove("hidden");

introScreen.style.display="flex";

landing.classList.add("hidden");
    }else{

        wrongPassword.textContent = "Wrong Password ❤️";

        passwordInput.value = "";

    }

}

/* ==========================================
   OPEN GIFT
========================================== */

openGift.addEventListener("click",()=>{

    bgMusic.play().catch(()=>{});

    landing.classList.add("hidden");

    story.classList.remove("hidden");

    showStory();

});

/* ==========================================
   SHOW STORY
========================================== */

function showStory(){

    const item = websiteData.story[currentStory];

    storyContainer.innerHTML = `

    <div class="storyCard">

        <h2>${item.title}</h2>

        <p>${item.text}</p>

        <br><br>

        <button id="storyNext">

            ${
                currentStory === websiteData.story.length-1
                ?
                "Continue ❤️"
                :
                "Next ❤️"
            }

        </button>

    </div>

    `;

    document
    .getElementById("storyNext")
    .addEventListener("click",()=>{

        currentStory++;

        if(currentStory < websiteData.story.length){

            showStory();

        }else{

            showGallery();

        }

    });

}

/* ==========================================
   STARS
========================================== */

const stars = document.getElementById("stars");

for(let i=0;i<150;i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random()*100 + "%";

    star.style.top = Math.random()*100 + "%";

    star.style.animationDelay = Math.random()*4 + "s";

    star.style.opacity = Math.random();

    stars.appendChild(star);

}

/* ==========================================
   FLOATING LILIES
========================================== */

const lilies = document.getElementById("lilies");

for(let i=0;i<20;i++){

    const lily = document.createElement("div");

    lily.className = "lily";

    lily.innerHTML = "🌸";

    lily.style.left = Math.random()*100 + "%";

    lily.style.animationDuration = (8 + Math.random()*10) + "s";

    lily.style.animationDelay = Math.random()*8 + "s";

    lily.style.fontSize = (18 + Math.random()*18) + "px";

    lilies.appendChild(lily);

}

/* ==========================================
   PHOTO GALLERY
========================================== */

/* ==========================================
   SCRAPBOOK MEMORIES
========================================== */

let currentPhoto = 0;

function showGallery(){

    currentPhoto = 0;

    showPhoto();

}

function showPhoto(){

    const photo = websiteData.photos[currentPhoto];

    storyContainer.innerHTML = `

    <div class="photoCard">

        <img src="${photo.image}" alt="">

        <div class="photoInfo">

            <h2>${photo.title}</h2>

            <p id="photoText"></p>

            ${
                photo.song
                ?
                `<br><br>
                <a href="${photo.song}" target="_blank">
                🎵 Our Song
                </a>`
                :
                ""
            }

            <br><br>

            <button id="nextPhoto">

                ${
                    currentPhoto === websiteData.photos.length-1
                    ?
                    "Continue ❤️"
                    :
                    "Next Memory ❤️"
                }

            </button>

        </div>

    </div>

    `;

    typeWriter(photo.text);

    document
    .getElementById("nextPhoto")
    .addEventListener("click",()=>{

        currentPhoto++;

        if(currentPhoto < websiteData.photos.length){

            showPhoto();

        }else{

            showVideo();

        }

    });

}/* ==========================================
   TYPEWRITER
========================================== */

function typeWriter(text){

    const element = document.getElementById("photoText");

    element.innerHTML = "";

    let i = 0;

    const speed = 30;

    function typing(){

        if(i < text.length){

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing,speed);

        }

    }

    typing();

}



/* ==========================================
   VIDEO PAGE
========================================== */

function showVideo(){

    storyContainer.innerHTML = `

    <div class="videoCard">

        <h2>${websiteData.video.title}</h2>

        <p>${websiteData.video.text}</p>

        <video
        controls>

            <source
            src="${websiteData.video.file}"
            type="video/mp4">

        </video>

        <br><br>

        <button
        id="continueFav">

        Continue ❤️

        </button>

    </div>

    `;

    document
    .getElementById("continueFav")
    .addEventListener("click",showFavourites);

}

/* ==========================================
   FAVOURITES
========================================== */

function showFavourites(){

    let html = `

    <h1 style="text-align:center;margin-bottom:40px;">
    ❤️ Things You Love ❤️
    </h1>

    <div class="favourites">

    `;

    websiteData.favourites.forEach(item=>{

        html += `

        <div class="favCard">

            <img
            class="favImage"
            src="${item.image}"
            alt="">

            <h3>${item.title}</h3>

            <p>${item.value}</p>

        </div>

        `;

    });

    html += `

    </div>

    <br><br>

    <center>

        <button id="continueLetter">
            One Last Surprise ❤️
        </button>

    </center>

    `;

    storyContainer.innerHTML = html;

    document
        .getElementById("continueLetter")
        .addEventListener("click", showLetter);

}

/* ==========================================
   LETTER
========================================== */

function showLetter(){

    storyContainer.innerHTML = `

    <div class="letterCard">

        <h2>💌 Happy Birthday</h2>

        <p>${websiteData.finalLetter}</p>

        <br>

        <center>

        <button id="finishBtn">

        Happy Birthday Avni ❤️

        </button>

        </center>

    </div>

    `;

    document
    .getElementById("finishBtn")
    .addEventListener("click",showEnding);

}

/* ==========================================
   ENDING
========================================== */

function showEnding(){

    launchConfetti();

    storyContainer.innerHTML = `

    <div class="storyCard" style="text-align:center;">

        <h2>🎉 Once again Happy 18th Birthday Avni ❤️</h2>

        <p>

        Thank you for being the most beautiful part of my life.
        <br><br>
        I hope this little effort made you smile.
        <br><br>
        I love u to the moon and back too ❤️❤️

        </p>

        <br>

        <button onclick="location.reload()">

        Replay Our Story ❤️

        </button>

    </div>

    `;

}

/* ==========================================
   SIMPLE CONFETTI
========================================== */

function launchConfetti(){

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.innerHTML="🎉";

        confetti.style.position="fixed";
        confetti.style.left=Math.random()*100+"vw";
        confetti.style.top="-50px";
        confetti.style.fontSize=(16+Math.random()*20)+"px";
        confetti.style.transition="all 4s linear";
        confetti.style.zIndex="9999";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.style.top="110vh";
            confetti.style.transform=
            `rotate(${Math.random()*720}deg)`;

        },50);

        setTimeout(()=>{

            confetti.remove();

        },4500);

    }

}/* ==========================================
   INTRO SCREEN
========================================== */

continueIntro.addEventListener("click",()=>{

    introScreen.style.display="none";

    landing.classList.remove("hidden");

});