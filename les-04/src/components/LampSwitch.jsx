import classNames from 'classnames';

import Switch from './Switch.svg';

function LampSwitch({ isOn, onToggle }) {
  return (
    <button
      className={classNames('LampSwitch', { 'LampSwitch--on': isOn })}
      onClick={onToggle}
    >
      <img src={Switch} alt=""/>
    </button>
  );
}

export default LampSwitch;
