import { TodoFilter } from '../TodoFilter/TodoFilter';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoList } from '../TodoList/TodoList';
import { TodoStats } from '../TodoStats/TodoStats';
import styles from './Todo.module.scss';
import React from 'react'
import useGetTodo from '../../hooks/useGetTodo';



export const Todo = () => {
    
    const [todos, setTodos] = useGetTodo()

    const [filter, setFilter] = React.useState(['all'])

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
    } 
    
    const filteredTodos = (option) => {
        // option === 'all' ? setFilter([]) : filter.includes(option) ? setFilter(filter.filter(item => item !== option)) : setFilter(prev => [...prev, option])
        filter.includes(option) ? setFilter(prev => prev.filter(item => item !== option)) : setFilter(prev => [...prev, option])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
        console.log('click');
    }

    console.log('filter: ' + filter);
    console.log(todos);
    
    return(
        <div className={styles.todo}>
            <div className={styles.todo__container}>
                <TodoStats todos={todos}/>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} toggle={toggleStatus} filter={filter} remove={deleteTodo}/>
                <TodoFilter filter={filteredTodos} options={[
                    {value: 'all', text: 'Все', checked: true},
                    {value: true, text: 'Завершеные'},
                    {value: false, text: 'Незавершенные'},
                ]}/>
            </div>
        </div>
    )
}