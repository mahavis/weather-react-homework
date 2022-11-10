import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <form>
          <h1>Weather Search Application</h1>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city name.."
                autocomplete="off"
                autofocus="on"
                id="city-input"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
        <div className="overview">
          <h2 id="currentCity">The Hague</h2>
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
                <strong id="currentTemp"></strong>
                <span className="units">
                  <img
                    src="http://openweathermap.org/img/wn/02n@2x.png"
                    alt="cloudy"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <a href="/" id="convert-celsius" className="active">
                    12°C
                  </a>{" "}
                  |
                  <a href="/" id="convert-fahrenheit">
                    °F
                  </a>
                </span>
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
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
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
    </div>
  );
}

export default App;
