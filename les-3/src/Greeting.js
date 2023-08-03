import { createElement } from 'react';

function Greeting({ name }) {
  const parsedName = name || '<vul naam in>';

  return (
    createElement(
      'p',
      {},
      ['Hallo', parsedName, 'en welkom bij React voor Beginners'].join(' ')
    )
  );
}

export default Greeting;
