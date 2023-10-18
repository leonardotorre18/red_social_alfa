import './App.css'
import MainProvider from './providers/MainProvider'
import { Routes } from './routes'

function App() {

  return (
    <MainProvider>
      <Routes />
    </MainProvider>
  )
}

export default App
