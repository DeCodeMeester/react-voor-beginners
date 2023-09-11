/***
 Oefening 2:

 1. Zet `02.css` en de code in dit component om naar de CSS module variant
 ***/

import './02.css';

function Oefening02() {
  return (
    <div className="intro">
      <h2>Hi!</h2>
      <p>
        Dit is een React component met wat CSS styling.
      </p>
      <p>
        We gaan dit component omzetten naar een CSS module
      </p>
      <ul className="intro__list">
        <li>Zet het bestand om naar een CSS module</li>
        <li>Zet de class names om naar de CSS module manier</li>
      </ul>
    </div>
  );
}

export default Oefening02;
