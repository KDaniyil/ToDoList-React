
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export const skills : TaskType[] = [
    {
        id: 1, title: "HTML", isDone: true
    },
    {
        id: 2, title: "CSS", isDone: true
    },
    {
        id: 3, title: "JS", isDone:true
    },
    {
        id: 4, title: "React", isDone: false
    },
    {
        id: 5, title: "Redux", isDone: false
    }
]
export const movies : TaskType[] = [
    {
        id: 1, title: "Terminator", isDone: true
    },
    {
        id: 2, title: "XXX", isDone:true
    },
    {
        id: 3, title: "Mortal Combat 2021", isDone: true
    }
]

export const songs : TaskType[] = [
    {
        id: 1, title: "Temptation", isDone: true
    },
    {
        id: 2, title: "Ghost", isDone:true
    },
    {
        id: 3, title: "Infectious", isDone: true
    },
    {
        id: 4, title: "Surrender", isDone: false
    }
]
 
export type FilterValuesType = "all" | "completed" | "active"
