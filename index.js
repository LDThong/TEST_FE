const contents = [
    {
        id: 1,
        name: "go-karts", 
        path: "image/Banner-1.png",  
        description: "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts",
    },
    { 
        id: 2,
        name: "jumparena", 
        path: "image/Banner-2.png", 
        description: "Aréna se spoustou atrakcí pro děti i dospělé všech věkových kategorií. Trampolíny, lezecká stěna, ninja dráha a další atrakce.",
    },
    {
        id: 3,
        name: "virtual reality", 
        path: "image/Banner-3.png",
        description: "Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie. Vyberte si z naší nabídky her a zažijte VR na vlastní kůži.",
    },
    { 
        id: 4,
        name: "multiball", 
        path: "image/Banner-4.png",
        description: "Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu. Velké množství her zaujme všechny věkové kategorie.",
    },
    { 
        id: 5,
        name: "laser shooting range", 
        path: "image/Banner-5.png",
        description: "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",

    },
];

let number = 0;
let imageBanner = document.querySelector(".Banner");
let Description = document.querySelector(".Description");
let titleName = document.querySelector("#title-banner");

const inputs = document.querySelectorAll('input[name="option"]');
const defaultCheckedRadio = document.querySelector('input[name="option"]:checked');

const showBanner = (id) => {
    for (let i = 0; i < contents.length; i++) {
        if(id === contents[i].id - 1) {
            imageBanner.style.setProperty("--background-image", `url(${contents[i].path})`);
            titleName.textContent = `${contents[i].name}`;
            Description.textContent = `${contents[i].description}`;
        } 
    }
};

if (defaultCheckedRadio) {
    if (defaultCheckedRadio.id === "radio1") {
        showBanner(0);
    }
    inputs.forEach((radio) => {
        radio.addEventListener('change', (event) => {
            for (let i = 0; i < inputs.length; i++) {
                if (event.target.id === inputs[i].id) {
                    showBanner(i);
                }
                
            }
        });
    });
};

