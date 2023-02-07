import ToDoListItem from './ToDoListItem'
import { movies, skills } from '../../utils/tasks'
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
                        toDoName={'Favorite movies:'}
                        initTasks={movies}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
export default ToDoList
