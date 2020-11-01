import React from 'react';


const Country = ({country}) => {
    return (
        <div className="country">
            <img src={`https://www.countryflags.io/${country.countryCode}/flat/64.png`}/>
            <h1>{country.name}</h1>
            <p>Active cases: {country.active}</p>
            <p>Confirmed cases: {country.confirmed}</p>
            <p>Deaths: {country.deaths}</p>
        </div>
    )
}

export default Country;