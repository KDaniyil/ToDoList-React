import { Button, ButtonGroup, Fab, Grid, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { FilterValuesType } from '../../utils/tasks'
import ToDoListItemTask from './ToDoListItemTask'
import '../ToDoList/ToDoList.css'
import Typography from '@mui/material/Typography'
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
            <Typography variant="h4" component="h3">
                {toDoName}
            </Typography>
            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                variant="outlined"
                size="small"
            />
            <Fab color="primary" aria-label="add" size="small">
                <AddIcon />
            </Fab>

            <ul className="listTasks">
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
