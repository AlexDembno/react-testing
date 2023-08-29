import { useState } from 'react';

import Section from 'components/Feedback/Section/Section';
import Statistics from 'components/Feedback/Statistics/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Feedback/Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(2);
  };

  const increment = value => {
    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Section text={'Feedback'}>
      <FeedbackOptions
        buttonName={['good', 'neutral', 'bad']}
        increment={increment}
      />
      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message={'There is no feedback'}></Notification>
      )}
    </Section>
  );
};

export default Feedback;
