import { Route, Routes } from 'react-router'
import { NotFound } from './pages/not-found'
import { Main } from './pages/main'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
