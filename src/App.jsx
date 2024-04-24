import { useState } from "react"
import Description from "./components/description/Description"
import Feedback from "./components/feedback/Feedback"
import Options from "./components/options/Options"


function App() {

  const [feedback, setFeedback] = useState({
    "good": 0,
    "neutral": 0,
    "bad": 0,
  })

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback)=>({
      ...feedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    })
  )}



  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedbackData={feedback}/>
    </>
  )
}

export default App
