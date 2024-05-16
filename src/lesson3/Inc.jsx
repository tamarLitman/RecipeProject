import { useState } from "react";

export const Inc = () => {

    // let num = 1
    // useState - שימוש במשתנים שריאקט אחראית עליהם ותאפשר רינדור מחדש
    // מגדירים מערך
    // המקום הראשון - יכיל המשתנה בעצמו
    // המקום השני יכיל פונקציה שאחראית על עדכון של ערך חדש למשתנה
    // בתוך הסוגריים - נציב ערך התחלתי - לא חובה
    const [num, setNum] = useState(1)
    const [x, setX] = useState(1)

    const plus = () => {
        // num++
        // console.log(num);
        // setNum(num++) - לא תקין
        // הצבת ערך חדש
        // setNum(5)
        // setNum(num + 1)
        // שימוש בערך הקודם של המשתנה
        // setFlag(flag => !flag)
        // setNum(num => num + 1)
        // הצבת ערך של משתנה אחר
        // let x = num + 1
        // setNum(x)
        setNum(num => num + x)
    }

    const set=(e)=>{
        console.log(e);
        setX(parseInt(e.target.value))
    }

    return <>
        <h1>{num}</h1>
        <input placeholder='inc by' onBlur={(event) => set(event)}></input>
        <button onClick={plus}>inc num</button>
    </>
}