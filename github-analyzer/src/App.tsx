import Header from "./Header/Header"
import { BrowserRouter, Route, Routes, type LinkProps } from 'react-router-dom'
import { useState } from "react"
import { laptops } from "./dataBase"
import { Filter } from "lucide-react"
import Productfilter from "./Header/Productfilter"
import Footer from "../src/Footer/Footer"

type LaptonInterface = typeof laptops

function App() {
  const [input, setInput] = useState("");
  const [filtered,setFiltered] = useState<LaptonInterface>(laptops);
  const [year,setYear] = useState<number | null>(null);
  const [brand,setBrand] = useState<string | null>(null);
  const [order,setOrder] = useState<string>("ز بالا به پایین");
    const Allfilter = () => (
    [...filtered].filter((item) => {
      const filterInput = item.model.toLowerCase().includes(input.toLowerCase());
      const filterYear = item.year === year;
      const filterBrand = item.brand === brand;
      setInput("")
      setYear(null)
      setBrand(null)
      return filterInput && filterYear && filterBrand
    })
    .sort((a,b) => {
      if(order === "ز بالا به پایین") {
        return a.price - b.price
      }else{
        return b.price - a.price
      }
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
            filtered={filtered}
            setFiltered={setFiltered}
            year={year}
            setYear={setYear}
            Allfilter={Allfilter}
            brand={brand}
            setBrand={setBrand}
            order={order}
            setOrder={setOrder}
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