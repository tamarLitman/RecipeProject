
export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}

export const setIsAdmin = (user) => {
    return { type: 'SET_IS_ADMIN', payload: user }
}

