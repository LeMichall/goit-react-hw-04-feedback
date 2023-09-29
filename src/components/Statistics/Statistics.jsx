import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div className={css.statisticsWrapper}>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback: {Math.floor(percentage)}%</span>
    </div>
  );
};
