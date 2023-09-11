import { createElement } from 'react';

import './App.css';

function App() {
  return (
    createElement(
      'section',
      {},
      createElement(
        'h1',
        {},
        'De Code Meester'
      ),
      createElement(
        'div',
        {},
        'Plaats hier het "Greeting" component'
      ),
    )
  )
}

export default App;
