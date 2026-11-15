import Header from "./Header/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import { laptops } from "./dataBase"
import Productfilter from "./Header/Productfilter"
import Footer from "./Footer/Footer"

type LaptonInterface = typeof laptops

function App() {
  const [input, setInput] = useState<null | string>(null);
  const [filtered,setFiltered] = useState<LaptonInterface>(laptops);
  const [year,setYear] = useState<number | null>(null);
  const [brand,setBrand] = useState<string | null>(null);
  const [order,setOrder] = useState<string>("ز بالا به پایین");
    const Allfilter = () => (
    [...filtered].filter((item) => {
      const filterInput = item.model.toLowerCase().includes(String(input).toLowerCase());
      const filterYear = year === null || item.year === year;
      const filterBrand = brand === null || item.brand === brand;
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
            // filtered={filtered}
            setFiltered={setFiltered}
            year={year}
            setYear={setYear}
            brand={brand}
            setBrand={setBrand}
            order={order}
            setOrder={setOrder}
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