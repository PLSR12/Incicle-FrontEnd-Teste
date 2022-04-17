import { StyledEngineProvider } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import GlobalStyles from './components/GlobalStyles'
import MainLayout from './components/MainLayout'
import theme from './theme'
import './App.css'

function App () {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainLayout />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
