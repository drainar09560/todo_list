//Functional
import { useEffect,useState } from 'react';
// Apollo hooks
import { useQuery } from '@apollo/client';

import { GET_ALL_TODOS } from '../query/todo';

const useGetTodo = () => {

    const {data, loading} = useQuery( GET_ALL_TODOS ) //get 
    
    const [todo, setTodo] = useState([])

    useEffect(() => {
        if(!loading) {
            setTodo(data.missions.map(obj => {
                    return {
                        ...obj,
                        status: false
                    }
                })
            )
        }
    }, [data])
        
    return [
        todo,
        setTodo
    ]
}   
export default useGetTodo