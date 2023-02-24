import ToDoListItem from './ToDoListItem'
import { movies, skills, songs } from '../../utils/tasks'
import { Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

type Props = {}

function ToDoList(props: Props) {
    return (
        <Container>
            <Typography
                variant="h2"
                component="h2"
                align="center"
                sx={{ marginTop: '20px' }}
            >
                To Do List
            </Typography>
            <Grid
                container
                justifyContent="center"
                spacing={4}
                sx={{ padding: '60px 0' }}
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
