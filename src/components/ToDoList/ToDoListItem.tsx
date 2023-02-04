import ToDoListItemTask from './ToDoListItemTask'

type Props = {
    toDoName: string
    task: TaskType[]
}
type TaskType = {
    id: number
    title: string
    isDone: boolean
}
const ToDoListItem = ({ toDoName, task }: Props) => {
    return (
        <>
            <h3>{toDoName}</h3>
            <div>
                <input type="text" />
                <button>+</button>
            </div>
            <ul>
                {task.map(({ id, title, isDone }) => {
                    return (
                        <>
                            <ToDoListItemTask
                                id={id}
                                title={title}
                                isDone={isDone}
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
