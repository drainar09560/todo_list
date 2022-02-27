import { TodoFilter } from '../TodoFilter/TodoFilter';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoList } from '../TodoList/TodoList';
import { TodoStats } from '../TodoStats/TodoStats';
import styles from './Todo.module.scss';
import React from 'react'
import useGetTodo from '../../hooks/useGetTodo';



export const Todo = () => {
    
    const [todos, setTodos] = useGetTodo()

    const [filter, setFilter] = React.useState(false)

    const addTodo = (title) => {
        if (title === ''){
            throw new Error('input is empty')
        }
        setTodos(prev => [
                ...prev,
                {__typename: 'Mission', name: title, id: Math.random(), status: false}
            ]
        )
    }
    const toggleStatus = (id) => {
        setTodos(todos.map(item => {
            if(item.id === id){
                return {
                    ...item,
                    status: !item.status
                }
            }
            return item
        }))
        // setTodos(prev => prev.filter(item => item.id === id))
    } 
    
    const filteredTodos = (e) => {
        filter ? setFilter(false) : setFilter(e.target.name)
    }
    
    return(
        <div className={styles.todo}>
            <div className={styles.todo__container}>
                <TodoStats todos={todos}/>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} toggle={toggleStatus} filter={filter}/>
                <TodoFilter filter={filteredTodos} options={[
                    {value: 'all', text: 'Все'},
                    {value: 'completed', text: 'Завершеные'},
                    {value: 'notcompleted', text: 'Незавершенные'},
                ]}/>
            </div>
        </div>
    )
}