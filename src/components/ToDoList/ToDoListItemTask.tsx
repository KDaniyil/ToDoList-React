type Props = {
    id: number
    title: string
    isDone: boolean
}
const ToDoListItemTask = ({ id, title, isDone }: Props) => {
    return (
        <>
            <li>
                <input type="checkbox" checked={isDone} />
                <span>{title}</span>
            </li>
        </>
    )
}
export default ToDoListItemTask
