/***
 Oefening 2:

 1. De code hieronder is niet optimaal, elke keer als de klok update wordt alles opnieuw berekend
 2. Refactor de code zodat niet alles steeds opnieuw wordt berekend
 3. Gebruik `useMemo` en `useCallback`
 ***/

import { useState } from 'react';

import Button from '../components/Button';
import DisplayOutcome from '../components/DisplayOutcome';

import useClock from '../hooks/useClock';

function factorialOf(n) {
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

function Oefening02() {
  const time = useClock();
  const [number, setNumber] = useState(50);

  const factorial = factorialOf(number);

  const onNewCalculation = () => setNumber(Math.floor(Math.random() * 100));

  return (
    <div>
      <h2>Dure calculator</h2>
      <p>
        Het is nu: {time}
      </p>
      <DisplayOutcome number={number} factorial={factorial} />
      <Button onClick={onNewCalculation}>
        Nieuwe berekening
      </Button>
    </div>
  );
}

export default Oefening02;
