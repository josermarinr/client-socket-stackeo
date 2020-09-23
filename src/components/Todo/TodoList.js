import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const add = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos =  [todo, ...todos]

        setTodos(newTodos)

    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id ===id){
                todo.isComplete = !todo.isComplete
            }

            return todo
        });

        setTodos(updatedTodos)
    }
    
    return (
        <div>
            <div className="todo__header">
                <h1>implementation of sockets</h1>

            </div>

            <TodoForm onSubmit={add}/>
            
            <Todo 
            todos={todos} 
            updateTodo={updateTodo}
            completeTodo={completeTodo} 
            removeTodo={removeTodo}/>
        </div>
    )
}

export default TodoList
