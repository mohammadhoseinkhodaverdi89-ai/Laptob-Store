import Header from "./Header/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import { laptops } from "./dataBase"
import { Filter } from "lucide-react"
import Productfilter from "./Header/Productfilter"

function App() {
  const [input, setInput] = useState<string>("")

    const Allfilter = () => (
    [...laptops].filter((item) => {
      const filterInput = item.model.toLowerCase().includes(input.toLowerCase())
      return filterInput
    })
  )
  return (
    <div className="w-full min-h-screen font-vazir" dir="rtl">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
            <Header
            input={input}
            setInput={setInput}
          />
         <Productfilter Allfilter={Allfilter}/>
         </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App