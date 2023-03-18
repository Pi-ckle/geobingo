// Ouverture du popup:
window.addEventListener("load", function(){  // Au chargement de la page:
    setTimeout(function open(event){
        document.querySelector(".popup").style.display = "block"; // On affiche la class popup comme un bloc
    },0);
});

// Fermeture lors du click:
document.querySelector("#close").addEventListener("click", function(){ // Lorsqu'on click sur le bouton d'id close:
    document.querySelector(".popup").style.display = "none"; // On met plus de display au bloc de class popup
});



let elements = [
    "BREXIT",
    "WORLDOMETER",
    "MOVE TO FRANCE",
    "THE BAGGIES",
    "GOOD STUFF",
    "TRUMP",
    "ANGLOPHONE STYLE OF LEARNING",
    "GUESSING A WORD",
    "FORMER TROISIÈMES",
    "WHICH GROUP WAS IT WITH?",
    "CONNECTIONS TO OTHER UNITS",
    "BFI GOLD",
    "TERMINAL COURSE",
    "AMERICAN SPELLING",
    "ESPN",
    "CAN'T SPELL",
    "LITTLE BIT OF HISTORY",
    "MIDDLE AGE BRAIN",
    "TNCs",
    "YOU TAUGHT ME SOMETHING",
    "YOU ARE REAL GEOGRAPHERS NOW",
    "HIS FAMILY",
    "COMMENT ABOUT VINCENT",
    "FILTHY CITIES",
    "LONDON",
    "MAKE NOTE OF A SLIDE NUMBER",
    "THE GUARDIAN",
    "THE FUTURE WORRIES ME",
    "GOOGLE MAPS",
    "SMIRK AT BINGO CARD PHRASE",
    "GOES TO THE BOARD THROUGH THE HALLWAY",
    "SIXIÈME CURRICULUM",
    "YOU SEE HOW ITS ALL COMING TOGETHER",
    "IMAGINE IF YOU SAW THAT AT THE START OF THE YEAR"
]

let l1 = 0
let l2 = 0
let l3 = 1
let l4 = 0
let l5 = 0

let c1 = 0
let c2 = 0
let c3 = 1
let c4 = 0
let c5 = 0

let d1 = 1
let d2 = 1

let lignes = 0

document.getElementById("score").innerHTML = lignes;

//Fonction mélangeant le tableau tab //
function melange(tab) {
	for (let i=0; i<tab.length; i++)
	{
		let j = i + Math.floor(Math.random() * (tab.length - i));
        [tab[i], tab[j]] = [tab[j], tab[i]] ;
	}
	return tab;
}

function initialise(tab) {
    for (i=0; i<24; i++)
	{

		document.getElementById(i+1).innerHTML = tab[i];
	}
}

function turn(i) {
    id = i.getAttribute("num")
    if (i.getAttribute("flip") == "0") {
        if (["1","2","3","4","5"].includes(id)) {
            l1 += 1
        }
        if (["6","7","8","9","10"].includes(id)) {
            l2 += 1
        }
        if (["11","12","13","14"].includes(id)) {
            l3 += 1
        }
        if (["15","16","17","18","19"].includes(id)) {
            l4 += 1
        }
        if (["20","21","22","23","24"].includes(id)) {
            l5 += 1
        }

        if (["1","6","11","15","20"].includes(id)) {
            c1 += 1
        }
        if (["2","7","12","16","21"].includes(id)) {
            c2 += 1
        }
        if (["3","8","17","22"].includes(id)) {
            c3 += 1
        }
        if (["4","9","13","18","23"].includes(id)) {
            c4 += 1
        }
        if (["5","10","14","19","24"].includes(id)) {
            c5 += 1
        }

        if (["1","7","19","24"].includes(id)) {
            d1 += 1
        }
        if (["5","9","16","20"].includes(id)) {
            d2 += 1
        }

        i.setAttribute("flip", "1");
        var element = document.getElementById(id);
        element.classList.add("clic");
    }
    else {
        if (["1","2","3","4","5"].includes(id)) {
            l1 -= 1
        }
        if (["6","7","8","9","10"].includes(id)) {
            l2 -= 1
        }
        if (["11","12","13","14"].includes(id)) {
            l3 -= 1
        }
        if (["15","16","17","18","19"].includes(id)) {
            l4 -= 1
        }
        if (["20","21","22","23","24"].includes(id)) {
            l5 -= 1
        }

        if (["1","6","11","15","20"].includes(id)) {
            c1 -= 1
        }
        if (["2","7","12","16","21"].includes(id)) {
            c2 -= 1
        }
        if (["3","8","17","22"].includes(id)) {
            c3 -= 1
        }
        if (["4","9","13","18","23"].includes(id)) {
            c4 -= 1
        }
        if (["5","10","14","19","24"].includes(id)) {
            c5 -= 1
        }

        if (["1","7","19","24"].includes(id)) {
            d1 -= 1
        }
        if (["5","9","16","20"].includes(id)) {
            d2 -= 1
        }

        i.setAttribute("flip", "0");
        var element = document.getElementById(id);
        element.classList.remove("clic");
    }
    score();
}

function main() {
    tab = melange(elements)
    initialise(tab)
}

function score() {
    lignes = (d2 - d2%5)/5 + (d1 - d1%5)/5 + (c5 - c5%5)/5 + (c4 - c4%5)/5 + (c3 - c3%5)/5 + (c2 - c2%5)/5 + (c1 - c1%5)/5 + (l1 - l1%5)/5 + (l2 - l2%5)/5 +(l3 - l3%5)/5 +(l4 - l4%5)/5 + (l5 - l5%5)/5;
    document.getElementById("score").innerHTML = lignes;
}
main()
