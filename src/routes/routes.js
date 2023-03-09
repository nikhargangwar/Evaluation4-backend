const express = require('express');

const {getAllTodos,getTodosById,postTodo,deleteTodo,patchTodoById,putTodoById} = require('./controllers');
const {validateGetId,validatePostSchema,validateLogin,validateReq} = require('../src/middleware/joiValidator');
const router = express.Router();

router.get('/allTypes',validateLogin);



module.exports = todoRouter;

