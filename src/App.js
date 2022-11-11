import "./App.css";

function App() {
  return (
    <div className="myWeatherApp">
      <h2>Weather Search Application</h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <input type="search" placeholder="Enter a city name.." />{" "}
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>

      <div className="overview">
        <h3>The Hague</h3>
        <ul>
          <li>
            Last updated: <span id="date">Thursday 20:20 PM</span>
          </li>
          <li id="description">Cloudy</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <div className="float-left">
              <img
                src="http://openweathermap.org/img/wn/02n@2x.png"
                alt="cloudy"
                target="_blank"
                rel="noreferrer"
              />
              <span className="units">
                <a href="/" id="convert-celsius" className="active">
                  <strong>12</strong>°C
                </a>{" "}
                |
                <a href="/" id="convert-fahrenheit" className="fah">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="weatherInfo">
        <ul>
          <li>
            Humidity: <span id="humidity">80</span>%
          </li>
          <li>
            Wind: <span id="speed">30</span> km/h
          </li>
        </ul>
      </div>
      <footer>
        <p>
          <small>
            <a
              href="https://github.com/mahavis/weather-react-homework"
              target="_blank"
              rel="noreferrer"
            >
              Partly-sourced on GitHub
            </a>{" "}
            Coded by Mahalakshmi Viswanath
          </small>
        </p>
      </footer>
    </div>
  );
}

export default App;
