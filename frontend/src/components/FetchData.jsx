import { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [c, setC] = useState(1);
 

  useEffect(() => {
    FetchQuestionsFromApi();
  }, []);

  const FetchQuestionsFromApi = async () => {
    try {
      const response = await axios.get("http://localhost:3000/random-questions");
      const shuffled = response.data.sort(() => 0.5 - Math.random());
      setQuestions(shuffled);
      setCurrentIndex(0);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  const handleButtonClick = () => {
    if (questions.length > 0) {
      setCurrentIndex((currentIndex + 1) % questions.length); 
      setC(c + 1); 
    }
  };

  return (
    <div style={{ fontWeight: 'bold', color: 'white', textAlign: "center" }}>
      {questions.length > 0 && currentIndex !== -1 ? (
        <div>
          <p>Q{c}. {questions[currentIndex].question}</p>
        </div>
      ) : (
        <p> Loading...</p>
      )}
      <button onClick={handleButtonClick}>Next</button>
    </div>
  );
}

export default FetchData;