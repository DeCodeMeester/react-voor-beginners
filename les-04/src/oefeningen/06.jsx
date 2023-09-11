/***
 Oefening 6:

 1. Gebruik de voorbeeld-code hieronder om de volgende dingen te veroorzaken:
 2. De knoppen hoef je niets aan te veranderen, die werken al.
 3. Als je <LampLight /> niet rendert zal de lamp uit gaan.
 4. Zorg ervoor dat als de bovenste knop aan staat het eerste licht aan gaat.
 5. Zorg ervoor dat als de onderste knop aan staat het middelste licht aan gaat.
 6. Zorg ervoor dat beide knoppen aan staan het laatste licht aan gaat.
 7. Importeer en render dit component in `./src/App.jsx`.
***/

import { useState } from 'react';

import Lamp from '../components/Lamp';
import LampLight from '../components/LampLight';
import LampSwitch from '../components/LampSwitch.jsx';

function Oefening06() {
  const [isOnA, setOnA] = useState(false);
  const [isOnB, setOnB] = useState(false);

  const toggleA = () => setOnA(!isOnA);
  const toggleB = () => setOnB(!isOnB);

  return (
    <div className="lamps">
      <div className="switches">
        <LampSwitch isOn={isOnA} onToggle={toggleA} />
        <LampSwitch isOn={isOnB} onToggle={toggleB} />
      </div>

      <Lamp>
       <LampLight />
      </Lamp>
      <Lamp>
        <LampLight />
      </Lamp>
      <Lamp>
        <LampLight />
      </Lamp>
    </div>
  );
}

export default Oefening06;
