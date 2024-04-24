/* eslint-disable react/prop-types */
export default function Feedback({feedbackData:{good,neutral,bad}}) {
    return (
        <div className="p-5 font-medium">
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>
    )
}