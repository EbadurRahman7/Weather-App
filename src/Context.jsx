import React, {useState, useEffect, useContext} from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [text, setText] = useState('');
    const [query, setQuery] = useState('');
    const [weatherData, setWeatherData] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const fetchWeatherData = async() => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=dba493e22d394bd12fa4f1f4dd0f7697&units=metric`);
            const data = await response.json();
            if(data) {
                setWeatherData(data);
                console.log(data);
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        setWeatherData([]);
        if(text !== '') {
            fetchWeatherData()
        }
    }, [query]);

    return(
        <AppContext.Provider value={{ text, weatherData, handleChange, setQuery }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};