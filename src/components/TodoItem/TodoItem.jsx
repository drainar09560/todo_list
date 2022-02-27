import React from 'react'
import styles from './TodoItem.module.scss'

export const TodoItem = ({id, toggleStatus, status, title}) => {
    const rootClasses = [styles.todoitem]
    // const [completed, setCompleted] = React.useState(false)
    
    if(status) {
        rootClasses.push(styles.todoitem_completed)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <p className={styles.todoitem__title}>{title}</p>
            <input type="checkbox" className={styles.todoitem__input} onChange={() => toggleStatus(id)} checked={status}/>  
        </div>
    )
}
