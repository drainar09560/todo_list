import styles from './TodoForm.module.scss'
import React from 'react'

export const TodoForm = ({addTodo}) => {
    

    const inputRef = React.useRef()

    const createTodo = () => {
        addTodo(inputRef.current.value)
        inputRef.current.value = ''
    }

    return (
        <div className={styles.todoform}>
            <div className={styles.todoform__container}>
                <input type="text" placeholder='what todo' className={styles.todoform__input} ref={inputRef}/>
                <button className={styles.todoform__submit} onClick={createTodo}>Submit</button>
            </div>
        </div>
    )
}
