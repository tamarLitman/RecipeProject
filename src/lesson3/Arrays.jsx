export const Array = () => {

    const fruits = ['apple', 'lemon', 'pear', 'watermelon', 'grapes', 'peach', 'banana', 'strawberry']

    return <>
        <ul>
            {fruits.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </>
}