import { BrowserRouter, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'
import Allroutes from './share/Allroutes'


const App = () => {
  return <>
    <BrowserRouter>
      <ToastContainer />
      <Allroutes />
    </BrowserRouter>
  </>
}

export default App