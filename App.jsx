import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungs, faThermometerHalf, faTint, faWind, faCloud, faCloudMeatball, faLeaf, faGasPump, faIndustry, faUsers } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  /*const [result, setResult] = useState('');
  const handlePredictClick = () => { 
   const form = document.getElementById('predictionForm'); 
   const formData = new FormData(form);
   fetch('/predict', { 
    method: 'POST',
    body: formData
   }) 
   .then(response => response.json()) 
   .then(data => { 
    const prediction = data.Prediction === 1 ? 'Air quality is good' : 'Air quality is poor'; 
    setResult(prediction); 
    alert(`Your results are:\n${prediction}`); 
  }) 
  .catch(error => 
    { console.error('Error:', error); 

    }); 
 };*/

  return (
    <div>
      <header>
        
          <div>
            <h1><FontAwesomeIcon icon={faLungs} />BreatheBetter</h1>
            
          </div>
          
        
      </header>

      <main>
        <h2>Predict Air Quality</h2>
        <p>
          Enter the parameters below to predict the air quality in your area.
        </p>

        <form id="predictionForm">
          <div class="formgrid">
            <div class="formgroup">
              <label htmlFor="temperature">
                <FontAwesomeIcon icon={faThermometerHalf} /> Temperature (°C):
              </label>
              <input type="number" id="temperature" name="temperature" step="any" required />
            </div>

            <div class="formgroup">
              <label htmlFor="humidity">
                <FontAwesomeIcon icon={faTint} /> Humidity (%):
              </label>
              <input type="number" id="humidity" name="humidity" step="any" required />
            </div>

            <div class="formgroup"> 
              <label htmlFor="pm25">
                <FontAwesomeIcon icon={faWind} /> PM2.5 (µg/m³):
              </label>
              <input type="number" id="pm25" name="pm25" step="any" required />
            </div>

            <div class="formgroup">
              <label htmlFor="pm10">
                <FontAwesomeIcon icon={faCloud} /> PM10 (µg/m³):
              </label>
              <input type="number" id="pm10" name="pm10" step="any" required />
            </div>

            <div class="formgroup">
              <label htmlFor="so2">
                <FontAwesomeIcon icon={faCloudMeatball} /> SO2 (µg/m³):
              </label>
              <input type="number" id="so2" name="so2" step="any" required />
            </div>

            <div class="formgroup">
              <label htmlFor="no2">
                <FontAwesomeIcon icon={faLeaf} /> NO2 (µg/m³):
              </label>
              <input type="number" id="no2" name="no2" step="any" required />
            </div>

            <div class="formgroup">
              <label htmlFor="co">
                <FontAwesomeIcon icon={faGasPump} /> CO (mg/m³):
              </label>
              <input type="number" id="co" name="co" step="any" required />
            </div>

            <div class="formgroup">
              <label htmlFor="proximity">
                <FontAwesomeIcon icon={faIndustry} /> Proximity to Industrial Areas (km):
              </label>
              <input type="number" id="proximity" name="proximity" step="any" required />
            </div>

            <div class="formgroup">
              <label htmlFor="population">
                <FontAwesomeIcon icon={faUsers} /> Population Density:
              </label>
              <input type="number" id="population" name="population" required />
            </div>
          </div>

          <button type="button" id="predictButton">
            Predict
          </button>
        </form>
      </main>

      <footer>
        <div>
          <p>
            &copy; 2025 Air Quality Prediction | Developed by <strong>Group C</strong>
          </p>
          <div>
            <a href="#">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;