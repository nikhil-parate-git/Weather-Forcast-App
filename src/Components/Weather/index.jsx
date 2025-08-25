import { CiTempHigh } from "react-icons/ci";
import { WiStrongWind, WiHumidity, WiCloud } from "react-icons/wi";
const Weather=({weatherdetails})=>{
    const{location,current}=weatherdetails;
    return(
    <div>
        <h2>{location.name},{location.country}</h2>
      <br />

       <div className="d-flex align-items-center mb-2">
        <CiTempHigh style={{ fontSize: "30px", marginRight: "8px" }} />
        <p className="mb-0">Temp: {current.temp_c}°C</p>
      </div>

       <div className="d-flex align-items-center mb-2">
        <WiStrongWind style={{ fontSize: "30px", marginRight: "10px", color: "skyblue" }} />
        <p className="mb-0">Wind: {current.wind_kph} kph</p>
      </div>

      <div className="d-flex align-items-center mb-2">
        <WiHumidity style={{ fontSize: "30px", marginRight: "10px", color: "daggerblue" }} />
        <p className="mb-0">Humidity: {current.humidity}%</p>
      </div>

      <div className="d-flex align-items-center mb-2">
        <WiCloud style={{ fontSize: "30px", marginRight: "10px", color: "gray" }} />
        <p className="mb-0">Condition: {current.condition.text}</p>
      </div>
        </div>
    )
}
export default Weather