import { useState } from 'react'
import { getCurrentWeatherByFetch } from '../../apis/get-current-weather'
import { Weather } from '../../types/weather'
import { UserInput } from './user-input'
import { WeatherOutput } from './weather-output'

export const Main = () => {
  const [weather, setWeather] = useState<Weather>()

  const getWeatherByUserPosition = async (nx: number, ny: number) => {
    const response = await getCurrentWeatherByFetch(nx, ny)
    const temperatures = response.filter(
      (item: any) => item['category'] === 'T1H'
    )
    const rains = response.filter((item: any) => item['category'] === 'PTY')
    const skies = response.filter((item: any) => item['category'] === 'SKY')

    setWeather({
      temp: temperatures[0]['fcstValue'],
      rain: rains[0]['fcstValue'],
      sky: skies[0]['fcstValue'],
    })
  }



  return (
    <div>
      <WeatherOutput weather={weather} />
      <UserInput getWeatherByUserPosition={getWeatherByUserPosition} />
    </div>
  )
}
