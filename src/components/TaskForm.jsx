import { useEffect, useState } from 'react'

function TaskForm({ onAddTask, editingTask, onUpdateTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('medium')

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title)
      setDescription(editingTask.description)
      setPriority(editingTask.priority)
    }
  }, [editingTask])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (title.trim() === '') {
      alert('Lütfen görev adı girin.')
      return
    }

    if (editingTask) {
      const updatedTask = {
        ...editingTask,
        title: title,
        description: description,
        priority: priority,
      }

      onUpdateTask(updatedTask)
    } else {
      const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        priority: priority,
        status: 'Bekliyor',
      }

      onAddTask(newTask)
    }

    setTitle('')
    setDescription('')
    setPriority('medium')
  }

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="mb-4">
        {editingTask ? 'Görevi Güncelle' : 'Yeni Görev Ekle'}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Görev Adı</label>

          <input
            type="text"
            className="form-control"
            placeholder="Görev adını girin"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Açıklama</label>

          <textarea
            className="form-control"
            rows="3"
            placeholder="Görev açıklamasını girin"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Öncelik</label>

          <select
            className="form-select"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            <option value="low">Düşük</option>
            <option value="medium">Orta</option>
            <option value="high">Yüksek</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          {editingTask ? 'Değişiklikleri Kaydet' : 'Görev Ekle'}
        </button>
      </form>
    </div>
  )
}

export default TaskForm