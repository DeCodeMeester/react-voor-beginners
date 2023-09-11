import lamp from './lamp.svg';

import './Lamp.css';

function Lamp({ children }) {
  return (
    <div className="Lamp">
      <img src={lamp} alt=""/>
      {children}
    </div>
  );
}

export default Lamp;
