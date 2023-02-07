import { CssBaseline } from '@mui/material'
import React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import ToDoList from './components/ToDoList/ToDoList'

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <ToDoList />
        </StyledEngineProvider>
    )
}

export default App
