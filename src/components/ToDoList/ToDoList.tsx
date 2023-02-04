type Props = {
    title: string
}
function ToDoList({ title }: Props) {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type="text" />
                <button>+</button>
            </div>
            <ul>
                <li>
                    <input type="checkbox" checked={true} name="" id="" />
                    <span>CSS&HTML</span>
                </li>
                <li>
                    <input type="checkbox" checked={true} name="" id="" />
                    <span>JS</span>
                </li>
                <li>
                    <input type="checkbox" checked={false} name="" id="" />
                    <span>React</span>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
export default ToDoList
