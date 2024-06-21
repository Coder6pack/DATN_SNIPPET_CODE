import { ThemeProvider } from './components/theme-provider'
import useRootElement from './useRootElement'

function App() {
  const routesElement = useRootElement()
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      {routesElement}
    </ThemeProvider>
  )
}

export default App
