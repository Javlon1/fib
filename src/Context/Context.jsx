import { createContext, useState } from 'react'
import { HeaderData } from '../Data/Data'

const Context = createContext()

function Provider({ children }) {

    const [menu, setMenu] = useState(window.sessionStorage.getItem('menu') ? window.sessionStorage.getItem('menu') : HeaderData[0].id)
    const [lan, setLan] = useState(window.localStorage.getItem('lan') ? window.localStorage.getItem('lan') : "ru")
    const [openModel, setOpenModel] = useState(false)

    return (
        <Context.Provider value={{ lan, setLan, menu, setMenu, openModel, setOpenModel }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }  