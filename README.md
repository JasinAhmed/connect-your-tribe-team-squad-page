# Squad Page 1J - Vriendenboekje - Team Sunny
In sprint 7 hebben we de opdracht gekregen om met medestudenten een 'Squad Page' te ontwerpen en bouwen met data uit de [FDND Directus](https://fdnd.directus.app/items/person/?fields=id,name,github_handle&filter=%7B%22_and%22:%5B%7B%22squads%22:%7B%22squad_id%22:%7B%22tribe%22:%7B%22name%22:%22FDND%20Jaar%201%22%7D%7D%7D%7D,%7B%22squads%22:%7B%22squad_id%22:%7B%22cohort%22:%222526%22%7D%7D%7D%5D%7D&sort=name) database. Daarnaast hebben we gebruik gemaakt van NodeJS, Express, JSON en Liquid.

De interacties die zijn ontworpen in deze Squad Page zijn een zoekbalk, een sorteer op alfabetische volgorde, een filter op favoriere seizoen en een comment sectie onder elke student als 'User Generated Content'.

Er is rekening gehouden met responsiveness en toegankelijkheid van de website voor eindgebruikers. Door middel een WCAG audit en Color Contrast tests.

#### Wie zijn wij?
Wij zijn drie 1e jaars Frontend Design & Development studenten, Team Sunny. [Jasin Ahmed](https://github.com/JasinAhmed), [Luka Dujakovic](https://github.com/millie8969) en [Sieuwke Sheta](https://github.com/SieuwkeSheta). 

## Inhoudsopgave

* [Beschrijving](#beschrijving)
  * [Filter op favoriete seizoen](#filter-op-favoriete-seizoen)
  * [Zoekbalk](#zoekbalk)
  * [Comments sectie](#comments-sectie)
    
* [Kenmerken](#kenmerken)
  * [Code conventies](#code-conventies)

* [Installatie](#installatie)
 
* [Bronnen](#bronnen)
  
* [Licentie](#licentie)

## Beschrijving
Wij hebben een 'Squad Page' ontworpen en gebouwd met meerdere interacties, waaronder een comments sectie als 'User Generated Content', een index pagina met een lijst van alle studenten en een detailpagina van elke student. 

<img width="800" alt="all-devices-black" src="https://github.com/user-attachments/assets/7d4277a6-fd8a-4dc9-94c1-987947872a75" />

>*Mockup van gemaakte Squad Page - Index*


>*Mockup van gemaakte Squad Page - Studenten pagina*

Link naar website: https://connect-your-tribe-team-squad-page-knrh.onrender.com/

Responsive

De website is responsive en is Mobile first ontworpen en gemaakt. We hebben gebruik gemaakt van `media queries` om de website op verschillende apparaten responsive te maken.

#### Toegankelijk
Voor de toegankelijkheid hebben we een WCAG Audit en Color Contrast Tests uitgevoerd, uitgeschreven in een [issue](https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/issues/16) en verwerkt.

- WCAG Audit is uitgevoerd door middel van de Lighthouse Accessibility test van Google Chrome en een handmatige test aan de hand van de checklist van de A11Y Project
- Color Contrast Tests zijn gedaan op de teksten, icons en input-element borders met behulp van de app 'Colour Contrast Analyser' van TPGI

### Filter op favoriete seizoen
De bedoeling van de interactie is dat als je op de 'Fav. seizoen' filter knop klikt, er een menu uit klapt met verschillende seizoenen. Als je op een seizoen klikt, veranderd de lijst met namen naar studenten wiens favoriete seizoen het is. 

#### <ins>Feedforward & Feedback</ins>
Feedforward filter naam:
- Er staat een driehoek vóór de naam van het filter, wat betekend dat er meer items in het filter zitten
- Met een hover over de filter naam krijgt de cursor een hand en wordt er een lijn laten zien onder de naam

Feedback filter naam:
- Na het klikken op de filter naam, klappen er meer filter items uit en blijft de lijn onder de naam staan

Feedforward filter items:
- Elk item heeft een lijn onder de naam
- Met een hover over een filter item veranderd de kleur van de naam

Feedback filter items:
- Na het klikken op een filter item veranderd de lijst met namen

### Zoekbalk
De zoekbalk is door mij ontwikkeld met JavaScript in een apart `script.js` bestand.

Met behulp van een `input` event listener wordt de ingevoerde waarde realtime vergeleken met de namen van de studenten in de lijst. De vergelijking is case-insensitive door zowel de zoekterm als de studentnaam om te zetten naar lowercase.

Wanneer een student niet overeenkomt met de zoekterm, wordt het bijbehorende `<li>` element verborgen met het `hidden` attribuut. Als er geen matches gevonden worden, wordt de melding **"Geen persoon gevonden."** zichtbaar gemaakt.

De filtering gebeurt volledig client-side, waardoor de interactie direct en zonder page reload plaatsvindt.

#### Video demonstratie
De werking van de zoekbalk wordt toegelicht in een korte video. In deze video is te zien hoe:

- De lijst realtime filtert tijdens het typen  
- De melding **"Geen persoon gevonden."** verschijnt wanneer er geen match is  
- De focus-state zichtbaar wordt bij interactie  

🔗 Link naar video: https://github.com/user-attachments/assets/9e5db281-b1e8-45f6-b332-0fb662cbe93d


### Comments sectie

## Kenmerken
We hebben gebruik gemaakt van HTML, CSS, JS, NodeJS, Express, JSON en Liquid. 

Voor het ophalen en posten van data gebruiken we NodeJS, dat is een server-side software waarmee je dynamische websites kunt maken. De opgehaalde data wordt vanuit een object uitgelezen met [Liquid](https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/blob/419cbed23620e9face46a27f148c4041d06112ce/views/student.liquid#L42) in de HTML.

In NodeJS hebben we verschillende *routes* aangemaakt met data uit de FDND API en gekoppeld aan de *views* map door een callback function toe te voegen. Elke keer dat een bezoeker een bepaalde route bezoekt, wordt de callback function uitgevoerd. In die functie wordt een view gerenderd. Aan die view wordt een object meegegeven met de data uit de API, zodat die gegevens ook in die view gebruikt kunnen worden.

Voorbeeld van een [route](https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/blob/419cbed23620e9face46a27f148c4041d06112ce/server.js#L265-L333) voor het ophalen (GET) van gemaakte comments in de comments secties. Met een [callback functie](https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/blob/419cbed23620e9face46a27f148c4041d06112ce/server.js#L326C1-L326C38) wordt deze route toegevoegd en gerenderd aan de `student.liquid` in de *views* map.  
De [data](https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/blob/419cbed23620e9face46a27f148c4041d06112ce/server.js#L302-L319) uit de API moet eerst in een variabel worden gezet om daarna de server te laten weten dat het in JSON geschreven staat. De variabel kan daarna worden meegegeven als [object](https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/blob/419cbed23620e9face46a27f148c4041d06112ce/server.js#L330), zodat de gegevens gebruikt kunnen worden in `student.liquid`. 

Om de comments te kunnen plaatsen (POST) moet er een andere [route](https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/blob/419cbed23620e9face46a27f148c4041d06112ce/server.js#L336-L365) worden gemaakt. 

### Code conventies
#### Ademruimte en inspringen
Ademruimte en inspringen zorgen voor overzicht en het makkelijker kunnen aanpassen van je code. Wij beginnen block-level elementen op een nieuwe regel en laten inline-level elementen doorlopen op dezelfde regel tenzij er meerdere elementen in de inline-level elementen zitten. Dan zetten we ze onder elkaar.

Zie [voorbeeld](https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/blob/419cbed23620e9face46a27f148c4041d06112ce/views/student.liquid#L6-L11).

#### Volgorde en nesten van CSS selectors
De volgorde van de HTML-structuur wordt aangehouden in de CSS en het [nesten van de selectors](https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/blob/419cbed23620e9face46a27f148c4041d06112ce/public/styles/style.css#L45-L83). Wij hebben gebruik gemaakt van [custom-properties](https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/blob/419cbed23620e9face46a27f148c4041d06112ce/public/styles/style.css#L21-L25) in de :root om het *DRY* principe aan te houden.

#### Nesten van media queries
De website is mobile first gemaakt. De [media queries](https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/blob/419cbed23620e9face46a27f148c4041d06112ce/public/styles/style.css#L383-L417) zijn genest in de elementen, waardoor de code overzichtelijker is en de responsiviteit per element makkelijk aan te passen is.

#### Naamgeving
De [classes](https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/blob/419cbed23620e9face46a27f148c4041d06112ce/views/student.liquid#L6) zijn in het engels geschreven en er is gebruik gemaakt van kebab-casing zodat de naam beter leesbaar is. Voor de custom-content zijn algemene namen gebruikt zoals `--dark-text-color:` zodat de kleur kaangepast kan worden zonder dat de naam aangepast hoeft te worden.

## Installatie
Volg deze stappen om de development omgeving in te richten om aan deze repository te kunnen werken:

Stap 1) installeer de [NodeJS ontwikkelomgeving](https://nodejs.org/en/download). Kies voor NodeJS 24.13.0 (LTS, long-term support), download het installatiebestand en doorloop het installatieproces.

Stap 2) Fork deze repository, *clone* deze op jouw computer en open het in VSCodium/ een code editor.

Stap 3) Open de Terminal in VSCodium, Voer in de terminal het commando `npm install uit` door het in te typen en op enter te drukken.

Stap 4 ) Na de installatie is de map `node_modules` aangemaakt, en gevuld met allerlei packages. Start de website door in de terminal het comando `npm start` uit te voeren. Als het goed is, komt hier een melding te staan over het opstarten van de server: Application started on http://localhost:8000 — Open deze URL in je browser

## Bronnen
- [Lijst met 1e jaars studenten in de database - @FDND Directus API](https://fdnd.directus.app/items/person/?fields=id,name,github_handle&filter=%7B%22_and%22:%5B%7B%22squads%22:%7B%22squad_id%22:%7B%22tribe%22:%7B%22name%22:%22FDND%20Jaar%201%22%7D%7D%7D%7D,%7B%22squads%22:%7B%22squad_id%22:%7B%22cohort%22:%222526%22%7D%7D%7D%5D%7D&sort=name)
- [Quary Parameter - @Directus](https://directus.io/docs/guides/connect/query-parameters)
- [Filter rules - @Directus](https://directus.io/docs/guides/connect/filter-rules)
- [Liquid Markup - @Modyo Docs](https://docs.modyo.com/en/platform/channels/liquid-markup.html)


## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).
