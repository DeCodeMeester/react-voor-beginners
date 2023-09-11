# React voor Beginners
## Eindopdracht

[Download al het huiswerk materiaal](https://github.com/DeCodeMeester/react-voor-beginners/archive/refs/heads/main.zip) of [clone de Git repository](https://github.com/DeCodeMeester/react-voor-beginners).

Unzip deze `.zip` en ga open de map `./les-12`.

Je vind in deze map ook de bestanden die je nodig hebt om "kattendata" te verwerken.

Maak een nieuw project aan met vite en doe het volgende:

1. Je gaat het volgende namaken: [https://eindopdracht.reactvoorbeginners.nl](https://eindopdracht.reactvoorbeginners.nl)
2. Het hoeft niet identiek te zijn aan dit resultaat, maar wel in deze richting.
3. Zorg dat je een pagina heb waar je de huidige katten in het systeem laat zien met nuttige info per kat.
4. Maak het overzicht van katten zoekbaar op naam van kat.
5. Maak het overzicht van katten filterbaar op gender.
6. Maak het overzicht van katten filterbaar op beschikbaarheid.
7. Heb een pagina waar je de details van een kat kan bekijken met zijn eigen url.
8. Zorg dat je nieuwe katten kan toevoegen aan het systeem (foto niet nodig, deze wordt automatisch aangemaakt).
9. Zorg dat je informatie over een kat kan aanpassen en opslaan (foto niet nodig, deze wordt automatisch aangemaakt).
10. Denk aan validatie en foutmeldingen bij het verwerken van informatie.

Lever het huiswerk in door een `.zip` bestand te sturen van je hele project **zonder** de `./node_modules` map.

## Extra informatie over katten data

In `./les-12/data` van het huiswerk materiaal vind je wat je nodig hebt om met katten data te werken.

Kopieer deze map naar je `./src` map van je project zodat je deze kan gebruiken. Beide bestanden in de map heb je nodig.

`./data/cats.js` staan de functies in waarmee je data kan ophalen en verwerken.<br />
`./data/cats.ts` de TypeScript variant met types.<br />
`./data/shelter_cats.json` bevat dummy data waarmee je kan werken.

Het ophalen van data doe je als volgt:

```js
import { getAllCats, getCat } from './data/cats';

// get all cats
getAllCats().then((cats) => {
  // your code
});

// get cat by case number
getCat('1920830230127').then((cat) => {
  // your code
});
```

Een kat opslaan / aanpassen:

```js
import { updateCat } from './data/cats';

// saving a new cat
const newCat = {
  available: true,
  caseNumber: "1920830230127",
  gender: "male",
  born: "2019-11-18",
  sheltered: "2022-10-29",
  name: "Joshua",
};

updateCat(newCat.caseNumber, newCat).then((cat) => {
  // your code
});

// TIP: generating a random case number for creating new cats:
function generateCaseNumber() {
  const min = 1000000000000;
  const max = 9999999999999;
  const caseNumber = Math.floor(Math.random() * (max - min + 1) + min);
  
  return caseNumber.toString();
}
```

## Handige links voor de eindopdracht

- [Material UI](https://mui.com/material-ui/)
- [React Router](https://reactrouter.com/en/main)
- [React Query](https://tanstack.com/query/v3/docs/react/overview)
