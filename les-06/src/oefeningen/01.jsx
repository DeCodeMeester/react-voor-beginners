/***
 Oefening 1:

 1. Maak een component dat props ontvangt met de informatie uit `user`
 2. Plaats de waardes ergens in je component
 3. Gebruik destructuring om je props uit te lezen
 4. import en render dit component in `./src/App.jsx`
 ***/

function Oefening01() {
  const user = {
    id: '002',
    firstName: 'Peter',
    lastName: 'Parker',
    city: 'Queens, NY',
    address: 'Chelsea Street, 410',
    contacts: {
      phone: '123-456-7890',
      email: 'spiderman@gmail.com',
    },
  };

  return null;
}

export default Oefening01;
