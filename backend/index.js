const express = require('express')
const { createTodoObject, updateTodoObject } = require('./types')
const client = require('./db')
const app = express()

const port = 3000

app.use(express.json())

app.get('/todo',async (req,res)=> {
    try {
        const result = await client.query('SELECT * FROM todos');
        res.status(200).json({
            message: "Todos fetched successfully",
            data: result.rows
        });
    } catch (err) {
        console.error('Error fetching todos:', err);
        res.status(500).json({
            error: "Internal server error"
        })
    } 
})

app.post('/todo', async (req,res) => {
    const createTodo = req.body
    const parsedCreateTodo = createTodoObject.safeParse(createTodo)

 if(!parsedCreateTodo.success) {
    return res.status(401).json({
        error: "You sent wrong data"
    })
 }else {
        // const { title, description, completed } = parsedCreateTodo.data;
    await client.query('INSERT INTO todos (title, description, completed) VALUES ($1, $2, $3)', 
                    [parsedCreateTodo.data.title, parsedCreateTodo.data.description, parsedCreateTodo.data.completed])
    .then(() => {
        console.log('Todo inserted successfully');
        res.status(200).json({
            message: "Todo created successfully",
            data: parsedCreateTodo.data
        })
    })
    .catch(err => {
        console.error('Error inserting todo:', err);
    });
}

})

app.put('/completed',async (req,res) => {
    const id = req.body
    const parsedUpdateTodo = updateTodoObject.safeParse(id)

 if(!parsedUpdateTodo.success) {
    return res.status(401).json({
        error: "You sent wrong data"
    })
 }else {
    await client.query('UPDATE todos SET completed = true WHERE id = $1', [parsedUpdateTodo.data.id])
    .then(() => {
        res.status(200).json({
            message: "Todo marked as completed"
        });
    })
    .catch(err => {
        console.error('Error updating todo:', err);
        res.status(500).json({
            error: "Internal server error"
        });
    });
}
})


app.listen(port,() => {
    console.log(`App is listenint on port ${port}`);
})