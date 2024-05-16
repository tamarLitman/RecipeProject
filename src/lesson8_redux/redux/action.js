// פעולות שנפעיל על הסטייט
// פעולות של הוספה, עדכון ומחיקה או הצבה של משתנים
// פעולות של שליפה - נעשה בעזה בהמשך בדרך שונה

export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}

export const addUser = (user) => {
    return { type: 'ADD_USER', payload: user }
}

export const deleteUser = (username, password) => {
    return { type: 'DELETE_USER', payload: { username, password } }
}

export const addItem=(item)=>{
    return {type:'ADD_ITEM',payload:item}
}

export const deleteItem=(name,calories,price)=>{
    return{type:'DELETE_ITEM',payload:{name,calories,price}}
}