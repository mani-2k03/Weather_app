import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='container'>

      <h1 className='container_date'>Aug 15, 2024</h1>
      <div className='weather_data'>
        <h2 className='container_city'>Delhi</h2>
        <img className='container_img' src="./image.png" width="150px" alt='thunder'></img>  
         {/* thunder.png */}
      </div>
     </div>
    </div>
  );
}

export default App;
