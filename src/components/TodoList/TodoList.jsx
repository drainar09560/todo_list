import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem'
import styles from './TodoList.module.scss'



export const TodoList = ({todos, toggle, filter, remove}) => {
    

    return (
        <div className={styles.todolist}>
            <div className={styles.todolist__container}>
                {
                    todos
                    // .filter(todo => filter.includes(todo.status) ? true : false)
                    .map(todo => (
                        filter.includes('all')
                        ?
                        <TodoItem 
                            key={todo.id} 
                            title={todo.name} 
                            id={todo.id}
                            toggleStatus={toggle} 
                            status={todo.status}
                            remove={remove}
                        />
                        : 
                        filter.includes(todo.status)
                        &&
                        <TodoItem 
                            key={todo.id} 
                            title={todo.name} 
                            id={todo.id}
                            toggleStatus={toggle} 
                            status={todo.status}
                            remove={remove}
                        />                   
                    ))
                }
            </div>
        </div>
    )
}
