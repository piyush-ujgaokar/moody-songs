import { RouterProvider } from "react-router"
import router from "./app.routes"
import './features/shared/styles/globel.scss'
import { AuthProvider } from "./features/auth/auth.context"
import { SongContextProvider } from "./features/home/song.context"
import { ThemeProvider } from './features/shared/theme.context'


const App = () => {
  return (
    <AuthProvider>
      <SongContextProvider>
        <ThemeProvider>
          <RouterProvider router={router}/>
        </ThemeProvider>
      </SongContextProvider>
    </AuthProvider>
  )
}

export default App