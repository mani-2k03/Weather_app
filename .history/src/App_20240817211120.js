import logo from './logo.svg';
import './App.css';
import { useEffect, useState ,getWeatherIconUrl } from 'react';


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
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`//this is used in url fetch in my profile api in open weatherapi and change $ symbol and &units=metric is show in degree crt format
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

// switch case for show weather img



  return (
    <div className="App">
     <div className='container'>
      
      {weatherData &&(
          <>
          <h1 className='container_date'>{formattedDate}</h1> 
          <div className='weather_data'>
            <h2 className='container_city'>{weatherData.name}</h2>   
            {/* //weatherData.name is displayed enterd city */}

            <img 
            className='container_img' 
            src={getWeatherIconUrl(weatherData.weather[0].main)}
             width="180px" 
            alt='Weather_icon'
            />
              
             
             <h2 className='container_degree'>{weatherData.main.temp}</h2>
    
             <h2 className='country_per'>{weatherData.weather[0].main}</h2>x
             <form className='form' onSubmit={handleSubmit}>
              <input type='text' className='input' placeholder='Enter City Name' onChange={handleInputChange}/><br></br>
              <button type='submit'>GET</button>
             </form>
          </div>
          </>
        )}
         

     
     </div>
    </div>
  );
}

export default App;
