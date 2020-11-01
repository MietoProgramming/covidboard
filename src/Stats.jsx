import React, { useState, useEffect } from "react";

const Stats = () => {
  const [glob, setGlob] = useState();

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const result = fetch("https://api.covid19api.com/summary", requestOptions)
      .then((response) => response.json())
      .then((result) => setGlob(result))
      .catch((error) => console.log("error", error));
  };

  if (!glob) {
    return (
      <div className="stats">
        <h1>Global stats</h1>
        <h3>NewConfirmed: 0</h3>
        <h3>TotalConfirmed: 0</h3>
        <h3>NewDeaths: 0</h3>
        <h3>TotalDeaths: 0</h3>
        <h3>NewRecovered: 0</h3>
        <h3>TotalRecovered: 0</h3>
      </div>
    );
  }

  return (
    <div className="stats">
      <h1>Global stats</h1>
      <h3>NewConfirmed: {glob.Global.NewConfirmed}</h3>
      <h3>TotalConfirmed: {glob.Global.TotalConfirmed}</h3>
      <h3>NewDeaths: {glob.Global.NewDeaths}</h3>
      <h3>TotalDeaths: {glob.Global.TotalDeaths}</h3>
      <h3>NewRecovered: {glob.Global.NewRecovered}</h3>
      <h3>TotalRecovered: {glob.Global.TotalRecovered}</h3>
    </div>
  );
};

export default Stats;
