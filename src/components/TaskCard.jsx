function TaskCard({ task, onDelete, onEdit }) {
  const priorityText = {
    low: 'Düşük',
    medium: 'Orta',
    high: 'Yüksek',
  }

  const priorityColor = {
    low: 'success',
    medium: 'warning',
    high: 'danger',
  }

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body d-flex flex-column">

          <h5 className="card-title fw-bold">
            {task.title}
          </h5>

          <p className="card-text text-secondary flex-grow-1">
            {task.description}
          </p>

          <div className="mb-3">
            <span
              className={`badge bg-${priorityColor[task.priority]} me-2`}
            >
              {priorityText[task.priority]}
            </span>

            <span className="badge bg-secondary">
              {task.status}
            </span>
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-warning flex-fill"
              onClick={() => onEdit(task)}
            >
              Güncelle
            </button>

            <button
              className="btn btn-danger flex-fill"
              onClick={() => onDelete(task.id)}
            >
              Sil
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TaskCard