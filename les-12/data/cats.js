import cats from './shelter_cats.json';

const LOCAL_STORAGE = 'rvb_cats_1';
const TIMEOUT = 200;

function getLocalCats() {
  const raw = window.localStorage.getItem(LOCAL_STORAGE) || '[]';
  const localCats = JSON.parse(raw);

  return localCats;
}

function getStoredCats() {
  const localCats = getLocalCats();
  const caseNumbers = cats.map((c) => c.caseNumber);

  return [
    ...cats.map((c) => {
      const localCat = localCats.find((lc) => lc.caseNumber === c.caseNumber);

      return {
        ...c,
        ...(localCat || {}),
      };
    }),
    ...localCats.filter((lc) => !caseNumbers.includes(lc.caseNumber)),
  ];
}

function mapCat(cat) {
  const w = 300 + parseInt(cat.caseNumber.substring(0, 2), 10);

  return {
    ...cat,
    gender: cat.gender === 'male' || cat.gender === 'female' ? cat.gender : 'male',
    image: `https://placekitten.com/${w}/${w}`,
  };
}

export async function getAllCats() {
  await new Promise((resolve) => {
    setTimeout(resolve, TIMEOUT);
  });

  return getStoredCats().map(mapCat);
}

export async function getCat(caseNumber) {
  await new Promise((resolve) => {
    setTimeout(resolve, TIMEOUT);
  });

  const found = getStoredCats().find((cat) => cat.caseNumber === caseNumber);

  if (!found) {
    throw Error(`Cat(${caseNumber}) not found`);
  }

  return mapCat(found);
}

function saveLocalCat(caseNumber, cat) {
  const localCats = getLocalCats();

  const hasCat = localCats.findIndex((cat) => cat.caseNumber === caseNumber) > -1;
  let cats = [];

  if (hasCat) {
    cats = localCats.map((c) => {
      if (c.caseNumber === caseNumber) {
        return {
          ...c,
          ...cat,
        };
      }

      return c;
    });
  } else {
    cats = [
      ...localCats,
      {
        caseNumber,
        name: '',
        gender: 'male',
        available: true,
        born: '',
        sheltered: '',
        ...cat,
      },
    ];
  }

  window.localStorage.setItem(LOCAL_STORAGE, JSON.stringify(cats));
}

export async function updateCat(caseNumber, cat:) {
  await new Promise((resolve) => {
    setTimeout(resolve, TIMEOUT);
  });

  saveLocalCat(caseNumber, cat);

  return undefined;
}
