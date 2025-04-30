import { useQuery } from '@tanstack/react-query'

interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

const getTodos = async (): Promise<Todo[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    // if (!response.ok) {
    //     throw new Error('Network response was not ok')
    // }

    const data = await response.json()
    return data
}

export const HomePage = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos,
        retry: 1,
    })

    if (isError) return <div>Error</div>

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            {data ? data.map((todo) => <div key={todo.id}>{todo.title}</div>) : 'no data'}
        </div>
    )
}
