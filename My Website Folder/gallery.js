
/*
    GALLERY.JS
    Shared gallery for all video game franchise pages.
*/

const franchises = {

    // SONIC THE HEDGEHOG
    sonic: {
        title: "Sonic the Hedgehog",
        characters: [
            {
                name: "Sonic",
                id: "sonic",
                game: "Sonic Frontiers",
                image: "https://www.smashbros.com/assets_v2/img/fighter/sonic/main.png"
            },
            {
                name: "Tails",
                id: "tails",
                game: "Sonic Adventure 2",
                image: "https://media.sonic-city.net/2026/03/Sonic-Racing-CrossWorlds-Tails.webp"
            },
            {
                name: "Knuckles",
                id: "knuckles",
                game: "Sonic Adventure 2",
                image: "https://static.wikia.nocookie.net/vsbattles/images/5/5d/Frontiers_Knuckles.png/revision/latest?cb=20221126215032"
            },
            {
                name: "Amy Rose",
                id: "amy",
                game: "Sonic Adventure",
                image: "https://static.wikia.nocookie.net/sonic/images/1/12/SRCAmy.png/revision/latest/scale-to-width-down/1200?cb=20250826092335"
            },
            {
                name: "Shadow",
                id: "shadow",
                game: "Sonic Adventure 2",
                image: "https://static.wikia.nocookie.net/sonic/images/4/45/SRCShadow.png/revision/latest/thumbnail/width/360/height/360?cb=20251008005300"
            },
            {
                name: "Silver",
                id: "silver",
                game: "Sonic the Hedgehog (2006)",
                image: "https://static.wikia.nocookie.net/sonic/images/5/50/SRCWSilver.png/revision/latest?cb=20250917063526"
            },
            {
                name: "Dr. Eggman",
                id: "eggman",
                game: "Sonic the Hedgehog",
                image: "https://mario.wiki.gallery/images/2/29/SSBU_Dr._Eggman_Spirit.png"
            }
        ]
    },

    // MARIO
    mario: {
        title: "Mario",
        characters: [
            { name: "Mario", id: "mario", game: "Super Mario Bros." },
            { name: "Luigi", id: "luigi", game: "Luigi's Mansion" },
            { name: "Princess Peach", id: "peach", game: "Super Mario Bros." },
            { name: "Bowser", id: "bowser", game: "Super Mario Bros." },
            { name: "Yoshi", id: "yoshi", game: "Super Mario World" },
            { name: "Donkey Kong", id: "donkey_kong", game: "Donkey Kong" }
        ]
    },

    // THE LEGEND OF ZELDA
    zelda: {
        title: "The Legend of Zelda",
        characters: [
            { name: "Link", id: "link", game: "Breath of the Wild" },
            { name: "Princess Zelda", id: "zelda", game: "Tears of the Kingdom" },
            { name: "Ganondorf", id: "ganondorf", game: "Ocarina of Time" },
            { name: "Young Link", id: "young_link", game: "Majora's Mask" },
            { name: "Toon Link", id: "toon_link", game: "The Wind Waker" }
        ]
    },

    // POKEMON
    pokemon: {
        title: "Pokemon",
        characters: [
            { name: "Pikachu", id: "pikachu", game: "Pokemon Red and Blue" },
            {
                name: "Charizard",
                id: "charizard",
                game: "Pokemon Red and Blue",
                image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
            },
            { name: "Mewtwo", id: "mewtwo", game: "Pokemon Red and Blue" },
            { name: "Jigglypuff", id: "jigglypuff", game: "Pokemon Red and Blue" },
            { name: "Lucario", id: "lucario", game: "Pokemon Diamond and Pearl" },
            { name: "Greninja", id: "greninja", game: "Pokemon X and Y" }
        ]
    },

    // KIRBY
    kirby: {
        title: "Kirby",
        characters: [
            { name: "Kirby", id: "kirby", game: "Kirby's Dream Land" },
            { name: "King Dedede", id: "dedede", game: "Kirby's Dream Land" },
            {
                name: "Meta Knight",
                id: "metaknight",
                game: "Kirby Super Star",
                image: "https://static.wikia.nocookie.net/kirby/images/0/03/MetaKnightAirRidersRender.png/revision/latest?cb=20250819200945&path-prefix=en"
            }
        ]
    },

    // METROID
    metroid: {
        title: "Metroid",
        characters: [
            { name: "Samus", id: "samus", game: "Metroid" },
            {
                name: "Zero Suit Samus",
                id: "zerosuit_samus",
                game: "Metroid: Zero Mission",
                image: "https://static.wikia.nocookie.net/ssb/images/1/17/Zero_Suit_Samus_-_Super_Smash_Bros._Ultimate.png/revision/latest/scale-to-width-down/1200?cb=20180612205518"
            },
            { name: "Dark Samus", id: "dark_samus", game: "Metroid Prime 2: Echoes" },
            { name: "Ridley", id: "ridley", game: "Metroid" }
        ]
    },

    // DONKEY KONG
    donkeykong: {
        title: "Donkey Kong",
        characters: [
            { name: "Donkey Kong", id: "donkey_kong", game: "Donkey Kong Country" },
            { name: "Diddy Kong", id: "diddy_kong", game: "Donkey Kong Country" },
            { name: "King K. Rool", id: "king_k_rool", game: "Donkey Kong Country" }
        ]
    }

};


// WAIT FOR PAGE TO LOAD
document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.getElementById("gallery");

    if (!gallery) return;

    const series = document.body.dataset.series;
    const franchise = franchises[series];

    if (!franchise) {
        gallery.innerHTML = "<p>Gallery not found. Check your data-series value.</p>";
        return;
    }

    gallery.innerHTML = "";

    // CREATE IMAGE VIEWER
    let modal = document.getElementById("imageModal");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "imageModal";
        modal.className = "image-modal";

        modal.innerHTML = `
            <button class="modal-close" type="button">&times;</button>

            <figure class="modal-content">
                <img id="modalImage" alt="">
                <figcaption id="modalCaption"></figcaption>
            </figure>
        `;

        document.body.appendChild(modal);
    }

    const modalImage = modal.querySelector("#modalImage");
    const modalCaption = modal.querySelector("#modalCaption");
    const closeButton = modal.querySelector(".modal-close");

    // MODAL STYLING
    if (!document.getElementById("gallery-modal-styles")) {

        const style = document.createElement("style");

        style.id = "gallery-modal-styles";

        style.textContent = `
            .image-modal {
                display: none;
                position: fixed;
                z-index: 9999;
                inset: 0;
                padding: 30px 16px;
                background: rgba(0, 0, 0, 0.92);
                align-items: center;
                justify-content: center;
            }

            .image-modal.is-open {
                display: flex;
            }

            .modal-content {
                margin: 0;
                max-width: 900px;
                max-height: 85vh;
                text-align: center;
            }

            .modal-content img {
                display: block;
                max-width: 90vw;
                max-height: 75vh;
                object-fit: contain;
                margin: auto;
            }

            .modal-content figcaption {
                color: white;
                margin-top: 12px;
                font-size: 18px;
            }

            .modal-close {
                position: absolute;
                top: 14px;
                right: 24px;
                border: none;
                background: transparent;
                color: white;
                font-size: 42px;
                cursor: pointer;
            }
        `;

        document.head.appendChild(style);
    }


    // OPEN IMAGE VIEWER
    function openModal(src, caption) {

        modalImage.src = src;
        modalImage.alt = caption;
        modalCaption.textContent = caption;

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
    }


    // CLOSE IMAGE VIEWER
    function closeModal() {

        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");

        modalImage.removeAttribute("src");
    }


    // CREATE CHARACTER GALLERY CARDS
    franchise.characters.forEach(function (character) {

        const card = document.createElement("article");
        card.className = "card";

        const image = document.createElement("img");

        // USE CUSTOM IMAGE OR CHARACTER IMAGE
        image.src = character.image
            ? character.image
            : `https://www.smashbros.com/assets_v2/img/fighter/${character.id}/main.png`;

        image.alt = character.name;
        image.loading = "lazy";

        // IMAGE FALLBACK
        image.onerror = function () {

            this.onerror = null;

            this.src =
                "https://placehold.co/600x400/222/ffffff?text=" +
                encodeURIComponent(character.name);
        };


        // OPEN IMAGE WHEN CLICKED
        image.addEventListener("click", function () {

            openModal(
                image.src,
                character.name + " — " + character.game
            );

        });


        // CHARACTER INFORMATION
        const details = document.createElement("div");
        details.className = "card-info";

        const heading = document.createElement("h2");
        heading.textContent = character.name;

        const game = document.createElement("p");
        game.textContent = "Featured game: " + character.game;

        details.appendChild(heading);
        details.appendChild(game);

        card.appendChild(image);
        card.appendChild(details);

        gallery.appendChild(card);

    });


    // CLOSE BUTTON
    closeButton.addEventListener("click", closeModal);


    // CLOSE WHEN CLICKING OUTSIDE IMAGE
    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            closeModal();
        }

    });


    // CLOSE WITH ESCAPE KEY
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeModal();
        }

    });

});
