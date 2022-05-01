import { createContext, useState } from 'react'

export const IdContext = createContext()

export const IdContextProvider = (props) => {
    const [Id ,setId] = useState(1)
    const [slider, setslider] = useState()
    
    return (
        <IdContext.Provider value={{Id, setId, slider, setslider}}>{props.children}</IdContext.Provider>
    )
}