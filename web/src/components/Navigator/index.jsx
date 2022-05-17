import { memo } from 'react';

import Button from 'components/Button';

import styles from './styles.module.css';

const Navigator = ({
  currentQuestion,
  setCurrentQuestion,
  totalQuestions,
  setIsFormShown,
}) => {
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  const onPrevButtonClick = () => {
    setCurrentQuestion((prev) => {
      if (prev > 0) {
        return prev - 1;
      }

      return 0;
    });
  };

  const onNextButtonClick = () => {
    if (isLastQuestion) {
      setIsFormShown(true);
    } else {
      setCurrentQuestion((prev) => {
        if (prev <= totalQuestions - 1) {
          return prev + 1;
        }

        return prev;
      });
    }
  };

  return (
    <div className={styles.container}>
      {!isFirstQuestion && (
      <Button
        className={styles.prevButton}
        onClick={onPrevButtonClick}
      >
        Назад
      </Button>
      )}
      <Button onClick={onNextButtonClick}>
        {isLastQuestion ? 'Завершить' : 'Далее'}
      </Button>
    </div>
  );
};

export default memo(Navigator);
