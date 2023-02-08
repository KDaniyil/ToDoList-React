import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

type Props = {
    id: number
    title: string
    isDone: boolean
    removeTask: (id: number) => void
    changeIsDone: (id: number) => void
}
const ToDoListItemTask = ({
    id,
    title,
    isDone,
    removeTask,
    changeIsDone,
}: Props) => {
    return (
        <>
            <li>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isDone}
                            onClick={() => {
                                changeIsDone(id)
                            }}
                        />
                    }
                    label={
                        <span className={isDone ? 'text-decor' : ''}>
                            {title}
                        </span>
                    }
                />
                <IconButton
                    aria-label="delete"
                    size="small"
                    color="primary"
                    onClick={() => {
                        removeTask(id)
                    }}
                >
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </li>
        </>
    )
}
export default ToDoListItemTask
