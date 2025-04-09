import axios from 'axios'

const getWeatherApiUrl = (nx: number, ny: number) => {
  const uri = import.meta.env.VITE_WEATHER_API_URL
  const serviceKey = import.meta.env.VITE_WEATHER_API_KEY
  const baseDate = new Date().toISOString().split('T')[0].replace(/-/g, '')
  
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const baseTime = `${hours}${minutes}`;

  return `${uri}?serviceKey=${serviceKey}&pageNo=1&numOfRows=100&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`
}

export const getCurrentWeatherByFetch = async (nx: number, ny: number) => {
  const baseUrl = getWeatherApiUrl(nx, ny)
  const response = await fetch(baseUrl)
  const data = await response.json()

  return data.response.body.items.item
}

export const getCurrentWeatherByAxios = async (nx: number, ny: number) => {
  const baseUrl = getWeatherApiUrl(nx, ny)
  const response = await axios.get(baseUrl)
  return response.data.response.body.items.item
}
