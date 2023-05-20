"use client"
import { useState } from "react"

async function fetchDesiredCityWeatherData(city: string) {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=abd13680fddca83d98f76b2040b30407`)
    if (!res.ok) {
        console.log("Failed to fecth city data");
    }
    return res.json()
}
const Weather = () => {
    const [weatherDataByCity, setweatherDataByCity] = useState<any>();
    const [cityToSearch, setCityToSearch] = useState("");
    async function handleSubmit(e: any) {
        e.preventDefault();
        let responseDataToSetInWeatherDataByCityState = await fetchDesiredCityWeatherData(cityToSearch)
        setweatherDataByCity(responseDataToSetInWeatherDataByCityState);
    }
    return (
        <div className="flex flex-col justify-center items-center py-8 px-3">
            <form className="space-x-2 flex border-b pb-6" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <input value={cityToSearch}
                        type="search"
                        onChange={(e) => { setCityToSearch(e.target.value) }}
                        placeholder="Search country here"
                        className="border border-t-pink-500 border-b-blue-500 rounded-full py-2 px-2 w-60 sm:w-96"
                        required
                        id="inputForCity"
                    />
                    <label className="ml-2 text-xs text-red-500" htmlFor="inputForCity">Make sure that the first latter is Capital i.e.Lahore, London, Islamabad</label>
                </div>
                <button type="submit" className="py-2 h-11 px-4 border-b border-pink-500 bg-gray-200 hover:bg-gray-300 rounded-md">Search</button>
            </form>
            <div className="py-6">
                <h1 className="text-center text-4xl font-semibold text-gray-700">Results</h1>
                <div className="w-screen max-w-7xl mx-auto text-left px-6 sm:px-16 leading-7 text-lg text-gray-600 font-semibold">
                    {
                        weatherDataByCity ?
                            <div>
                                {weatherDataByCity.cod == "404" ?
                                    <h2 className="uppercase text-xl">{weatherDataByCity.message}</h2> :
                                    <div>
                                        <p>Base: {weatherDataByCity?.base} </p>
                                        <p>Clouds: {weatherDataByCity?.clouds.all} </p>
                                        <p>Cod: {weatherDataByCity?.cod} </p>
                                        <p>Longitude: {weatherDataByCity?.coord.lon} </p>
                                        <p>Latitude: {weatherDataByCity?.coord.lat} </p>
                                        <p>FeelsLike: {weatherDataByCity?.main.feels_like} </p>
                                        <p>Humidity: {weatherDataByCity?.main.humidity} </p>
                                        <p>Pressure: {weatherDataByCity?.main.pressure} </p>
                                        <p>Temprature: {weatherDataByCity?.main.temp} </p>
                                        <p>Maximum Temprature: {weatherDataByCity?.main.temp_max} </p>
                                        <p>Minimum Temprature: {weatherDataByCity?.main.temp_min} </p>
                                        <p>CityName: {weatherDataByCity?.name} </p>
                                        <p>AboutCity(sys)Country: {weatherDataByCity?.sys.country} </p>
                                        <p>AboutCity(sys)Id: {weatherDataByCity?.sys.id} </p>
                                        <p>AboutCity(sys)Sunrise: {weatherDataByCity?.sys.sunrise} </p>
                                        <p>AboutCity(sys)Sunset: {weatherDataByCity?.sys.sunset} </p>
                                        <p>Time Zone: {weatherDataByCity?.timezone}</p>
                                        <p>Visibility: {weatherDataByCity?.visibility}</p>
                                        <p>Weather Condition: {weatherDataByCity?.weather.description}</p>
                                        <p>Weather Condition: {weatherDataByCity?.weather.main}</p>
                                        <p>Wind: {weatherDataByCity?.wind.deg}</p>
                                        <p>Wind: {weatherDataByCity?.wind.speed}</p>
                                    </div>
                                }
                            </div>
                            : <div></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Weather