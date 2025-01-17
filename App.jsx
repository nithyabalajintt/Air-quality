import React, { useState } from 'react';

const App = () => {
  console.log("App component is rendered");

  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    pm25: '',
    pm10: '',
    so2: '',
    no2: '',
    co: '',
    proximity: '',
    population: ''
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Sending the form data to the backend
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      // Assuming the backend returns the prediction result
      setResult(data.Prediction || 'Error in prediction');

    } catch (error) {
      console.error('Error while fetching data:', error);
      setResult('Error occurred while fetching data');
    }
  };

  return (
    <div>
      <header>
        <div>
          <h1>BreatheBetter</h1>
        </div>
      </header>

      <main>
        <h2>Predict Air Quality</h2>
        <p>Enter the parameters below to predict the air quality in your area.</p>

        <form id="predictionForm" onSubmit={handleSubmit}>
          <div className="formgrid">
            <div className="formgroup">
              <label htmlFor="temperature">
                Temperature (°C):
              </label>
              <input type="number" id="temperature" name="temperature" value={formData.temperature} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="humidity">
                 Humidity (%):
              </label>
              <input type="number" id="humidity" name="humidity" value={formData.humidity} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup"> 
              <label htmlFor="pm25">
                PM2.5 (µg/m³):
              </label>
              <input type="number" id="pm25" name="pm25" value={formData.pm25} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="pm10">
                PM10 (µg/m³):
              </label>
              <input type="number" id="pm10" name="pm10" value={formData.pm10} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="so2">
                SO2 (µg/m³):
              </label>
              <input type="number" id="so2" name="so2" value={formData.so2} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="no2">
                 NO2 (µg/m³):
              </label>
              <input type="number" id="no2" name="no2" value={formData.no2} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="co">
                CO (mg/m³):
              </label>
              <input type="number" id="co" name="co" value={formData.co} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="proximity">
                 Proximity to Industrial Areas (km):
              </label>
              <input type="number" id="proximity" name="proximity" value={formData.proximity} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="population">
                 Population Density:
              </label>
              <input type="number" id="population" name="population" value={formData.population} onChange={handleChange} required />
            </div>
          </div>

          <button type="button" id="predictButton" onClick={handleSubmit}>
  Predict
</button>
        </form>

        {result && <p>Prediction: {result}</p>}
      </main>

      <footer>
        <div>
          <p>&copy; 2025 Air Quality Prediction | Developed by <strong>Group C</strong></p>
         
        </div>
      </footer>
    </div>
  );
};

export default App;
import React, { useState } from 'react';

const App = () => {
  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    pm25: '',
    pm10: '',
    so2: '',
    no2: '',
    co: '',
    proximity: '',
    population: ''
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Sending the form data to the backend
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Assuming the backend returns the prediction result
      setResult(data.Prediction || 'Error in prediction');

    } catch (error) {
      console.error('Error while fetching data:', error);
      setResult('An error occurred while fetching data. Please try again later.');
    }
  };

  return (
    <div>
      <header>
        <div>
          <h1>BreatheBetter</h1>
        </div>
      </header>

      <main>
        <h2>Predict Air Quality</h2>
        <p>Enter the parameters below to predict the air quality in your area.</p>

        <form id="predictionForm" onSubmit={handleSubmit}>
          <div className="formgrid">
            <div className="formgroup">
              <label htmlFor="temperature">Temperature (°C):</label>
              <input type="number" id="temperature" name="temperature" value={formData.temperature} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="humidity">Humidity (%):</label>
              <input type="number" id="humidity" name="humidity" value={formData.humidity} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup"> 
              <label htmlFor="pm25">PM2.5 (µg/m³):</label>
              <input type="number" id="pm25" name="pm25" value={formData.pm25} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="pm10">PM10 (µg/m³):</label>
              <input type="number" id="pm10" name="pm10" value={formData.pm10} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="so2">SO2 (µg/m³):</label>
              <input type="number" id="so2" name="so2" value={formData.so2} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="no2">NO2 (µg/m³):</label>
              <input type="number" id="no2" name="no2" value={formData.no2} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="co">CO (mg/m³):</label>
              <input type="number" id="co" name="co" value={formData.co} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="proximity">Proximity to Industrial Areas (km):</label>
              <input type="number" id="proximity" name="proximity" value={formData.proximity} onChange={handleChange} step="any" required />
            </div>

            <div className="formgroup">
              <label htmlFor="population">Population Density:</label>
              <input type="number" id="population" name="population" value={formData.population} onChange={handleChange} required />
            </div>
          </div>

          <button type="submit" id="predictButton">
            Predict
          </button>
        </form>

        {result && <p>Prediction: {result}</p>}
      </main>

      <footer>
        <div>
          <p>&copy; 2025 Air Quality Prediction | Developed by <strong>Group C</strong></p>
        </div>
      </footer>
    </div>
  );
};

export default App;
