let elements = [
    "BREXIT",
    "HIS FAMILY",
    "MIDDLE AGE BRAIN",
    "WORLDOMETER",
    "CAN'T SPELL",
    "ESPN",
    "MOVE TO FRANCE",
    "GOOD STUFF",
    "ANGLOPHONE STYLE OF LEARNING",
    "TNC's",
    "THE BAGGIES",
    "LITTLE BIT OF HISTORY",
    "GUESSING THE WORD",
    "TRUMP",
    "IS IT WITH YOU OR THE OTHER GROUP?",
    "BFI GOLD",
    "BRITISH SCHOOL ANECDOTE",
    "FORMER 3ère / FORM GROUP",
]

let l1 = 0
let l2 = 0
let l3 = 1
let l4 = 0
let l5 = 0
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
    lignes = (l1 - l1%5)/5 + (l2 - l2%5)/5 +(l3 - l3%5)/5 +(l4 - l4%5)/5 + (l5 - l5%5)/5;
    console.log(typeof(lignes));
    document.getElementById("score").innerHTML = lignes;
}
main()
