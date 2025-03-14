import cats from './shelter_cats.json';

const LOCAL_STORAGE = 'rvb_cats_1';
const TIMEOUT = 200;

export interface Cat {
  available: boolean;
  caseNumber: string;
  gender: 'male' | 'female';
  born: string;
  sheltered: string;
  name: string;
  image: string;
}

type DataCat = Omit<Cat, 'image'>;

function getLocalCats() {
  const raw = window.localStorage.getItem(LOCAL_STORAGE) || '[]';
  const localCats: DataCat[] = JSON.parse(raw);

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

function mapCat(cat: typeof cats[0]): Cat {
  const w = 300 + parseInt(cat.caseNumber.substring(0, 2), 10);

  return {
    ...cat,
    gender: cat.gender === 'male' || cat.gender === 'female' ? cat.gender : 'male',
    image: `https://placecats.com/${w}/${w}`,
  };
}

export async function getAllCats(): Promise<Cat[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, TIMEOUT);
  });

  return getStoredCats().map(mapCat);
}

export async function getCat(caseNumber: string): Promise<Cat> {
  await new Promise((resolve) => {
    setTimeout(resolve, TIMEOUT);
  });

  const found = getStoredCats().find((cat) => cat.caseNumber === caseNumber);

  if (!found) {
    throw Error(`Cat(${caseNumber}) not found`);
  }

  return mapCat(found);
}

function saveLocalCat(caseNumber: string, cat: Partial<DataCat>) {
  const localCats = getLocalCats();

  const hasCat = localCats.findIndex((cat) => cat.caseNumber === caseNumber) > -1;
  let cats: DataCat[] = [];

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

export async function updateCat(caseNumber: string, cat: Partial<DataCat>): Promise<undefined> {
  await new Promise((resolve) => {
    setTimeout(resolve, TIMEOUT);
  });

  saveLocalCat(caseNumber, cat);

  return undefined;
}
