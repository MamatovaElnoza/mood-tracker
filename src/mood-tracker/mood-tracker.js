import { React, useState } from 'react'
import './mood-tracker.css'

const happy = {
  arabic: "الحمد لله الذي بنعمته تتم الصالحات",
  translit: "Alhamdulillahil-ladhi bi ni'matihi tatimmus-salihat",
  meaning: "All praise is for Allah, by whose favor good deeds are completed.",
}
const sad = {
  arabic: "حسبنا الله ونعم الوكيل",
  translit: "Hasbunallahu wa ni'mal wakeel",
  meaning: "Allah is sufficient for us, and He is the best disposer of affairs",
}


const MoodTracker = () => {

  const [selectedMood, setSelectedMood] = useState(null)

  return (

    <div>{selectedMood ? (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 pastel-pink text-dark">
        <h1>{selectedMood.arabic}</h1>
        <p>{selectedMood.translit}</p>
        <p>{selectedMood.meaning}</p>
        <button className="text-center btn-outline-light text-dark btn btn-lg pastel-yellow" onClick={() => setSelectedMood(null)}>Go Back</button>
      </div>
    ) : (

      <div className="d-flex flex-column align-items-center justify-content-center vh-100 pastel-pink text-dark">
        <h1>Pick Your Mood</h1>
        <div className="d-flex gap-3">
          <button className="btn btn-lg pastel-yellow btn-outline-light text-dark px-4 py-3" onClick={() => setSelectedMood(happy)}>Happy</button>
          <button className="btn btn-lg pastel-yellow btn-outline-light text-dark px-4 py-3" onClick={() => setSelectedMood(sad)}>Sad</button>

        </div>
      </div>
    )
    }</div>

  )
}

export default MoodTracker