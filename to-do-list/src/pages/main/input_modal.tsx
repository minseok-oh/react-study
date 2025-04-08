import { useState } from "react"
import { Task } from "../../types/Task"

export const InputModal = ({ onAddTask }: { onAddTask: (task: Task) => void }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleAddTask = () => {
    onAddTask({
      id: Date.now(),
      title,
      content,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      isDone: false,
    })
  }

  return (
    <div className="flex flex-col gap-3 rounded-xl p-6 shadow-lg outline outline-black/5 fixed bottom-10 right-10">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <input type="date" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <button onClick={handleAddTask}>Add</button>
    </div>
  )
}
