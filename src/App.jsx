import { useEffect, useState } from "react"
import Description from "./components/description/Description"
import Feedback from "./components/feedback/Feedback"
import Options from "./components/options/Options"
import Notification from "./components/notification/Notification"


function App() {

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("saved-feedback");
     return savedFeedback ? JSON.parse(savedFeedback) : ({ "good": 0, "neutral": 0, "bad": 0 })
  });
    useEffect(() => {
      localStorage.setItem("saved-feedback", JSON.stringify(feedback))
    },)
    const updateFeedback = (feedbackType) => {
      setFeedback((prevFeedback) => ({
        ...feedback,
        [feedbackType]: prevFeedback[feedbackType] + 1
      })
      )
    }
    const handleResetFeedback = () => {
      setFeedback(f => ({
        ...f,
        "good": 0,
        "neutral": 0,
        "bad": 0,
      }))
    }
    const { good, neutral, bad } = feedback;
    const totalFeedback = good + neutral + bad;


    return (
      <>
        <Description />
        <Options
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          resetFeedback={handleResetFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback feedbackData={feedback} totalFeedback={totalFeedback} />
        ) : (
          <Notification />
        )}
      </>
    );
  }

export default App
