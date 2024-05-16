import Lion from './images/B_arye.jpg'
import Cat from './images/B_chatol.jpg'
import Giraf from './images/B_girafa.jpg'

export const Image = () => {
    return <>
        <img src={Lion} className='img'></img>
        <img src={Cat} className='img'></img>
        <img src={Giraf} className='img'></img>
        {/* לא צריך לייבא את התמונה מראש */}
        {/* public שומרים בתיקיית ה  */}
        <img src={`${process.env.PUBLIC_URL}/images/Horse.jpg`}></img>
        {/* העלאת תמונה */}
        <input type='file'></input>
        {/* public שמירת קובץ שהועלה בתיקיית ה  */}
    </>
}