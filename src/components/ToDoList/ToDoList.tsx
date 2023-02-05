import ToDoListItem from './ToDoListItem'
import { movies, skills } from '../../utils/tasks'

type Props = {}

function ToDoList(props: Props) {
    return (
        <>
            <ToDoListItem toDoName={'What to learn:'} initTasks={skills} />
            {/* <ToDoListItem toDoName={'Favorite movies:'} task={movies} /> */}
        </>
    )
}
export default ToDoList
