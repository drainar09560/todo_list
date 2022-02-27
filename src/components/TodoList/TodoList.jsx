import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem'
import styles from './TodoList.module.scss'



export const TodoList = ({todos, toggle, filter}) => {
    

    return (
        <div className={styles.todolist}>
            <div className={styles.todolist__container}>
                {
                    todos.map((todo) => (
                        <TodoItem 
                            key={todo.id} 
                            title={todo.name} 
                            id={todo.id}
                            toggleStatus={toggle} 
                            status={todo.status}
                        />                     
                    ))
                }
            </div>
        </div>
    )
}
