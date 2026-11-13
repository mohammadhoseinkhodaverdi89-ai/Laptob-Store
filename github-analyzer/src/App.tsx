import Header from "./Header/Header"
import { BrowserRouter, Route, Routes, type LinkProps } from 'react-router-dom'
import { useState } from "react"
import { laptops } from "./dataBase"
import { Filter } from "lucide-react"
import Productfilter from "./Header/Productfilter"

type LaptonInterface = typeof laptops

function App() {
  const [input, setInput] = useState("")
  const [filtered,setFiltered] = useState<LaptonInterface>(laptops)
    const Allfilter = () => (
    [...filtered].filter((item) => {
      const filterInput = item.model.toLowerCase().includes(input.toLowerCase())
      setInput("")
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
            filter={filtered}
            setFilter={setFiltered}
            Allfilter={Allfilter}
          />
         </>
          } />
          <Route path="/filter" element={<Productfilter filtered={filtered} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App