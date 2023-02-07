import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

type Props = {
    id: number
    title: string
    isDone: boolean
    removeTask: (id: number) => void
}
const ToDoListItemTask = ({ id, title, isDone, removeTask }: Props) => {
    return (
        <>
            <li>
                <FormControlLabel
                    control={<Checkbox checked={isDone} />}
                    label={title}
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
