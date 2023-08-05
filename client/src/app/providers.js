'use client'
import { AuthContextProvider } from "./Context/authContext"

export function Provider({children}){
    return(
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}