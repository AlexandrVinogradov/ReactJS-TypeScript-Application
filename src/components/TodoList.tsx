import React from 'react';

type TodoListProps = {
    todos: any[]
}


export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return <ul>
        {todos.map(e => {
            return <li className='todo'>
                <label>
                    <input type='checkbox' />
                    <span></span>
                    <i className='material-icons ret-text'>delete</i>
                </label>
            </li>
        })}
    </ul>
}