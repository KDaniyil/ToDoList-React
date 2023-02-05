import { useState } from 'react'
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
    const [listTasks, setListTasks] = useState(initTasks)

    function removeTask(id: number) {
        setListTasks(listTasks.filter((task) => task.id !== id))
    }
    return (
        <>
            <h3>{toDoName}</h3>
            <div>
                <input type="text" />
                <button>+</button>
            </div>
            <ul>
                {listTasks.map(({ id, title, isDone }) => {
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </>
    )
}
export default ToDoListItem
