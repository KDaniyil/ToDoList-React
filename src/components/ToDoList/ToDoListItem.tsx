import { useState } from 'react'
import { FilterValuesType } from '../../utils/tasks'
import ToDoListItemTask from './ToDoListItemTask'

type Props = {
    toDoName: string
    initTasks: TaskType[]
}
type TaskType = {
    id: number
    title: string
    isDone: boolean
}
const ToDoListItem = ({ toDoName, initTasks }: Props) => {
    const [listTasks, setListTasks] = useState<TaskType[]>(initTasks)
    const [filter, setFilter] = useState<FilterValuesType>('all')

    function removeTask(id: number) {
        setListTasks(listTasks.filter((task) => task.id !== id))
    }
    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }
    let tasksForTodoList = listTasks
    if (filter === 'completed') {
        tasksForTodoList = listTasks.filter((task) => task.isDone === true)
    }
    if (filter === 'active') {
        tasksForTodoList = listTasks.filter((task) => task.isDone === false)
    }

    return (
        <>
            <h3>{toDoName}</h3>
            <div>
                <input type="text" />
                <button>+</button>
            </div>
            <ul>
                {tasksForTodoList.map(({ id, title, isDone }) => {
                    return (
                        <>
                            <ToDoListItemTask
                                id={id}
                                title={title}
                                isDone={isDone}
                                removeTask={removeTask}
                            />
                        </>
                    )
                })}
            </ul>
            <div>
                <button
                    onClick={() => {
                        changeFilter('all')
                    }}
                >
                    All
                </button>
                <button
                    onClick={() => {
                        changeFilter('active')
                    }}
                >
                    Active
                </button>
                <button
                    onClick={() => {
                        changeFilter('completed')
                    }}
                >
                    Completed
                </button>
            </div>
        </>
    )
}
export default ToDoListItem
