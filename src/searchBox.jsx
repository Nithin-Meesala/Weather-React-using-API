import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { store } from "./weatherApp";
import { useContext, useState } from 'react';

export default function SearchBox({ updateinfo }) {
    let [city, setCity] = useState("");

    const [error, setError] = useContext(store);

    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6d736ea6ebd5c63deb568926944deec4";

    async function getWeatherinfo() {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    function handleChange(event) {
        setCity(event.target.value);
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherinfo();
            updateinfo(newInfo);
        } catch (err) {
            setError(!error);
        }
    }

    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    onChange={handleChange}
                    id="City"
                    label="City"
                    variant="outlined"
                    required
                    autoComplete='off'
                    className='inputtext'
                    InputProps={{
                        sx: {
                            backgroundColor: 'white', // Background color
                            borderRadius: 10, // Border radius
                            '& input': {
                                color: 'black', // Font color
                            },
                            '& fieldset': {
                                borderColor: 'white', // Outlined border color
                                borderRadius: 10, // Border radius
                            },
                            '&:hover fieldset': {
                                borderColor: 'white', // Outlined border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white', // Outlined border color when focused
                            },
                        },
                    }}
                    InputLabelProps={{
                        sx: {
                            color: 'black', // Label color
                            '&.Mui-focused': {
                                color: 'black', // Label color when focused
                            },
                        },
                    }}
                />
                <br /><br />
                <Button className='button-search' variant="contained" type="submit" color='warning'>Search</Button>
            </form>
        </div>
    );
}
