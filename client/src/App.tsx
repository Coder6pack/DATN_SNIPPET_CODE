import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './components/theme-provider'
import useRootElement from './useRootElement'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routesElement = useRootElement()
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      {routesElement}
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
