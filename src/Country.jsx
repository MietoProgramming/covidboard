import React from 'react';


const Country = ({country}) => {
    return (
        <div className="country">
            <img src={`https://www.countryflags.io/${country.countryCode}/flat/64.png`}/>
            <h1>{country.name}</h1>
            <h1>{country.active}</h1>
            <h1>{country.confirmed}</h1>
            <h1>{country.deaths}</h1>
        </div>
    )
}

export default Country;