import { useEffect, useState } from 'react'
import { Position } from '../../types/position'

export function UserInput({
  getWeatherByUserPosition,
}: {
  getWeatherByUserPosition: (nx: number, ny: number) => void
}) {
  const [position, setPosition] = useState<Position[]>([])
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/position_info.json')
        const data = await response.json()
        setPosition(data)
      } catch (error) {
        console.error('에러가 발생했습니다.', error)
      }
    }
    fetchData()
  }, [])

  const handleUserPosition = () => {
    const selectedLocation = position.find(
      (item) => item.location === selectedPosition
    )

    if (selectedLocation) {
      getWeatherByUserPosition(selectedLocation.x, selectedLocation.y)
    }
  }

  return (
    <div className="shadow-lg outline outline-black/5 box-content w-70 rounded-xl p-4 flex flex-col gap-6 fixed left-1/2 -translate-x-1/2 top-4/5">
      <select onChange={(e) => setSelectedPosition(e.target.value)}>
        {position.map((item) => (
          <option key={item.location} value={item.location}>
            {item.location}
          </option>
        ))}
      </select>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-md"
        onClick={() => handleUserPosition()}
      >
        Find
      </button>
    </div>
  )
}
