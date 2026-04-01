import { createContext, useState, useEffect } from "react";
import { getMe } from './services/auth.api'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true
        async function fetchUser() {
            try {
                const data = await getMe()
                if (!mounted) return
                setUser(data.user || null)
            } catch (e) {
                if (!mounted) return
                setUser(null)
            } finally {
                if (!mounted) return
                setLoading(false)
            }
        }

        fetchUser()

        return () => { mounted = false }
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}


