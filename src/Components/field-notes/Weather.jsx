import { useState } from "react"

export default function Weather() {
    const [weather, setWeather] = useState('')
    const [high, setHigh] = useState('')
    const [low, setLow] = useState('')

    const handleChange = (e) => {
        if (e.target.id === 'weather') setWeather(e.target.value)
        if (e.target.id === 'tempLow') setLow(e.target.value)
        if (e.target.id === 'tempHigh') setHigh(e.target.value)
    }

    return (
    <section id="" className="m-2 row align-items-center justify-content-between">
        <div className="col-auto input-group input-group-sm">
            <label className="input-group-text" name="weather">Weather: </label><input id="weather" className="form-control" type="text" placeholder="Sunny" onChange={handleChange} value={weather}></input>
            <label className="input-group-text text-wrap" name="tempLow">Temperature Low: </label><input id="tempLow" className="form-control" type="text" placeholder="-3 C" onChange={handleChange} value={low}></input>
            <label className="input-group-text" name="tempHigh">Temperature High: </label><input id="tempHigh" className="form-control" type="text" placeholder="33 C" onChange={handleChange} value={high}></input>
        </div>
    </section>
    )
}