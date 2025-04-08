import { Task } from '../../types/Task'

export const TaskCard = ({ task, handleIsDone }: { task: Task, handleIsDone: (id: number) => void }) => {
  const handleLongContent = (content: string) => {
    if (content.length > 50) {
      return content.slice(0, 30) + '...'
    }
    return content
  }
  
  return (
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
      {task.isDone ? (
        <div className="absolute top-3 right-3 bg-green-500 w-3 h-3 rounded-full" onClick={() => handleIsDone(task.id)}></div>
      ) : (
        <div className="absolute top-3 right-3 bg-red-500 w-3 h-3 rounded-full" onClick={() => handleIsDone(task.id)}></div>
      )}
    </div>
  )
}
