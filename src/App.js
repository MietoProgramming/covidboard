import { useEffect, useState } from "react";
import "./App.css";
import Search from "./Search.jsx";
import Stats from "./Stats.jsx";
import Country from "./Country.jsx";
import Select from "./Select.jsx";

function App() {
  const [countryName, SetCountryName] = useState("");
  const [country, SetCountry] = useState({});
  const [allCountries, SetAllCountries] = useState();
  const [error, SetError] = useState(false);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  useEffect(() => {}, [allCountries]);

  useEffect(() => {
    if (countryName !== "") {
      fetchCountry(countryName);
    }
  }, [countryName]);

  const SetCountryData = (
    name,
    active,
    confirmed,
    deaths,
    recovered,
    countryCode
  ) => {
    SetCountry({ name, active, confirmed, deaths, recovered, countryCode });
  };

  const fetchAllCountries = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://api.covid19api.com/countries`, requestOptions)
      .then((response) => response.json())
      .then((r) => SetAllCountries(r))
      .catch((error) => console.log("error", error));
  };

  const fetchCountry = (cName) => {
    if (cName !== "") {
      var active = 0,
        confirmed = 0,
        deaths = 0,
        recovered = 0,
        name = "",
        countryCode = "";
      // const date = Date.now();
      // console.log(
      //   `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}T${date.getHours()}:${date.getMinutes()}:${date.getMilliseconds()}`
      // );
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        // from: "2020-01-01T00:00:00Z",
        // to: `${date.getFullYear}-${date.getMonth}-${date.getDay}T${date.getHours}:${date.getMinutes}:${date.getMilliseconds}`, TODO: Use in the future
      };
      console.log(name);
      fetch(`https://api.covid19api.com/live/country/${cName}`, requestOptions)
        .then((response) => response.json())
        .then((r) => {
          console.log(r);
          for (var i = 0; i < r.length; i++) {
            var day = r[i];
            active += day.Active;
            confirmed += day.Confirmed;
            deaths += day.Deaths;
            recovered += day.Recovered;
          }
          name = r[1].Country;
          countryCode = r[1].CountryCode;
          console.log(r[1]);
          SetError(false);
          SetCountryData(
            name,
            active,
            confirmed,
            deaths,
            recovered,
            countryCode
          );
        })
        .catch((error) => {
          console.log("error", error);
          SetCountry({});
          SetError(true);
        });
    }
  };

  return (
    <div>
      <div className="background"></div>
      <div className="App">
        <Stats />
        <div className="mainBox">
          <Search SetCountryName={SetCountryName} />
          {allCountries && (
            <Select
              allCountries={allCountries}
              SetCountryName={SetCountryName}
            />
          )}
          {error && <h1>Something went wrong! Try another country.</h1>}
          {country.name && <Country country={country} />}
        </div>
      </div>
    </div>
  );
}

export default App;
