import { useRef, useState } from 'react'
import './style.css'



export const Form = () => {
    const [flag, setFlag] = useState(false)
    const senderRef = useRef()
    const getterRef = useRef()
    const genderRef = useRef()
    const typeRef = useRef()
    const blessingRef = useRef()
    const secondBlessingRef = useRef()
    return <>
        <form onSubmit={(e) => { e.preventDefault(); setFlag(true) }}>
            <input placeholder="שמך" ref={senderRef}></input>
            <input placeholder="למי אתה רוצה לכתוב?" ref={getterRef}></input>
            <input placeholder="gender" ref={genderRef}></input>
            <select ref={typeRef}>
                <option>barMitzva</option>
                <option>birthday</option>
                <option>baby</option>
            </select>
            <input placeholder="איחול" ref={blessingRef}></input>
            <input placeholder='איחול משני' ref={secondBlessingRef}></input>
            <input type="submit" ></input>
        </form>
        {flag && <Show sender={senderRef.current.value} getter={getterRef.current.value}
            gender={genderRef.current.value} type={typeRef.current.value} blessing={blessingRef.current.value}
            secondblessing={secondBlessingRef.current.value}></Show>}
    </>
}

export const Show = (props) => {
    const { sender, getter, gender, type, blessing, secondblessing } = props
    return <>
        <div className={type}>
            {gender === "male" ? <h3>ל {getter} היקר</h3> : <h3>ל {getter} היקרה</h3>}
            <p>{blessing}</p>
            {secondblessing && <p>{secondblessing}</p>}
            <h2>{sender}</h2>
        </div>
    </>
}

