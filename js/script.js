document.addEventListener("DOMContentLoaded", function() {

      //Grundgerüst für Bono
   let hunger = 5;
   let laune = 5;
   let alter = 0;


   const canvas =document.getElementById("canvas");
   const ctx = canvas.getContext("2d");

      
      //UI-Elemente für Statusanzeige
  const hungerBar = document.getElementById("hunger-bar"); 
  const launeBar = document.getElementById("laune-bar"); 
  const alterWert = document.getElementById("alter-wert"); 

    
  //Animationen 
let animationFrame;
let bewegungX = 0;
let bewegungY = 0;
let bewegungsRichtung = 1;


   // SVG in Canvas zeichnen 
function drawBono() {
   
   //Canvas leeren 
   ctx.clearRect(0,0, canvas.clientWidth, canvas.height);


   //Farben 
   const fellFarbe = "#8d5524";
   const hautFarbe = '#f3d19c';


   //Größenberechnung - Alter 
   const groesseFaktor = 0.8 + (alter*0.05);
   const zentrum = {
      x: canvas.width / 2 + bewegungX, 
      y:canvas.height / 2 + bewegungY 

   };


   //Kopf 
ctx.beginPath();    
ctx.arc(zentrum.x, zentrum.y - 70 * groesseFaktor, 50 * groesseFaktor, 0, Math.PI * 2);
ctx.fillStyle = fellFarbe;
ctx.fill();

   // Ohren 
   //Links außen

   ctx.beginPath();    
   ctx.arc(zentrum.x - 50 * groesseFaktor, zentrum.y - 70 * groesseFaktor, 20 * groesseFaktor, 0, Math.PI * 2);
   ctx.fillStyle = fellFarbe;
   ctx.fill();

   //Rechts außen 
   ctx.beginPath();    
   ctx.arc(zentrum.x - 50 * groesseFaktor, zentrum.y - 70 * groesseFaktor, 20 * groesseFaktor, 0, Math.PI * 2);
   ctx.fillStyle = fellFarbe;
   ctx.fill();


   //links innen 
   ctx.beginPath();    
   ctx.arc(zentrum.x - 50 * groesseFaktor, zentrum.y - 70 * groesseFaktor, 15 * groesseFaktor, 0, Math.PI * 2);
   ctx.fillStyle = fellFarbe;
   ctx.fill();

   //rechts innen
   ctx.beginPath();    
   ctx.arc(zentrum.x - 50 * groesseFaktor, zentrum.y - 70 * groesseFaktor, 15 * groesseFaktor, 0, Math.PI * 2);
   ctx.fillStyle = fellFarbe;
   ctx.fill();



   //Gesicht 
   ctx.moveTo(zentrum.x - 50 * groesseFaktor, zentrum.y - 70 * groesseFaktor);
   ctx.quadraticCurveTo(zentrum.x, zentrum.y, zentrum.x + 50 * groesseFaktor, zentrum.y - 70 * groesseFaktor );
   ctx.quadraticCurveTo(zentrum.x, zentrum.y -140 * groesseFaktor, zentrum.x -50 * groesseFaktor,zentrum.y - 70 * groesseFaktor)
   ctx.fillStyle = hautFarbe
   ctx.fill();
}








}
)