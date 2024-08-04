import React, {useState,useEffect} from "react";
import axios from 'axios';


function FetchData(){
    const [data ,setData] = useState(null);
    const [buttonClicked,setButtonClicked] = useState(false);

    useEffect(()=> {
        if(buttonClicked){
            FetchDataFromApi();
        console.log('clicked');}
    },[buttonClicked])

    const handleButtonClick =() => {
        setButtonClicked(!buttonClicked);
    }

    const FetchDataFromApi =async () => {
        try{
            const response = await axios .get('http://localhost:3000/random-questions');
            setData(response.data);
        }
        catch( error){
            console.log("Error fetching data", error);
        }
    }

    return (
        <div>
            {data? (
                <div>
                    <p>{data.question}</p>
                    
                </div>
            )
            : (
                <p> No data fetched yet</p>
            )}
            <button onClick={handleButtonClick}>Next</button>

        </div>
    );
}

export default FetchData;


