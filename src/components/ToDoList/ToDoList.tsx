import ToDoListItem from './ToDoListItem'
import { task1, task2 } from '../../utils/tasks'

type Props = {}

function ToDoList(props: Props) {
    return (
        <>
            <ToDoListItem toDoName={'What to learn:'} task={task1} />
            <ToDoListItem toDoName={'Favorite movies:'} task={task2} />
        </>
    )
}
export default ToDoList
