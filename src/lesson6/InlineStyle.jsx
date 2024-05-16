import './style.css'

export const InlineStyle = () => {

    const s = {
        backgroundColor: 'yellow',
        border: 'hotpink double 5px',
        fontSize: '20px'
    }

    return <>
        {/* סטייל נכנס בתוך אובייקט ולכן יש פעמיים סוגריים */}
        {/* camelCase מפתחות נכתוב ב */}
        {/* ערכים במחרוזות - תמיד */}
        <div style={{ backgroundColor: 'red', border: 'solid brown 2px', fontSize: '50px' }}>
            מי נגד אגד דן נגד אגד מי נגד דן אגד נגד דן
        </div>
        <div style={s}>
            עכוכוסתהטלצפתאףהיאכוסתהטל
        </div>
        {/* class = className - camelCase */}
        <div className={'myDiv'}>
            make issue from every tissue
            <br></br>
            מוקדש לאסתר באהבה ממני
        </div>
    </>
}