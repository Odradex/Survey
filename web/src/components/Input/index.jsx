import cn from 'classnames';

import styles from './styles.module.css';

const Input = ({
  value, onChange, name, label, placeholder,
  error, className,
}) => (
  <div className={cn([styles.container], className)}>
    {label && (
    <label
      htmlFor={name}
      className={cn({
        [styles.error]: error?.message,
      }, styles.label, className)}
    >
      {label}
    </label>
    )}
    <div className={styles.inputWrapper}>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn({
          [styles.error]: error?.message,
        }, styles.input)}
      />
    </div>
    {error && <span className={styles.errorMessage}>{error.message}</span>}
  </div>
);

export default Input;
