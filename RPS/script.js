var rock = document.getElementById(`rock`);
var paper = document.getElementById(`paper`);
var scissor = document.getElementById(`scissor`);
var resultaat = document.getElementById(`resultaat`);
var tussenstand = document.getElementById(`tussenstand`);
var button = document.getElementById(`button`);
var choose = document.getElementById(`choose`);
var pc; // mijn keuze om rock paper en scissor als nummer op te slaan heb ik later spijt van gehad, maar zou veel moeten herschrijven 
var keuze;
var spelerJuist = 0;
var pcJuist = 0;
// steen = 0;  
// papier = 1; 
// schaar = 2;
document.getElementById(`scoreSpeler`).innerHTML = spelerJuist;
document.getElementById(`scorePc`).innerHTML = pcJuist;

rock.addEventListener("click", function () { vergelijk(0); })
paper.addEventListener("click", function () { vergelijk(1); })
scissor.addEventListener("click", function () { vergelijk(2); })
button.addEventListener("click", function () { reset(); })
var keuzePc = () => {
   pc = Math.floor(Math.random() * 3);
}

function vergelijk(waarde) {
   keuze = waarde;
   keuzePc();
   if (pc == keuze) {
      draw();
   }
   switch (pc) {
      case 0:
         if (keuze == 1) { spelerWin() }
         if (keuze == 2) { spelerLoss() }
         break;

      case 1:
         if (keuze == 2) { spelerWin() }
         if (keuze == 0) { spelerLoss() }
         break;

      case 2:
         if (keuze == 0) { spelerWin() }
         if (keuze == 1) { spelerLoss() }
         break;
   }
}

function spelerWin() {
   spelerJuist++;
   updateScoreboard();
   update();
   if (spelerJuist == 3) {
      resultaat.innerHTML = `You Win!`;
      end();
   }
}

function spelerLoss() {
   pcJuist++;
   updateScoreboard();
   update();
   if (pcJuist == 3) {
      resultaat.innerHTML = `You Lose!`;
      end();
   }
}

function draw() {
   //go again
   updateScoreboard();
   update();
}

function reset() {
   spelerJuist = 0;
   pcJuist = 0;
}

function updateScoreboard() {
   document.getElementById(`scoreSpeler`).innerHTML = spelerJuist;
   document.getElementById(`scorePc`).innerHTML = pcJuist;
}

function update() {
   if (keuze == 0) { keuze = "Rock" }
   if (keuze == 1) { keuze = "Paper" }
   if (keuze == 2) { keuze = "Scissors" }

   if (pc == 0) { pc = "Rock" }
   if (pc == 1) { pc = "Paper" }
   if (pc == 2) { pc = "Scissors" }

   tussenstand.innerHTML = `You chose ` + keuze + `, pc chose ` + pc;
}

function end() {
   choose.classList.add("hidden");
   button.classList.remove("hidden");
}
function reset() {
   choose.classList.remove("hidden");
   button.classList.add("hidden");
   spelerJuist = 0;
   pcJuist = 0;
   tussenstand.innerHTML = "";
   resultaat.innerHTML = "";
   updateScoreboard();
}