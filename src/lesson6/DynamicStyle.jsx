import './style.css'

export const DynamicStyle = (props) => {

    const { num, gender } = props
    // const num = 12

    const s = num > 10 ? { fontSize: '100px' } : { fontSize: '20px' }

    return <>
        <div className={`d ${gender}`} style={num > 10 ? { fontSize: '100px' } : { fontSize: '20px' }}>{num}</div>
        <div className={'d ' + gender} style={s}>{num}</div>
    </>
}