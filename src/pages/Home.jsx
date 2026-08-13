import { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

function Home() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks')

        return savedTasks ? JSON.parse(savedTasks) : []
    })

    const [editingTask, setEditingTask] = useState(null)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (newTask) => {
        setTasks((currentTasks) => [...currentTasks, newTask])
    }

    const deleteTask = (taskId) => {
        setTasks((currentTasks) =>
            currentTasks.filter((task) => task.id !== taskId)
        )
    }

    const editTask = (task) => {
        setEditingTask(task)
    }

    const updateTask = (updatedTask) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        )

        setEditingTask(null)
    }

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold">
                    Task Manager
                </h1>

                <p className="text-secondary">
                    Görevlerini oluştur, düzenle ve takip et.
                </p>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <TaskForm
                        onAddTask={addTask}
                        editingTask={editingTask}
                        onUpdateTask={updateTask}
                    />
                </div>
            </div>

            <TaskList
                tasks={tasks}
                onDelete={deleteTask}
                onEdit={editTask}
            />
        </div>
    )
}

export default Home