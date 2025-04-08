import { useEffect, useState } from 'react'
import { Task } from '../../types/Task'

export const Main = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Task 1',
      content: 'Content 1',
      startDate: '2021-01-01',
      endDate: '2021-01-01',
    },
    {
      id: '2',
      title: 'Task 2',
      content: 'Content 2',
      startDate: '2021-01-01',
      endDate: '2021-01-01',
    },
  ])

  useEffect(() => {
    setTasks([
      {
        id: '1',
        title: 'Task 1',
        content: 'Content 1',
        startDate: '2021-01-01',
        endDate: '2021-01-01',
      },
      {
        id: '2',
        title: 'Task 2',
        content: 'Content 2',
        startDate: '2021-01-01',
        endDate: '2021-01-01',
      },
    ])
  }, [])

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.content}</p>
          <p>{task.startDate}</p>
          <p>{task.endDate}</p>
        </div>
      ))}
      <button>Add Task</button>
    </>
  )
}
