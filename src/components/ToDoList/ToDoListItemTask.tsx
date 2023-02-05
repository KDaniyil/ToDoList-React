type Props = {
    id: number
    title: string
    isDone: boolean
    removeTask: Function
}
const ToDoListItemTask = ({ id, title, isDone, removeTask }: Props) => {
    return (
        <>
            <li>
                <input type="checkbox" checked={isDone} />
                <span>{title}</span>
                <button
                    onClick={() => {
                        removeTask(id)
                    }}
                >
                    x
                </button>
            </li>
        </>
    )
}
export default ToDoListItemTask
