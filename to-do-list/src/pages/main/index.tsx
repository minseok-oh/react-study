import { useState } from 'react'
import { TaskCard } from '../../components/main/task-card'

import { Task } from '../../types/Task'
import { InputModal } from './input_modal'

export const Main = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isInputModalOpen, setIsInputModalOpen] = useState(false)

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task])
    setIsInputModalOpen(false)
  }

  const handleIsDone = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task))
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-10 box-content">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} handleIsDone={handleIsDone} />
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
