import React, { useState } from "react";

export function CreateToDo(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>Create To Do</h1>
            <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input style ={{ width: "20%" , height: "50px", fontSize: "18px", marginBottom: "10px"
                }}  
                type="text" placeholder="title" onChange={function(e) {
                    const value = e.target.value;
                    setTitle(value);
                }} /> <br />
                <input style ={{ width: "20%" , height: "50px", fontSize: "18px", marginBottom: "10px"
                }}
                type="text" placeholder="description" onChange={function(e) {
                    const value = e.target.value;
                    setDescription(value);
                }} /> <br />
                <button style ={{ width: "20%" , height: "50px", fontSize: "18px", marginBottom: "10px"}}
                onClick={() => {
                    fetch('http://localhost:3000/todo', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            completed: false
                        })
                    })
                    .then(async function(res) {
                        const data = await res.json();
                        alert('To Do Created');
                    })
                    .catch(function(err) {
                        console.log('Error:', err);
                    })
                }
            }>Create To Do</button>
            </form>
        </div>
    )
}