import { useEffect, useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import Weather from "./Components/Weather";
import "./App.css";
const App = () => {
  const [allvalues, setvalues] = useState({
    city: "nagpur",
    location: {},
    current: {},
    error: "",
    loading: false,
  });
  const fetchweather = async () => {
    if (!allvalues.city) {
      setvalues({
        ...allvalues,
        error: "Please enter a city name",
        loading: false,
      });
      return;
    }
    setvalues({ ...allvalues, loading: true, error: "" });

    const api = `https://api.weatherapi.com/v1/current.json?key=231f1c78815f44e4ade42427252508&q=${allvalues.city}&aqi=yes`;
    const options = {
      method: "Get",
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await fetch(api, options);
      const data = await response.json();
      if (data.error) {
        setvalues({
          ...allvalues,
          city: "",
          location: {},
          current: {},
          error: data.error.message,
          loading: false,
        });
      } else {
        setvalues({
          ...allvalues,
          location: data.location,
          current: data.current,
          error: "",
          loading: false,
        });
      }
    } catch (error) {
      setvalues({
        ...allvalues,
        location: {},
        current: {},
        error: "Something went wrong. Please try again.",
        loading: false,
      });
    }
  };
  useEffect(() => {
    fetchweather();
  }, []);
  return (
    <>
      <div className="container-fluid weather-app d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="card shadow-lg bg-dark text-white p-4">
          <div className="text-center mb-4">
            <TiWeatherPartlySunny className="text-warning" size={50} />
            <h1 className=" my-head fw-bold text-primary">Weather Forecast</h1>
          </div>

          <div className=" flex-column flex-md-row gap-2 mb-3">
            <input
              type="text"
              className="form-control mb-3"
              value={allvalues.city}
              onChange={(e) =>
                setvalues({ ...allvalues, city: e.target.value })
              }
              placeholder="Enter city name"
            />
            <button className="btn btn-primary w-100 " onClick={fetchweather}>
              Get Weather
            </button>
          </div>

          <p className="text-danger">{allvalues.error}</p>

          {
          allvalues.loading ? (
            <div className="spinner-border text-primary mx-auto" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : allvalues.location.name ? (
            <Weather
              weatherdetails={{
                location: allvalues.location,
                current: allvalues.current,
              }}
            />
          ) : 
          null
          }
        </div>
      </div>
    </>
  );
};
export default App;
