<html>
    <head>
        <title>AP Human Geography Bingo</title>
        <meta charset = "utf-8">
        <style>
body {
    font-size: xx-large;
    color: black;
    text-align: center;
    margin-top:20px;
}

h1,h2 {
        font-size: 1cm;
}

h1 {
    margin-top:10px;
}

table {
        padding:3px;
        width: 80%;
        height: 70%;
        margin: auto;
        border-spacing: 5px;
        border-collapse: separate;
}

#free {
        background-color: lightgreen;
}


td {
        width: 20%;
        text-align: center;
        display:block;
	    border:1px solid #000;
	    border-radius:10px;
	    padding:3px;

        cursor: pointer;
        outline: none;
        transition: 0.2s all;
}


td:active {
    transform: scale(0.90);
}


.clic {
    background-color:darkseagreen;
}

#score_box {
    margin-top:10px;
    display:block;
    border:1px solid #000;
    border-radius:10px;
    width:90%;
    margin-left:auto;
    margin-right:auto;
}



/* Popup window */

.popup{
    background-color: #ffffff;
    padding: 30px 40px;
    position: fixed;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    border-radius: 8px;
    display: none;
    text-align: center;
    border:2px solid #000;
    width:50%;
}


.popup button{ /* Style du bouton de fermeture */
    display: block;
    font-size: 30px;
    color: #ffffff;
    background: #03549a;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    float:right;
    cursor: pointer; /* Change la souris sur hover */
}

.popup p {
    text-align:center;
}

.popup img {
    width:100%;
}



.mode_block {
    text-align:center;
}


.ligne {
      display:inline-block;
      vertical-align: middle;
}

.boutons  {
    /* Style texte */
    color: black;
    text-transform: uppercase;
    text-align:center;
    text-decoration: none;
    /* Style bouton */
    background-color: #fff;
    display: block;
    padding: 10px 20px;
    border:1px solid #000;
    border-radius: 50px; /* Arrondi les cotés */

}


.boutons:hover {
    background-color: lightgreen;
    color: white;
}


.boutons:active {
    color:black;
    background-color:yellow;
}


        </style>
    </head>
    <body>

        <div class="popup">
            <button id="close">&times;</button>
            <h2>Valid Combinations:</h2>
            <img src="combinations.png">
        </div>

        <div>
            <h1>Welcome to the AP Geo bingo!</h1>
        </div>

        <div id="zoomtext">
            <table id="tableau">
                <tr>
                    <td flip="0" onclick="turn(this)" num="1" id="1">hi</td>
                    <td flip="0" onclick="turn(this)" num="2" id="2">hi</td>
                    <td flip="0" onclick="turn(this)" num="3" id="3">hi</td>
                    <td flip="0" onclick="turn(this)" num="4" id="4">hi</td>
                    <td flip="0" onclick="turn(this)" num="5" id="5">hi</td>
                </tr>
                <tr>
                    <td flip="0" onclick="turn(this)" num="6" id="6">hi</td>
                    <td flip="0" onclick="turn(this)" num="7" id="7">hi</td>
                    <td flip="0" onclick="turn(this)" num="8" id="8">hi</td>
                    <td flip="0" onclick="turn(this)" num="9" id="9">hi</td>
                    <td flip="0" onclick="turn(this)" num="10" id="10">hi</td>
                </tr>
                <tr>
                    <td flip="0" onclick="turn(this)" num="11" id="11">hi</td>
                    <td flip="0" onclick="turn(this)" num="12" id="12">hi</td>
                    <td id ='free'>FREE</td>
                    <td flip="0" onclick="turn(this)" num="13" id="13">hi</td>
                    <td flip="0" onclick="turn(this)" num="14" id="14">hi</td>
                </tr>
                <tr>
                    <td flip="0" onclick="turn(this)" num="15" id="15">hi</td>
                    <td flip="0" onclick="turn(this)" num="16" id="16">hi</td>
                    <td flip="0" onclick="turn(this)" num="17" id="17">hi</td>
                    <td flip="0" onclick="turn(this)" num="18" id="18">hi</td>
                    <td flip="0" onclick="turn(this)" num="19" id="19">hi</td>
                </tr>
                <tr>
                    <td flip="0" onclick="turn(this)" num="20" id="20">hi</td>
                    <td flip="0" onclick="turn(this)" num="21" id="21">hi</td>
                    <td flip="0" onclick="turn(this)" num="22" id="22">hi</td>
                    <td flip="0" onclick="turn(this)" num="23" id="23">hi</td>
                    <td flip="0" onclick="turn(this)" num="24" id="24">hi</td>
                </tr>
            </table>
        </div>

        <div class="mode_block">
            <div class="ligne">
                <button id="zoomOut" class="boutons">-</button>
            </div>
            <div class="ligne">
                <button id="zoomIn" class="boutons">+</button>
            </div>
            <div class="ligne">
                <button onclick="pop(this)" class="boutons" id="rules">Rules</button>
            </div>
            <div class="ligne">
                <h3>You have <span id="score"></span> points</h3>
            </div>
	    </div>



    <script>
// Ouverture du popup:
function pop(){  // Au chargement de la page:
    document.querySelector(".popup").style.display = "block"; // On affiche la class popup comme un bloc
};

// Fermeture lors du click:
document.querySelector("#close").addEventListener("click", function(){ // Lorsqu'on click sur le bouton d'id close:
    document.querySelector(".popup").style.display = "none"; // On met plus de display au bloc de class popup
});

document.querySelector("#zoomOut").addEventListener("click", function(){ // Lorsqu'on click sur le bouton d'id close:
    document.getElementById("rules").style.display = "none"; // On met plus de display au bloc de class popup
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
    "TERMINALE COURSE",
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

// Ajustement de la taille du plateau de jeu:

var zoom = 1; // Zoom par défaut
var zoomStep = 0.1; // Chaque click change le zoom de zoomStep

document.getElementById("zoomIn").addEventListener("click", function() { // Au clic du bouton d'id zoomIn
    if (zoom + zoomStep <= 1) { // Si l'on rajoute pas cette condition, le zoom peut rester figé
        zoom += zoomStep; // Le zoom augmente de zoomStep a chaque clic
        document.getElementById("zoomtext").style.transform = "scale(" + zoom + ")";
    }
});

document.getElementById("zoomOut").addEventListener("click", function() { // Au clic du bouton d'id zoomOut:
    if (zoom - zoomStep >= zoomStep) { // Pour être sur que l'utilisateur ne peut pas zoomer trop loin
        zoom -= zoomStep; // Le zoom diminue de zoomStep a chaque clic
        document.getElementById("zoomtext").style.transform = "scale(" + zoom + ")";
    }
});

    </script>

    </body>
</html>

