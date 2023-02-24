import { Button, ButtonGroup, Fab, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { FilterValuesType, TaskType } from '../../utils/tasks'
import ToDoListItemTask from './ToDoListItemTask'
import '../ToDoList/ToDoList.css'
import Typography from '@mui/material/Typography'

type Props = {
    toDoName: string
    initTasks: TaskType[]
}
const ToDoListItem = ({ toDoName, initTasks }: Props) => {
    const [listTasks, setListTasks] = useState<TaskType[]>(initTasks)
    const [filter, setFilter] = useState<FilterValuesType>('all')
    const [newTaskName, setNewTaskName] = useState('')

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
    function addTask() {
        const newTask: TaskType = {
            id: tasksForTodoList.length + 1,
            isDone: false,
            title: newTaskName,
        }
        tasksForTodoList = [...listTasks, newTask]
        setListTasks(tasksForTodoList)
    }
    function changeIsDone(id: number) {
        tasksForTodoList = [...listTasks]
        tasksForTodoList.find((task) => {
            if (task.id === id) {
                task.isDone = !task.isDone
            }
        })
        setListTasks(tasksForTodoList)
    }
    return (
        <>
            <Typography variant="h4" component="h3">
                {toDoName}
            </Typography>
            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                variant="outlined"
                size="small"
                onChange={(event) => setNewTaskName(event.target.value)}
                placeholder="Insert task title:"
            />
            <Fab
                color="primary"
                aria-label="add"
                size="small"
                onClick={() => {
                    addTask()
                }}
            >
                <AddIcon />
            </Fab>

            <ul className="listTasks">
                {tasksForTodoList.map(({ id, title, isDone }) => {
                    return (
                        <li>
                            <ToDoListItemTask
                                key={id}
                                id={id}
                                title={title}
                                isDone={isDone}
                                removeTask={removeTask}
                                changeIsDone={changeIsDone}
                            />
                        </li>
                    )
                })}
            </ul>
            <ButtonGroup
                variant="outlined"
                size="small"
                color="primary"
                aria-label="small outlined button group"
            >
                <Button
                    onClick={() => {
                        changeFilter('all')
                    }}
                >
                    All
                </Button>
                <Button
                    onClick={() => {
                        changeFilter('active')
                    }}
                >
                    Active
                </Button>
                <Button
                    onClick={() => {
                        changeFilter('completed')
                    }}
                >
                    Completed
                </Button>
            </ButtonGroup>
        </>
    )
}
export default ToDoListItem
