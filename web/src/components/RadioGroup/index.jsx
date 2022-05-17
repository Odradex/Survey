import {
  useCallback, useEffect, useState,
} from 'react';

import RadioButton from './RadioButton';

import styles from './styles.module.css';

const RadioGroup = ({
  value, onChange, options, label, className,
}) => {
  const [radioGroupOptions, setRadioGroupOptions] = useState(options);

  useEffect(() => {
    setRadioGroupOptions(options.map((option) => {
      const newOption = { ...option };
      newOption.isActive = option.value === value.value;
      return newOption;
    }));
  }, [value.value, options]);

  const handleClick = useCallback((index) => onChange(options[index]), [onChange, options]);

  return (
    <div className={className}>
      <label htmlFor="radio" className={styles.label}>{label}</label>
      <div className={styles.radioButtonsContainer}>
        {radioGroupOptions.map((option, index) => (
          <RadioButton
            key={option.value}
            text={option.label}
            checked={option.isActive}
            onChange={() => handleClick(index)}
            className={styles.radioButton}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
