import { useState } from 'react';

import Question from 'components/Question';
import Navigator from 'components/Navigator';

import { schoolProgramQuestions } from 'data';

import Form from './Form';

import styles from './styles.module.css';

const SchoolProgram = () => {
  const [isFormShown, setIsFormShown] = useState(false);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    isFormShown
      ? <Form answers={answers} />
      : (
        <div className={styles.container}>
          <Question
            title={schoolProgramQuestions[currentQuestion].title}
            options={schoolProgramQuestions[currentQuestion].options}
            currentQuestion={currentQuestion}
            answers={answers}
            setAnswer={setAnswers}
          />
          <Navigator
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            totalQuestions={schoolProgramQuestions.length}
            setIsFormShown={setIsFormShown}
          />
        </div>
      )
  );
};

export default SchoolProgram;
