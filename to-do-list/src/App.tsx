import { useState } from 'react'
import './App.css'
import { Task } from './types/Task'

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <div>
      <h1>To-Do List</h1>
    </div>
  )
}
