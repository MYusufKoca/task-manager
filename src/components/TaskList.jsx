import TaskCard from './TaskCard'

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div className="mt-5">
      <h2 className="mb-4">Görevler</h2>

      {tasks.length === 0 ? (
        <div className="alert alert-info">
          Henüz görev eklenmedi.
        </div>
      ) : (
        <div className="row g-4">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDelete}
               onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TaskList