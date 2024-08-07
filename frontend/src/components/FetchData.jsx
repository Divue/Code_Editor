import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [data, setData] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    console.log("clicked");
    if (buttonClicked) {
      FetchDataFromApi();
    }
  }, [buttonClicked]);

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const FetchDataFromApi = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/random-questions"
      );
      const questions = response.data;
      const shuffled = questions.sort(() => 0.5 - Math.random());
    //   const selected = shuffled.slice(0, 1);
        const selectedQuestion = shuffled[0];
        setData(selectedQuestion)
    //   console.log(data);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  return (
    <div>
      {data ? (
        <div>
          <p>{data.question}</p>
        </div>
      ) : (
        <p> No data fetched yet</p>
      )}
      <button onClick={handleButtonClick}>Next</button>
    </div>
  );
}

export default FetchData;
