/***
 Oefening 1:

 1. De code in de oefening klopt niet
 2. Aan jou de taak om de code te refactoren naar een werkende versie
 3. Gebruik `useState` om `name` en `age` goed behandelen
 ***/

function Oefening01() {
  let name = 'Holden';
  let age = 16;

  const onSubmit = (e) => {
    // dit is nodig om het formulier af te vangen
    e.preventDefault();

    window.alert({ name, age });
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="name">Naam:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            name = e.target.value;
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="age">Leeftijd:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => {
            age = e.target.value;
          }}
        />
      </fieldset>
      <button type="submit">Verstuur</button>
    </form>
  );
}

export default Oefening01;
