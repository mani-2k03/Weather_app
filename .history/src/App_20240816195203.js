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
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const API_KEY="66e8168b0d0cc43051c783be6e817e2f";
const fetchWeatherData = async () =>{
  try{
    const response= await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API_KEY}`//thos is used in url fetch in my profile api in open weatherapi
      );

  const data=await response.json();
  console.log(data);
  setWeatherData(data);
      
  }
  catch(error){
    console.error("Error fetching weather data", error);
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
      {
        weatherData &&(

        );
      }

     
     </div>
    </div>
  );
}

export default App;
