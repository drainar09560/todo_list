import React from 'react'

const GetStats = (data) => {

    const [stats, setStats] = React.useState({
        all: 0,
        notCompleted: 0,
        completed: 0,
        percentOfCompleted: 0,
    })

    React.useEffect(() => {
        const all = data.length
        const comp = data.filter(item => item.status ? true : false).length

        setStats({
            all: all,
            notCompleted: all - comp,
            completed: comp,
            percentOfCompleted: Math.ceil(comp * 100 / all) + '%',
        })
    },[data])

    return stats
}


export default GetStats;