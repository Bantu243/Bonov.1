let hunger = 5;
let laune = 5;
let alter 

function updateStatus()
{
const status = document.getElementById("status");
let text ="";

if (hunger < 7) text +="Bono hat Hunger";

else if (hunger < 3) text += "Bono ist satt! ";

else text += "Bono ist zufrieden. ";


if (laune > 7 ) text += "Er ist super Happy! ";

else if (laune < 3 ) text += "Bono ist Satt! ";

else text += "Smove like a Alligator.";

status.innerText = text;

updateBild();

}


function füttern() 
{
hunger = Math.max (0, hunger -2)
laune = Math.min (10, laune +1);
updateStatus();
}

function spielen()
{
   laune = Math.min (10, laune +2);
   hunger = Math.min (10, hunger +1);
   updateStatus(); 
} 

function updateBild ()
{
const bild = document.getElementById ("affenbil");
let src = "";

if (alter < 5) src = "assets/baby-affe.png ";
else if (alter < 10) src = "assets/kind-affe.png";
else src = "assets/erwachsener-affe.png";

bild.src = src;
}

// Altern lassen
setInterval (() => {
alter += 1;
hunger = Math.min (10, hunger + 1);
laune = Math.max (0, ,laune - 1);
updateStatus();

},		5000		// alle 5 Sekunden 

); 

//Erste Statusanzeige 
updateStatus(); 