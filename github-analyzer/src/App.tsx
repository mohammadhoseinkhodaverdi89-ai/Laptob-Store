import Header from "./Header/Header"
import { BrowserRouter, Route, Routes, type LinkProps } from 'react-router-dom'
import { useState } from "react"
import { laptops } from "./dataBase"
import { Filter } from "lucide-react"
import Productfilter from "./Header/Productfilter"
import Footer from "../src/Footer/Footer"

type LaptonInterface = typeof laptops

function App() {
  const [input, setInput] = useState("")
  const [filtered,setFiltered] = useState<LaptonInterface>(laptops)
  const [year,setYear] = useState()
    const Allfilter = () => (
    [...filtered].filter((item) => {
      const filterInput = item.model.toLowerCase().includes(input.toLowerCase());
      const filterYear = item.year === year;
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
            year={year}
            setYear={setYear}
            Allfilter={Allfilter}
          />
          <Footer />
         </>
          } />
          <Route path="/filter" element={<Productfilter filtered={filtered} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App