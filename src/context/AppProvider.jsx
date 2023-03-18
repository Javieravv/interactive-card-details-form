import { useState } from "react"
import { AppContext } from "./AppContext"

export const AppProvider = ( { children } ) => {
    const [appContext, setAppContext] = useState({
        cardName: '',
        cardNumber: '',
        cardMonthExpiration: '',
        cardYearExpiration: '',
        cardCvc: ''
    })
    
    const [formOk, setFormOk] = useState(false)

    // const [appContext, setAppContext] = useState('654321')
    return (
        <AppContext.Provider value = { {appContext, setAppContext, formOk, setFormOk} }>
            { children }
        </AppContext.Provider>
    )
}
