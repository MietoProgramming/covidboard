import React, { useEffect } from "react";

const Select = ({ allCountries, SetCountryName }) => {

const SelectedOption = (name) => {
    SetCountryName(name);
}

  return (
    <div className="select">
      <select onChange={(e) => SelectedOption(e.target.value)}>
        {allCountries.map((c) => {
        // console.log(c);
          return <option key={c.ISO2,c.Slug} value={c.Slug}>{c.Country}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
