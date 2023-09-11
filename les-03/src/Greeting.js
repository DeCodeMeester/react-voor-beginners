import { createElement } from 'react';

function Greeting({ name = '<vul naam in>' }) {
  return (
    createElement(
      'p',
      {},
      ['Hallo', name, 'en welkom bij React voor Beginners'].join(' ')
    )
  );
}

export default Greeting;
