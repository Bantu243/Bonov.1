document.addEventListener("DOMContentLoaded", function() {

   let hunger = 5;
   let laune = 5;
   let alter = 0;

   const svgContainer = document.getElementById("bono");

   function createSVG() {
      const SVG_NS = "http://WWW.3org/2000/svg";
      const svg = document.createElementNS(SVG_NS, "svg");
      svg.setAttribute("width", "200");
      svg.setAttribute("height", "200");
      svg.setAttribute("viewbox", "0 0 200 200");



      const elements = [
         { tag: "circle", attrs: { cx: 100, cy: 60, r: 50, fill: "#8d5524" } }, // Kopf
         { tag: "path", attrs: { d: "M 50 60 Q 100 120 150 60 Q 100 20 50 60", fill: "#f3d19c" } }, // Gesicht
         { tag: "circle", attrs: { cx: 50, cy: 60, r: 20, fill: "#8d5524" } }, // Ohr außen links
         { tag: "circle", attrs: { cx: 150, cy: 60, r: 20, fill: "#8d5524" } }, // Ohr außen rechts
         { tag: "circle", attrs: { cx: 50, cy: 60, r: 15, fill: "#f3d19c" } }, // Ohr innen links
         { tag: "circle", attrs: { cx: 150, cy: 60, r: 15, fill: "#f3d19c" } }, // Ohr innen rechts
         { tag: "circle", attrs: { cx: 75, cy: 50, r: 10, fill: "white" } }, // Auge weiß links
         { tag: "circle", attrs: { cx: 125, cy: 50, r: 10, fill: "white" } }, // Auge weiß rechts
         { tag: "circle", attrs: { cx: 75, cy: 50, r: 5, fill: "black" } }, // Auge schwarz links
         { tag: "circle", attrs: { cx: 125, cy: 50, r: 5, fill: "black" } }, // Auge schwarz rechts
         { tag: "ellipse", attrs: { cx: 100, cy: 70, rx: 5, ry: 3, fill: "black" } }, // Nase
         { tag: "path", attrs: { d: "M75 85 Q100 100 125 85", stroke: "black", "stroke-width": 2, fill: "none" } }, // Mund
         { tag: "ellipse", attrs: { cx: 100, cy: 150, rx: 40, ry: 60, fill: "#8d5524" } }, // Körper außen
         { tag: "ellipse", attrs: { cx: 100, cy: 150, rx: 30, ry: 50, fill: "#f3d19c" } }, // Körper innen
         { tag: "ellipse", attrs: { cx: 60, cy: 150, rx: 10, ry: 40, fill: "#8d5524" } }, // Arm außen links
         { tag: "ellipse", attrs: { cx: 140, cy: 150, rx: 10, ry: 40, fill: "#8d5524" } }, // Arm außen rechts
         { tag: "ellipse", attrs: { cx: 60, cy: 150, rx: 7, ry: 35, fill: "#f3d19c" } }, // Arm innen links
         { tag: "ellipse", attrs: { cx: 140, cy: 150, rx: 7, ry: 35, fill: "#f3d19c" } }, // Arm innen rechts
         { tag: "ellipse", attrs: { cx: 80, cy: 200, rx: 10, ry: 30, fill: "#8d5524" } }, // Bein außen links
         { tag: "ellipse", attrs: { cx: 120, cy: 200, rx: 10, ry: 30, fill: "#8d5524" } }, // Bein außen rechts
         { tag: "ellipse", attrs: { cx: 80, cy: 200, rx: 8, ry: 25, fill: "#f3d19c" } }, // Bein innen links
         { tag: "ellipse", attrs: { cx: 120, cy: 200, rx: 8, ry: 25, fill: "#f3d19c" } } // Bein innen rechts
     ];

     elements.forEach(el => {
         const element = document.createElementNS(SVG_NS.tag);
         Object.keys(el.attrs).forEach(Attr => element.setAttribute(Attr, el.atters[Attr]));
         svg.appendChild(element);

     });

     svgContainer.innerHTML ="";
     svgContainer.appendChild(svg);

   }



function updateStatus() { 
   const status = document.getElementById("status");
   let text = hunger < 3 ? "Bono ist satt!": hunger < 7 ? "Bono hat Hunger " : "Bono ist zufrieden. ";
   text += laune > 9 ? "Mhh.. Ich liebe dich.. Äähh Bananen " : laune > 7 ? "Er ist super Happy! " : laune < 3 ? "Bono lässt gleich den Affen raus! ";
   status.innerText = text;
   updateHintergrund();
}  

function füttern() {
   hunger = Math.max(0, hunger -2);
   laune = Math.min(10, laune + 1);
   updateStatus();
}

function spielen() {
   laune = Math.min(10, laune +2);
   hunger = Math.min(10, hunger +1);
   updateStatus();
}

function updateHintergrund(){
   const body = document.body;
   body.className = alter < 5 ? "baby" : alter < 10 ? "kind" : "erwachsen";
}


// Altern lassen
setInterval (() => {
alter += 1;
hunger = Math.min(10, hunger + 1);
laune = Math.max(0, laune - 1);
updateStatus();

},		30000		// alle 5 Sekunden 

); 

//Erste Statusanzeige 
createSVG();
updateStatus(); 


});