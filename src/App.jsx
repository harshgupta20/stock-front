import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Stocks from './pages/Stocks'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import PortFolio from './pages/PortFolio'

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/stocks"} element={<Stocks />} />
          <Route path={"/portfolio"} element={<PortFolio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App