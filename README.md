# Assignment on User data (localStorage) - Making a personal Dashboard.

## My Notes:

- As suggested I want to make dashboard for shows(be it regular tv shows or anime), however I want to make it practical tool to keep overview of shows I'm watching with different people.
- Say if I'm watching two animes (one ongoing and one that's been in backlog where all episodes are released) with a friend, I want to list said animes, with the possibility to add/move them to a "attached" but yet seperate card that gives an overview to which shows we have finished watching and, if time, a list for shows we'd like to watch.
- Disclaimer: if I see the need to use names in the task, such as in classnames I will be using fictional names.

### My plan, step by step:

---> ! Made a shift of plans, while I still want to create this page as an easy way to store progression in shows with different friends;

### Current plan:

1. Fix css to each series card, as to display series name, img and total episodes. [x]
2. use map(), sort(), filter() etc, to make it simple to sort the shows by name and amount of episodes. [x]

- first sort them from high to low -- A-Z [x]
- Then add an option to sort it the other way. if time that is. [x]

3. Add a deleted button.[x] --> Had to cheat a bit here and use aa method suggested by teacher as there was some issues for the document to refresh/load automatically when an divCard/item had been deleted
4. If time; add a fav/starred button and add the option to sort by favs as well. [] --> Nope, maybe at a later time
5. Add a "seen function", cheap trick tbh: toggle styling to "mark" the card as seen.
6. bonus if time: add a way to sort shows based on wheter they have been seen or not. []

- Add class to toggle between, to display the shows that have been watched differently from not watched [x]
- How to store the change of the toggle as a beenWatched value in js localStorage? []
- Add the possibility to sort all the shows added by seen or not seen with two options(seen-not seen/not seen - seen) []

### Previous plan(Made it to step 2)

(This plan had to be altered as I struggled a lot with local storage logic, possibly due to some technical issues during the lessons...)

1. I will first make a simple list, likely created and appended from js to an html div.
2. Then get that list to store anime/show names and an img, this is the "Currently watching" list.

- Once it is storing the information I add in the browser in local storage: I will add a remove icon. Which purpose is to help delete shows, if wanted, in the browser instead of having to enter application in dev tool. However this will be in backlog priority.

3. Make a seperate list that I can move the stored shows to, meaning I also have to add a "move to watched" button.
4. Set up a less hardcoded approach that'll allow me to make several lists with the dual function of storing new shows with title and img, as well as moving them to the Watched list. Meaning I also need to remember to give the user the option of naming the list.
5. Note: css as I go, as the main focus is js
6. I'd also like to add another list option where the user can add shows they plan to start watching.
7. Add total episodes and episode progression

## Assigment description

- Collected from Canvas:
  'https://jobloop.instructure.com/courses/557/assignments/11018'

### Oppgavebeskrivelse:

I denne oppgaven skal du bygge en applikasjon som håndterer og manipulerer brukerdata ved hjelp av localStorage. Applikasjonen skal kunne lagre, filtrere, sortere og analysere data på en effektiv måte.

Du skal lage et personlig data dashboard hvor brukeren kan lagre og organisere informasjon relatert til en bestemt hobby, et prosjekt eller en personlig interesse. Eksempler inkluderer:

- Treningsplanlegger/logg: Brukeren registrerer økter, type trening, tid brukt og eventuell progresjon.
- Boklesing: En applikasjon for å holde oversikt over leste bøker, favorittsjangre og anbefalinger.
- Film- eller serieliste: Et system for å logge hvilke filmer og serier som er sett, samt gi vurderinger.
- Oppskriftsarkiv: En matlagingsapp der brukeren kan lagre og organisere oppskrifter etter kategori og ingredienser.
- Kunstportefølje: En digital oversikt over tegninger, malerier eller digitale verk.

Du skal utfordres til å bruke metoder som map(), filter(), sort() og reduce() for å manipulere og presentere dataene på en brukervennlig måte. I tillegg anbefales det å bruke destructuring for å hente ut relevante verdier fra objekter og arrays på en effektiv måte.

### Krav til funksjonalitet:

Legge til data:

Brukeren skal kunne legge inn nye dataelementer med relevant informasjon.
Dataene lagres i localStorage.
Oppdatering og markering:

Brukeren skal kunne oppdatere eller endre et eksisterende dataelement.
Eventuelt markere elementer som favoritt, anbefalt eller en annen passende status.
Sletting av data:

Brukeren skal kunne slette et enkelt dataelement eller alle elementer.
Filtrering og sortering:

Bruk filter() for å la brukeren filtrere elementer basert på spesifikke kriterier.
Bruk sort() for å gi brukeren muligheten til å sortere dataene, for eksempel alfabetisk, etter dato eller annen relevant kategori.
Statistikk og analyse (Bonusoppgave):

Bruk reduce() for å generere en oppsummering av dataene, for eksempel total tid brukt på trening eller antall bøker lest per sjanger.
Bruk av destructuring:

Bruk destructuring for å hente ut data fra objekter og arrays.
Eksempel:
'const data = {
id: "1a2b3c",
bookTitle: "Sult",
author: "Knut Hamsun",
genre: "Roman",
pages: 250
};

const { bookTitle, author, genre, pages } = data;
console.log(`${bookTitle} av ${author}, sjanger: ${genre}, sider: ${pages}`);'

### Tekniske krav:

- Bruk localStorage til å lagre.
- Bruk map(), filter(), sort(), reduce() til å manipulere dataene.
- Bruk destructuring for enklere datahåndtering.
- Bruk event listeners for å håndtere input.
- Lag en enkel, men intuitiv UI der data kan legges til, vises, filtreres og slettes.

Forslag til oppbygning av dataobjekter i localStorage:
'[
{
"id": "1a2b3c",
"bookTitle": "Sult",
"author": "Knut Hamsun",
"genre": "Roman",
"pages": 250
},
{
"id": "4d5e6f",
"bookTitle": "Dune",
"author": "Frank Herbert",
"genre": "Science Fiction",
"pages": 412
}
]'

### Leveringskrav:

- Kode i en GitHub-repo med en README som forklarer funksjonaliteten.
- GitHub Pages deployment slik at løsningen kan testes live.
- Kommentarer
  Lykke til! 🚀
