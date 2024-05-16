import { useParams } from "react-router"

export const Welcome = () => {

    // נוסף שמקבל לתוכו את כל הפרמטרים שנשלחו לקומפוננטה דרך הניתוב hook 
    // המשתנה יכיל אןובייקט של מץפתחות לפי שמות הפרמטרים שנשלחו בניתוב
    // { name: 'Sari', pass: '3207' }
    const params = useParams()

    return <>
        <h1>Welcome to {params.name}!</h1>
        <h2>Your password is {params.pass}</h2>
    </>
}