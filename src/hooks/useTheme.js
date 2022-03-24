import { useContext } from "react"
import { DarkModeContext } from "../context/darkModeContext"

export const useTheme = () => {
    const context = useContext(DarkModeContext)

    if(context === undefined) {
        throw new Error("useTheme() must be use in DarkModeContextProvider")
    }
 // burada deyisiklik oldu
    return context
}