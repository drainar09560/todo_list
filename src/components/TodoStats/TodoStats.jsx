import React from 'react'
import styles from './TodoStats.module.scss'
import itemStyles from '../TodoItem/TodoItem.module.scss'


export const TodoStats = ({todos}) => {
    
    const [stats, setStats] = React.useState(null)
    
    React.useEffect(() => {
        setStats({
            all: todos.length,
            notCompleted: todos.filter((item) => item.status ? false : true).length,
            completed: todos.filter((item) => item.status ? true : false).length,
            percentOfCompleted: todos.filter((item) => item.status ? true : false).length * todos.length + '%',
        })
    },[todos])

    return (
        <div className={styles.todostats}>
            <p>Всего: {stats?.all}</p>
            <p>Не выполнено: {stats?.notCompleted}</p>
            <p>Выполнено: {stats?.completed}</p>
            <p>Процент: {stats?.percentOfCompleted}</p>
        </div>
    )
}
