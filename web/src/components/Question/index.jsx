import { useEffect } from 'react';

import RadioGroup from 'components/RadioGroup';

const convertToOption = (value) => ({
  label: value,
  value,
});

const Question = ({
  title, options, currentQuestion, answers, setAnswer,
}) => {
  const radioGroupOptions = options.map((option) => convertToOption(option));

  useEffect(() => {
    if (!answers[currentQuestion]) {
      setAnswer((prev) => ({
        ...prev,
        [currentQuestion]: radioGroupOptions[0].value,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion]);

  const onOptionChange = ({ value }) => {
    setAnswer((prev) => ({
      ...prev,
      [currentQuestion]: value,
    }));
  };

  return (
    <div>
      <h1>{title}</h1>
      <RadioGroup
        value={convertToOption(answers[currentQuestion]) || radioGroupOptions[0]}
        options={radioGroupOptions}
        onChange={onOptionChange}
      />
    </div>
  );
};

export default Question;
