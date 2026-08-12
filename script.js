/* =========================
   DATA DOA
========================= */

const wishes = [

    {
        icon: "🌿",
        title: "Your Journey",
        text: "Semoga di setiap perjalanan kamu setelah ini dipenuhi oleh hal-hal yang baik. Di setiap langkah yang kamu ambil semoga selalu membawa kamu semakin dekat dengan kehidupan yang selama ini kamu inginkan yaa..."
    },

    {
        icon: "✨",
        title: "Your Dreams",
        text: "Semoga semua hal yang sedang kamu perjuangin sekarang perlahan menemukan jalannya yaaa dan kalau suatu hari kamu merasa lelah, insyaallah kamu selalu menemukan alasan untuk kamu tetap melangkah dan percaya bahwa semua usaha kamu akan berarti di kemudian hari..."
    },

    {
        icon: "🌷",
        title: "Your Happiness",
        text: "Semoga kamu menemukan banyak sekali hal-hal yang bisa membuat kamu bahagia yaa, bahkan dari hal yang paling sederhana sekalipun. dan dimanapun kamu berada nanti, semoga kamu selalu merasa cukup dan selalu dikelilingi orang-orang yang benar-benar sayang, menghargai, dan peduli dengan kamu yaa..."
    },

    {
        icon: "🤍",
        title: "A Peaceful Heart",
        text: "Semoga di umur kamu yang baru ini, hati kamu semakin tenang dalam menjalani apapun yang datang dikehidupan kamu yaa, semoga hal-hal yang terasa berat perlahan menjadi lebih ringan karena kamu ikhlas menjalaninya, dan semoga kamu selalu punya alasan untuk tetap melangkah tanpa kehilangan dirimu sendiri... Semangat selalu yaa!"
    }

];


/* =========================
   DATA FOTO
========================= */

const photos = [

    {
        image: "images/Foto1.jpeg",
        caption: "A nice picture of you. 🤍"
    },

    {
        image: "images/Foto2.jpeg",
        caption: "You looked good in here.. 🌷"
    },

    {
        image: "images/Foto3.jpeg",
        caption: "One of my favorites from these pictures — because of your smile. ✨"
    },

    {
        image: "images/Foto4.jpeg",
        caption: "And one more for your birthday. 🎂"
    }

];


/* =========================
   VARIABEL
========================= */

let wishIndex = 0;
let photoIndex = 0;


/* =========================
   ELEMEN
========================= */

const cover =
    document.getElementById("cover");

const letter =
    document.getElementById("letter");

const content =
    document.getElementById("content");

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");


/* =========================
   BUKA UCAPAN
========================= */

function openLetter() {

    cover.classList.add("hidden");

    letter.classList.remove("hidden");

    wishIndex = 0;

    photoIndex = 0;

    showBirthday();

    music.volume = 0.45;

    music.play().catch(function() {
        console.log("Musik menunggu interaksi.");
    });

    musicButton.innerText = "Ⅱ";

    window.scrollTo(0, 0);
}


/* =========================
   UCAPAN
========================= */

function showBirthday() {

    content.innerHTML = `

        <div class="eyebrow">
            A BIRTHDAY NOTE FOR YOU
        </div>

        <h2>
            Selamat Ulang Tahun.... 💐
        </h2>

        <p class="message">
            Hari ini umur kamu bertambah satu tahun. 
            Welcome to your 20th!🌷\n
            
        </p>

        <p class="message">
            Semoga di tahun yang baru ini membawa banyak sekali hal baik yang menghampiri kamu
            dan menjadi awal dari banyaknya hal-hal yang lebih indah yaa...
        </p>

        <div class="next">

            <button onclick="showWish()">
                Open next 🤍
            </button>

        </div>

    `;

    resetAnimation();
}


/* =========================
   DOA
========================= */

function showWish() {

    if (wishIndex >= wishes.length) {

        showPhotoIntro();

        return;
    }


    const wish =
        wishes[wishIndex];

    wishIndex++;


    content.innerHTML = `

        <div class="eyebrow">
            SOME WISHES
        </div>

        <h2>
            Wishes for... ✨
        </h2>

        <div class="wish">

            <b>
                ${wish.icon}
                ${wish.title}
            </b>

            <p>
                ${wish.text}
            </p>

        </div>

        <div class="next">

            <button onclick="showWish()">

                ${
                    wishIndex < wishes.length
                    ? "Next →"
                    : "Continue →"
                }

            </button>

        </div>

    `;

    resetAnimation();
}


/* =========================
   PEMBUKA FOTO
========================= */

function showPhotoIntro() {

    photoIndex = 0;

    content.innerHTML = `

        <div class="eyebrow">
            A FEW MEMORIES
        </div>

        <h2>
            Little Pieces Of You 📸
        </h2>

        <p class="message">
            Terlihat Sederhana, Hanya beberapa foto.
            Tapi entah kenapa, rasanya ada sesuatu
            yang ingin aku simpan dari ini semua.
        </p>

        <div class="next">

            <button onclick="showPhoto()">
                One by One 📸
            </button>

        </div>

    `;

    resetAnimation();
}


/* =========================
   FOTO SATU PER SATU
========================= */

function showPhoto() {

    if (photoIndex >= photos.length) {

        showNote();

        return;
    }


    const photo =
        photos[photoIndex];

    photoIndex++;


    content.innerHTML = `

        <div class="eyebrow">
            A LITTLE MEMORY
        </div>

        <h2>
            ${photoIndex} / ${photos.length}
        </h2>

        <div class="photo">

            <img
                src="${photo.image}"
                alt="Foto ${photoIndex}"
            >

            <p>
                ${photo.caption}
            </p>

        </div>

        <div class="next">

            <button onclick="showPhoto()">

                ${
                    photoIndex < photos.length
                    ? "Next 📸"
                    : "Continue 🤍"
                }

            </button>

        </div>

    `;

    resetAnimation();
}


/* =========================
   CATATAN
========================= */

function showNote() {

    content.innerHTML = `

        <div class="eyebrow">
            A LITTLE NOTE
        </div>

        <h2>
            ♡ A little note for you ♡
        </h2>

        <div class="note">

            <p>
                Aku sebenernya bingung mau nulis apa untuk disiniii, kaya banyak banget yang mau aku sampaikan ke kamu,
                tapi kan nggak mungkin semuanya aku tulis disinii hehe...
            </p>

            <p>
                Aku mau ucapin suatu hal, yaitu aku mau bilang terimakasih banyak sama kamu atas waktu, cerita, canda tawa, dan hal-hal yang menyenangkan dari yang paling sederhana hingga best moment yang kita punyaa.
                terlepas dari bagaimana semuanya sekarang, aku tetap senang pernah kenal lebih dekat sama kamu dan pernah punya cerita sama kamunyaa
            </p>

            <p>
                Mungkin sekarang ada banyak banget hal yang udah berubah dikita, dan mungkin akhir-akhir ini perjalanan kita juga nggak lagi sama kaya dulu. 
                Tapi bukan berarti seluruh hal baik yang pernah ada itu harus dilupakan begitu aja kan yaa?
            </p>

            <p>
                Aku masih nyimpan rasa sayang ini dengan caraku sendiri lohh.. bukan untuk meminta apa-apa, 
                bukan juga untuk membuat kamu harus melakukan sesuatu. Aku cuma mau jujur, karena kamu pernah mejadi seseorang yang berarti di hidupnya aku dan kamu perlu tau satu hal, sampai sekarang pun aku masih sayang sama kamu...
            </p>

            <p>
                SELAMAT ULANG TAHUN YANG KE-20 yaa🎂🤍
            </p>

            <p>
                Semoga hari ini menjadi hari yang menyenangkan untuk kamu... Nikmati hari spesial kamu ini yaa...
            </p>
            <div class="closing">
                Enjoy for your birthday 💐
            </div>

            <div class="signature">
                Fikri Hidayat Pulungan 🤍
            </div>

        </div>

        <div class="next">

            <button onclick="showEnding()">
                One last thing →
            </button>

        </div>

    `;

    resetAnimation();
}


/* =========================
   PENUTUP
========================= */

function showEnding() {

    content.innerHTML = `

        <div class="ending">

            <div class="ending-flower">
                🎂🌷
            </div>

            <small>
                ONE LAST THING!
            </small>

            <h2>
                Take care of yourself, okay?.
            </h2>

            <p>
                Jangan lupa menikmati seluruh moment 
                yang hadir di tahun kamu ini yaa.
                
            </p>

            <p> 
                once again, happy birthday to you...🤍

            </p>

            <span>
                Amiin ya rabbal 'alamiin 🤍
            </span>
            
            <span>
                — ibda sari 
            </span>

        </div>

    `;

    resetAnimation();
}


/* =========================
   ANIMASI
========================= */

function resetAnimation() {

    content.style.animation = "none";

    void content.offsetWidth;

    content.style.animation =
        "appear 0.6s ease";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   MUSIK
========================= */

function toggleMusic() {

    if (music.paused) {

        music.play();

        musicButton.innerText = "Ⅱ";

    } else {

        music.pause();

        musicButton.innerText = "▶";

    }
}