/***
 Oefening 1:

 1. Maak een nieuw component `<User />` dat props ontvangt met de informatie uit `user` (regel 12)
 2. Denk bijvoorbeeld aan een component want een naamkaartje voor een `user` is
 3. Plaats de waardes van `user` ergens in je component
 4. Gebruik destructuring om je props uit te lezen
 5. import en render dit component in `./src/App.jsx`
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
