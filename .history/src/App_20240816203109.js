import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
const [city,setCity] = useState("Delhi");
const [weatherData,setWeatherData]=useState(null);
const currentDate=new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const month = months[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const formattedDate=`${month} ${day}, ${year}`


const API_key="d2a94526f48041c577d5640c2551d16f";
const fetchWeatherData = async () =>{
  try{
    const response= await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`//this is used in url fetch in my profile api in open weatherapi and change $ symabol
      );

  const data=await response.json();
  console.log(data);
  setWeatherData(data);
      
  }
  catch(error){
    console.log(error);
  }
}

useEffect(() => {
  fetchWeatherData(); 
},[]);

const handleInputChange=(event) =>{
  console.log(event.target.value); 
  setCity(event.target.value);
}

const handleSubmit=(event) =>{
  event.preventDefault();
  fetchWeatherData();
}


  return (
    <div className="App">
     <div className='container'>
      
      {weatherData &&(
          <>
          <h1 className='container_date'>{formattedDate}</h1> 
          <div className='weather_data'>
            <h2 className='container_city'>Delhi</h2>
            <img className='container_img' src="./image.png" width="120px" alt='thunder'></img>  
             
             <h2 className='container_degree'>34.22</h2>
    
             <h2 className='country_per'>sunny</h2>
             <form className='form' onSubmit={handleSubmit}>
              <input type='text' className='input' placeholder='Enter City Name' onChange={handleInputChange}/><br></br>
              <button type='submit'>GET</button>
             </form>
          </div>
          </>
        );
       
        )}
         

     
     </div>
    </div>
  );
}

export default App;
