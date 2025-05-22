export function Todos({ todos }) {

    function handleEdit(id) {
        alert(`Edit todo with id: ${id}`);
    }

    function handleDelete(id) {
        alert(`Delete todo with id: ${id}`);
    }
    return (
        <div>
            <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>To Do List</h1>
            <table style={{ width: "50%", margin: "auto", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Title</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Description</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Status</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Edit</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {(Array.isArray(todos) ? todos : []).map(todo => (
                        <tr key={todo.id}>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{todo.title}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{todo.description}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>
                                {todo.completed ? "Completed" : "Not Completed"}
                            </td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>
                                <button onClick={() => handleEdit(todo.id)}>Edit</button>
                            </td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>
                                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );}