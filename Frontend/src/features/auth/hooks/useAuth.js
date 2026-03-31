import {register,login,getMe,logout} from '../services/auth.api'
import { useContext } from 'react'
import { AuthContext } from '../auth.context'

export const useAuth=()=>{
    const context=useContext(AuthContext)

    const {user,setUser,loading,setLoading}=context

     async function handleLogin({username,email,password}){
            setLoading(true)
            try {
                const data=await login({username,email,password})
                setUser(data.user)

            } catch (err) {
                throw Error(err)
            }finally{
                setLoading(false)
            }
    }

    async function handleRegister({username,email,password}){
              setLoading(true)
            try {

                const data=await register({username,email,password})
                setUser(data.user)

            } catch (err) {
                throw Error(err)
            }finally{
                setLoading(false)
            }
    }

    async function handleGetMe(){
              setLoading(true)
            try {

                const data=await getMe()
                setUser(data.user)

            } catch (err) {
                throw Error(err)
            }finally{
                setLoading(false)
            }
    }

    async function handleLogout(){
              setLoading(true)
            try {

                const data=await logout()
                setUser(null)

            } catch (err) {
                throw Error(err)
            }finally{
                setLoading(false)
            }
    }

    return ({
        user,loading,handleLogin,handleRegister,handleGetMe,handleLogout
    })

}


