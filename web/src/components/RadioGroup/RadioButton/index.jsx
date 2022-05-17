import { memo } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

const RadioButton = ({
  checked, onChange, name, text, disabled, className,
}) => (
  <button
    type="button"
    onClick={onChange}
    className={cn({
    }, styles.container, className)}
  >
    <div
      className={cn({
        [styles.checked]: checked,
      }, styles.radio)}
    >
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
      />
      <span
        className={cn({
          [styles.checked]: checked,
        }, styles.circle)}
      />
    </div>
    <label
      htmlFor="radio"
      className={styles.label}
    >
      {text}
    </label>
  </button>
);

export default memo(RadioButton);
