import React from 'react'
import styles from './TodoItem.module.scss'

export const TodoItem = ({id, toggleStatus, status, title, remove}) => {
    const rootClasses = [styles.todoitem]
    
    if(status) {
        rootClasses.push(styles.todoitem_completed)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <p className={styles.todoitem__title}>{title}</p>
            <div>
                <input type="checkbox" className={styles.todoitem__input} onChange={() => toggleStatus(id)} checked={status}/>
                <button onClick={() => remove(id)}>del</button>
            </div>
        </div>
    )
}
