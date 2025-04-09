import { Weather } from '../../types/weather'

export const WeatherOutput = ({ weather }: { weather: Weather | undefined }) => {
  const convertRainToKorean = (rain: string | undefined) => {
    if (rain == '0') return '지금은 맑아요!'
    if (rain == '1') return '지금은 비가 오네요!'
    if (rain == '2') return '지금은 비/눈이 오네요!'
    if (rain == '3') return '지금은 눈이 오네요!'
    if (rain == '5') return '지금은 빗방울이 오네요!'
    if (rain == '6') return '지금은 빗방울눈날림이 오네요!'
    if (rain == '7') return '지금은 눈날림이 오네요!'
    return ''
  }

  const convertSkyToKorean = (sky: string | undefined) => {
    if (sky == '1') return '☀️'
    if (sky == '3') return '⛅️'
    if (sky == '4') return '☁️'
    return ''
  }

  return (
    <div className="flex flex-col gap-2 shadow-lg outline outline-black/5 box-content size-100 rounded-xl p-4 fixed left-1/2 -translate-x-1/2 top-2/5 -translate-y-1/2 items-center justify-center">
      {weather?.temp && weather?.sky && <p className="text-7xl font-bold">{convertSkyToKorean(weather?.sky)} {weather?.temp} °C</p>}
      {weather?.rain && <p className="mt-10">{convertRainToKorean(weather?.rain)}</p>}
    </div>
  )
}
