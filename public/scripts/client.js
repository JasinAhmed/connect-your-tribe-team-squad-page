// 1️ SELECTEREN VAN HTML ELEMENTEN

// We pakken de zoekbalk uit de HTML via het ID
const zoekbalk = document.getElementById("mijnZoekbalk");

// We pakken alle <li> elementen binnen .student-list
// querySelectorAll geeft een lijst (NodeList) terug
const studenten = document.querySelectorAll(".student-list ul li");

// We pakken het element waar eventueel een melding kan komen
const melding = document.getElementById("geenResultaat");


// 2️ LUISTEREN NAAR INPUT

// We luisteren naar het "input" event
// Dit betekent: elke keer als iemand iets typt in de zoekbalk
zoekbalk.addEventListener("input", function () {


  // 3️ REAGEREN OP DE INPUT

  // We halen de waarde (tekst) uit de zoekbalk
  // toLowerCase() zorgt ervoor dat hoofdletters geen probleem zijn
  const zoekTerm = zoekbalk.value.toLowerCase();

  // Deze variabele gebruiken we om te checken
  // of er minimaal 1 match is gevonden
  let matchGevonden = false;

  // We gaan door elke student in de lijst heen
  studenten.forEach(function (student) {

    // We pakken de tekst van de student
    // Ook hier zetten we alles naar kleine letters
    const naam = student.innerText.toLowerCase();

    // We controleren of de naam de zoekterm bevat
    if (naam.includes(zoekTerm)) {

      // Als er een match is → laten we de student zien
      student.hidden = false;

      // We zetten matchGevonden op true
      matchGevonden = true;

    } else {

      // Geen match → verberg deze student
      student.hidden = true;
    }
  });
});
