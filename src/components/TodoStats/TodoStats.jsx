import React from 'react'
import styles from './TodoStats.module.scss'
import getStats from '../../hooks/getStats'


export const TodoStats = ({todos}) => {
    
    const {all, notCompleted, completed, percentOfCompleted} = getStats(todos)

    return (
        <div className={styles.todostats}>
            <p>Всего: {all}</p>
            <p>Не выполнено: {notCompleted}</p>
            <p>Выполнено: {completed}</p>
            <p>Процент: {percentOfCompleted}</p>
        </div>
    )
}
