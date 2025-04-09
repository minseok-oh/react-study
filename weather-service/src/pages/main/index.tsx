import { useState } from 'react'
import { getCurrentWeatherByFetch } from '../../apis/get-current-weather'
import { Weather } from '../../types/weather'
import { UserInputModal } from './user-input-modal'

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

  const convertRainToKorean = (rain: string | undefined) => {
    if (rain == '0') return '없음'
    if (rain == '1') return '비'
    if (rain == '2') return '비/눈'
    if (rain == '3') return '눈'
    if (rain == '5') return '빗방울'
    if (rain == '6') return '빗방울눈날림'
    if (rain == '7') return '눈날림'
    return ''
  }

  const convertSkyToKorean = (sky: string | undefined) => {
    if (sky == '1') return '맑음'
    if (sky == '3') return '구름 많음'
    if (sky == '4') return '흐림'
    return ''
  }

  return (
    <div>
      <div>
        <p>온도: {weather?.temp}</p>
        <p>하늘상태: {convertSkyToKorean(weather?.sky)}</p>
        <p>강수상태: {convertRainToKorean(weather?.rain)}</p>
      </div>
      <UserInputModal getWeatherByUserPosition={getWeatherByUserPosition} />
    </div>
  )
}
