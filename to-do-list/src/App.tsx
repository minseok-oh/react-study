import { Route, Routes } from 'react-router'
import './styles/globals.css'
import { Main } from './pages/main'
import { NotFound } from './pages/not-found'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
