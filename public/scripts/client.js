// 1️ SELECTEREN VAN HTML ELEMENTEN

// We pakken de zoekbalk uit de HTML via het ID
const zoekbalk = document.getElementById("mijnZoekbalk");

// We pakken alle studenten behalve de melding
const studenten = document.querySelectorAll(".student-list ul li:not(#geenResultaat)");

// We pakken de melding
const melding = document.getElementById("geenResultaat");


// 2️ LUISTEREN NAAR INPUT

zoekbalk.addEventListener("input", function () {

  // We halen de waarde uit de zoekbalk
  const zoekTerm = zoekbalk.value.toLowerCase().trim();

  // Als de zoekbalk leeg is → alles tonen en melding verbergen
  if (zoekTerm === "") {

    studenten.forEach(function (student) {
      student.hidden = false;
    });

    melding.hidden = true;
    return;
  }

  // We checken of er een match is
  let matchGevonden = false;

  studenten.forEach(function (student) {

    const naam = student.innerText.toLowerCase();

    if (naam.includes(zoekTerm)) {
      student.hidden = false;
      matchGevonden = true;
    } else {
      student.hidden = true;
    }

  });

  // Toon melding als er geen match is
  melding.hidden = matchGevonden;

});
