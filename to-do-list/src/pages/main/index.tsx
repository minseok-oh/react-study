import { useEffect, useState } from 'react'
import { Task } from '../../types/Task'
import { InputModal } from './input_modal'
import '../../styles/globals.css'

const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    content:
      'Content isContent isContent isContent isContent isContent isContent isContent isContent isContent isContent isContent isContent isContent isContent is',
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-01'),
    isDone: false,
  },
  {
    id: 2,
    title: 'Task 2',
    content: 'Content 2',
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-01'),
    isDone: false,
  },
]

export const Main = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [isInputModalOpen, setIsInputModalOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleLongContent = (content: string) => {
    if (content.length > 50) {
      return content.slice(0, 30) + '...'
    }
    return content
  }

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task])
    setIsInputModalOpen(false)
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-10 box-content">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col gap-3 rounded-xl p-6 shadow-lg outline outline-black/5 hover:outline-black/10 box-content size-50 relative"
          >
            <p className="text-2xl font-bold">📌 {task.title}</p>
            <p>{handleLongContent(task.content)}</p>
            <p className="absolute bottom-7">
              {task.startDate.toLocaleDateString()} ~{' '}
              {task.endDate.toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
      {isInputModalOpen ? (
        <InputModal onAddTask={handleAddTask} />
      ) : (
        <button
          onClick={() => setIsInputModalOpen(true)}
          className="fixed bottom-10 right-10"
        >
          Add Task
        </button>
      )}
    </>
  )
}
