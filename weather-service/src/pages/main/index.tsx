import { getCurrentWeatherByFetch } from '../../apis/get-current-weather'
import { UserInputModal } from './user-input-modal'

export const Main = () => {
  const getWeatherByUserPosition = async (nx: number, ny: number) => {
    const response = await getCurrentWeatherByFetch(nx, ny)
    console.log(response)
  }

  return (
    <div>
      <UserInputModal getWeatherByUserPosition={getWeatherByUserPosition} />
    </div>
  )
}
