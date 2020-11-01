import React, { useEffect } from "react";

const Select = ({ allCountries, SetCountryName }) => {

const SelectedOption = () => {
    SetCountryName()
}

  return (
    <div className="select">
      <select onSelect={(e) => console.log(e)} name="" id="">
        {allCountries.map((c) => {
            console.log(c);
          <option value={c.Slug}>{c.Country}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
