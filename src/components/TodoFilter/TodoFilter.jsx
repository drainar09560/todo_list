import styles from './TodoFilter.module.scss'

export const TodoFilter = ({filter, options}) => {

    return (
        <div className={styles.todofilters}>
            {
                options.map(item => {
                    return (
                        <div className={styles.todofilters__item} key={item.value}>
                            <input type="checkbox" className={styles.todofilters__checkbox} onChange={(e) => filter(e)}/>
                            <p className={styles.todofilters__text}>{item.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
