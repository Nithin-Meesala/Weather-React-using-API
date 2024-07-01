import SearchBox from './searchBox';
import InfoBox from './infoBox';
import { useState } from 'react';
import { createContext } from 'react';

export const store = createContext();

export default function WeatherApp(){
    const[error,setError] = useState(false)
    const[weatherinfo,setWeatherinfo] = useState({
        city:"Hyderabad",
        feelslike: 24.85,
        temp: 23.3,
        tempMin : 22.3,
        tempMax : 22.3,
        humidity : 23,
        weather : "Sunny",
    });

    function updateinfo(newInfo){
        setWeatherinfo(newInfo);
    }
    return (
        <store.Provider value={[error,setError]}>

        <div><h2 style={{color:"white"}}>Weather App Using React</h2></div>
        <SearchBox updateinfo={updateinfo}></SearchBox>
        <InfoBox info={weatherinfo}></InfoBox>

        </store.Provider>  
    )
}