import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, capital, population, region,} = props.country;
    
    return (
        <div className='child-box'>
            <img className='flagImage' src={flags.png} alt="" />
           <div className='information'>
            <div>
            <h4 className='h4Tags'> Country Name: {name.common} </h4>
            <h4>Capital: {capital}</h4>
            </div>
            <div>
            <h4>Population: {population}</h4>
            <h4>Region: {region}</h4>
            </div>
           </div>
        </div>
    );
};

export default Country;