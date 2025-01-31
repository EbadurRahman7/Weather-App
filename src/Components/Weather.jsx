import React from "react";
import { useGlobalContext } from "../Context";

const Weather = () => {
  const { text, weatherData } = useGlobalContext();
  return (
    <>
      {weatherData.length < 1 ? (
        <span
          className={
            text !== "" ? "text-danger fs-6 fw-semibold ps-3" : "d-none text-danger fs-6 fw-semibold ps-3"
          }
        >
          No City Found
        </span>
      ) : (
        <div className="my-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="card shadow border-0 mx-auto" style={{width: '13rem'}}>
                  <div className="card-body">
                    <h4 className="fs-5 mb-0 text-center">{weatherData?.name} ({weatherData?.sys.country})</h4>
                    <div className="d-flex align-items-center">
                      <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} className="w-100" alt="weather-img" />
                      <div className="d-flex flex-column">
                        <span className="fs-6 fw-semibold text-primary">{parseFloat(weatherData?.main.temp).toFixed(1)}°C</span>
                        <span className="text-capitalize fs-6 fw-semibold">{weatherData?.weather[0].description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card shadow border-0 mx-auto" style={{width: '13rem'}}>
                  <div className="card-body">
                    <div className="d-flex flex-column">
                      <span className="fs-6 fw-semibold text-primary">Feels Like:  {parseFloat(weatherData?.main.feels_like).toFixed(1)}°C</span>
                      <span className="fs-6 fw-semibold text-primary">Max Temp: {parseFloat(weatherData?.main.temp_max).toFixed(1)}°C</span>
                      <span className="fs-6 fw-semibold text-primary">Min temp: {parseFloat(weatherData?.main.temp_min).toFixed(1)}°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;