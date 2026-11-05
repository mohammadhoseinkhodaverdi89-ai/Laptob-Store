import Header from "./Header/Header"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App(){
  return(
      <div className="px-2.5 py-1 w-full min-h-screen">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}/>
        </Routes>
        </BrowserRouter>
      </div>
  )
}
export default App