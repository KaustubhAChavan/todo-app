const zod = require('zod');

/*
    Zod schema for a todo item
    - id: string
    - title : string
    - description : string
    - completed : boolean
*/

const createTodoObject = zod.object({
    title: zod.string().min(1, 'Title is required'),
    description: zod.string().optional(),
    completed: zod.boolean().default(false),
});

const updateTodoObject = zod.object({
    id: zod.string()
});

module.exports = {
    createTodoObject,
    updateTodoObject
};