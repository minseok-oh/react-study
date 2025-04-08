import {
  getCurrentWeatherByAxios,
  getCurrentWeatherByFetch,
} from './apis/get-current-weather'

export const App = () => {
  return (
    <>
      <h1>Weather Service</h1>
      <button
        onClick={async () => console.log(await getCurrentWeatherByFetch(60, 126))}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Get Current Weather By Fetch
      </button>
      <button
        onClick={async () => console.log(await getCurrentWeatherByAxios(60, 126))}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Get Current Weather By Axios
      </button>
    </>
  )
}
