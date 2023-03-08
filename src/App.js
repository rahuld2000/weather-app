import React from "react";
import "./App.css";
const Weather = () => {
    const [city, setCity] = React.useState(null);
    const[other,setOther]=React.useState(null);
    const [search, setSearch] = React.useState("");
    const [place, setPlace] = React.useState("New York");
    React.useEffect(() => {
        const api = async () => {
            const Url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=f61848ab5fa06141797d0d033e36ad85`;
            const response = await fetch(Url);
            const data = await response.json();
            setCity(data.main);
            setOther(data);
            console.log(data);
            
        };
        api();
    }, [place]);
    function handleClick(e) {
        e.preventDefault();
        setPlace(search)
        setSearch("")
    }
    function handlePress(event) {
        if (event.key === "Enter") {
            console.log("press")
            setPlace(search);
            setSearch("")
        }
    }
    return (
        <div className="container-bg">
            <form className="search-box" onSubmit={handlePress}>
                <input type="search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button onClick={handleClick}>search</button>
            </form>
        

            { !city ? (
            <p>No Data Found</p>) : (<div className="weather-info">
            <div className="container">
                <div className="cont_1">
                  <div className="temp"><span className="temp-no">{city.temp}</span> <span className="temp-unit">°C</span></div>
                  <img src={`http://openweathermap.org/img/wn/${other.weather[0].icon}@2x.png`} alt="error" />
                  </div>
                    <p> feel like {city.feels_like}</p>
                    <p>weather  {other.weather[0].description}</p>
                    <p>name {other.name}</p>
                    <span>country {other.sys.country}</span> 
                    
             
                </div>
                </div>) }

        </div>
    )
}
export default Weather;