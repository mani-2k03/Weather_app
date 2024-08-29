import logo from './logo.svg';
import './App.css';

function App() {

const currentDate=new currentDate();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const month = months[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const formattedDate=`${month} ${day}, ${year}`




  return (
    <div className="App">
     <div className='container'>

      <h1 className='container_date'>{formattedDate}</h1>
      <div className='weather_data'>
        <h2 className='container_city'>Delhi</h2>
        <img className='container_img' src="./image.png" width="120px" alt='thunder'></img>  
         
         <h2 className='container_degree'>34.22</h2>

         <h2 className='country_per'>sunny</h2>
         <form className='form'>
          <input type='text' className='input' placeholder='Enter City Name'/><br></br>
          <button type='submit'>GET</button>
         </form>
      </div>
     </div>
    </div>
  );
}

export default App;
