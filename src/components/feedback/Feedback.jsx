/* eslint-disable react/prop-types */
export default function Feedback({ feedbackData: { good, neutral, bad }, totalFeedback }) {
  return (
    <div className="p-5 font-medium">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
    </div>
  );
}