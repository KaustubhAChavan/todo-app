const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

app.get('/todo',(req,res)=> {

})

app.post('/todo',(req,res) => {

})

app.put('/completed',(req,res) => {

})


app.listen(port,() => {
    console.log(`App is listenint on port ${port}`);
})