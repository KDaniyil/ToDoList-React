import ToDoListItem from './ToDoListItem'
import { movies, skills, songs } from '../../utils/tasks'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'

type Props = {}

function ToDoList(props: Props) {
    return (
        <Container>
            <Grid
                container
                spacing={6}
                sx={{ padding: '60px 0', marginLeft: '60px' }}
            >
                <Grid item>
                    <ToDoListItem
                        toDoName={'What to learn:'}
                        initTasks={skills}
                    />
                </Grid>
                <Grid item>
                    <ToDoListItem
                        toDoName={'Movies to watch:'}
                        initTasks={movies}
                    />
                </Grid>
                <Grid item>
                    <ToDoListItem
                        toDoName={'Songs to listen:'}
                        initTasks={songs}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
export default ToDoList
