document.addEventListener("DOMContentLoaded", () => {
   const canvas = document.getElementById("canvas");
   const ctx    = canvas.getContext("2d");
   const img    = document.getElementById("pig-source");

   console.log("✅ script.js geladen");

 
   let hunger = 5, laune = 5, alter = 0;
   const hungerBar = document.getElementById("hunger-bar");
   const launeBar  = document.getElementById("laune-bar");
   const alterWert = document.getElementById("alter-wert");
 
   // Funktion, die startet, wenn das Bild sicher verfügbar ist
   function startAnimation() {
     console.log("🐷 Bild geladen:", img.naturalWidth, "×", img.naturalHeight);
     requestAnimationFrame(animate);
   }
 
   // Wenn Bild im Cache und schon geladen, sofort starten
   if (img.complete && img.naturalWidth !== 0) {
     startAnimation();
   } else {
     img.onload = startAnimation;
     img.onerror = () => console.error("Fehler beim Laden des Bildes:", img.src);
   }
 
   function draw() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     const x = (canvas.width  - img.width)  / 2;
     const y = (canvas.height - img.height) / 2;
     ctx.drawImage(img, x, y);
   }
 
   function updateUI() {
     hungerBar.style.width = (hunger * 10) + "%";
     launeBar.style.width  = (laune  * 10) + "%";
     alterWert.textContent = alter + " Tage";
   }
 
   function animate() {
     draw();
     updateUI();
     requestAnimationFrame(animate);
   }
 
   window.fuettern = () => {
     hunger = Math.max(0, hunger - 2);
     laune  = Math.min(10, laune + 1);
   };
   window.spielen = () => {
     laune  = Math.min(10, laune + 2);
     hunger = Math.min(10, hunger + 1);
   };
 });
 