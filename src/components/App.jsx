import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const Apps = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const percentage = total === 0 ? 0 : (good / total) * 100;

  const handleIncrement = option => {
    if (option === 'good') setGood(good + 1);
    else if (option === 'neutral') setNeutral(neutral + 1);
    else if (option === 'bad') setBad(bad + 1);
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            percentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return (good / this.countTotalFeedback()) * 100;
//   };

//   handleIncrement = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               bad={bad}
//               neutral={neutral}
//               total={total}
//               percentage={percentage}
//             />
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
