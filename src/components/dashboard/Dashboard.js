import React from 'react'
import './Todo.css'
import TodoList from '../Todo/TodoList'

function Dashboard({id, name}) {

    return (
        <div className='dashboard'>
            <div className="todo__app">
               
                {name}
                {id}

                <TodoList/>

            </div>
        </div>
    )
}

export default Dashboard
