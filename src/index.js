import './styles.css';

import {Todo, Todolist} from './classes';
import {crearTodoHtml} from './js/componentes';

export const todoList = new Todolist();

todoList.todos.array.forEach(todo => crearTodoHtml( todo ));

//const newTodo = new Todo ('Aprender JavaScript');
//todoList.nuevoTodo (newTodo);