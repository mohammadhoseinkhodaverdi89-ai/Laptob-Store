import Header from "./Header/Header"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App(){
  return(
      <div className="w-full min-h-screen" dir="rtl">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}/>
        </Routes>
        </BrowserRouter>
      </div>
  )
}
export default App