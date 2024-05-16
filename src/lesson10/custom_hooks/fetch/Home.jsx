import { useFetch } from "./useFetch"

export const Home = () => {

    const { data: list, error } = useFetch('https://jsonplaceholder.typicode.com/todos')

    return <>
        {error && <p>{error}</p>}
        {list && list.map((item, index) => <p key={index}>{item.title}</p>)}
    </>
}