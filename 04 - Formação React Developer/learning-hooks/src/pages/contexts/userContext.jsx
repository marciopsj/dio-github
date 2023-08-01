import { createContext } from 'react'

export const UserContext = createContext({})

export const UserContextProvider = ({children}) => {
    return (
        <UserContext.Provider value={{userName: "Marcio"}}>{children}</UserContext.Provider>
    )
}

export default UserContextProvider