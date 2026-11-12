import { UserRound } from "lucide-react";
import { Menu } from "lucide-react"
import { Logs } from "lucide-react"
import { Laptop } from "lucide-react";
import { Search } from "lucide-react";
import { Funnel } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { Tag } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import photo1 from "./Photo/Neon Gaming Laptop on Rocky Ledge.png";
import React, { useState } from "react";
import type { laptops } from "../dataBase";
type Laptob = typeof laptops
interface headerProps {
    input : string
    setInput: React.Dispatch<React.SetStateAction<string>>

    filter : Laptob
    setFilter : React.Dispatch<React.SetStateAction<Laptob>>

    Allfilter : Laptob
}
function Header({input,setInput,filter,setFilter,Allfilter} : headerProps) {
    const [isopen, setIsopen] = useState<string | null>(null)
    return (
        <div className="w-full">
            <header className="w-full flex items-center justify-between px-3 py-3">
                <div>
                    <p><UserRound size={26} /></p>
                </div>
                <div className="flex items-center">
                    <h1 className="font-semibold text-xl">Laptob<span className="text-blue-600">Store</span></h1>
                    <p className="text-blue-600"><Laptop size={26} /></p>
                </div>
                <div>
                    <p><Menu size={26} /></p>
                </div>
            </header>
            <div className="w-full relative mt-0.5 px-3">
                <input type="text" placeholder="جستجو در لپتاب ها..." className="bg-gray-200 w-full rounded-lg py-1.5 px-12 shadow-md outline-none " value={input ?? ""} onChange={((e : React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value))} />
                <p className="absolute top-2 right-5 text-gray-700"><Search size={19} /></p>
            </div>
            <div className="overflow-hidden relative mt-2.5 px-1">
                <img src={photo1} alt="laptob-photos" className="rounded-2xl" />
                <div className="flex flex-col gap-2 items-start absolute top-10 right-0 text-white px-3">
                    <p className="bg-gradient-to-r from-blue-500 to-purple-600 text-xs font-medium px-2 py-1 rounded-2xl">
                        قدرت بیشتر، تجربه بهتر
                    </p>

                    <h1 className="max-w-40 text-xl font-bold leading-8">
                        لپ‌تاپ‌های حرفه‌ای با
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            {" "}بهترین
                        </span>
                        {" "}قیمت
                    </h1>

                    <p className="text-gray-300 text-xs leading-6">
                        انتخاب هوشمندانه برای کار، بازی و یادگیری
                    </p>
                </div>
            </div>
            <div className="relative flex flex-row-reverse items-center justify-between w-full h-full mt-4 px-2 sm:px-2">
                <button className="flex items-center gap-2 sm:gap-1.5 bg-blue-600 px-3 py-2.5 rounded-xl text-white text-xs sm:text-xs shadow-md" onClick={setFilter(Allfilter)}><Funnel size={18} />اعمال فیلتر</button>
                <div className="relative">
                    <button onClick={(() => isopen === "year" ? setIsopen("") : setIsopen("year"))} className="flex items-center gap-1.5 sm:gap-2  text-xs sm:text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded-xl shadow-md"><span className="text-gray-700"><CalendarDays size={21} /></span>سال</button>
                        {isopen === "year" && (
                        <div className="absolute -translate-x-1/2 left-1/2 top-full flex flex-col gap-1 border border-gray-200 mt-2 px-3 py-2 rounded-xl shadow-lg">
                            {[2022, 2023, 2024, 2025].map((item,index) => (
                                <p key={index} className="text-xs text-gray-700 transition-all duration-300 hover:text-blue-600 hover:scale-105 active:scale-90">{item}</p>
                            ))}
                        </div>
                        )} 
                </div>
                <div className="relative">
                    <button onClick={(() => isopen === "brand" ? setIsopen("") : setIsopen("brand"))} className="flex gap-1.5 sm:gap-2 items-center text-xs sm:text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded-xl shadow-md"><span className="text-gray-700"><Tag size={18} /></span>برند</button>
                    {isopen === "brand" && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 border border-gray-200 rounded-lg shadow-lg mt-2 px-3 py-2 ">
                            {["ASUS", "Lenovo", "Dell", "HP", "Acer"].map((item, index) => (

                                <p key={index} className="text-xs text-gray-700 transition-color transition-transform duration-300 hover:text-blue-600 hover:scale-95 active:scale-90">{item}</p>
                            ))}
                        </div>
                    )}
                </div>
                <div className="relative">
                    <button onClick={(() => isopen === "Sorting" ? setIsopen("") : setIsopen("Sorting"))} className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-2 text-xs sm:text-sm rounded-xl shadow-md"><span>< ArrowUpDown size={18} /></span>مرتب سازی</button>
                    <div>
                        {isopen === "Sorting" && (
                            <div className="absolute top-full -translate-x-1/2 left-1/2 w-full   mt-2 px-3 py-2 border border-gray-200 flex flex-col gap-1 rounded-xl">
                                {["از پایین به بالا", "از بالا به پایین"].map((item,index) => (
                                    <p key={index} className="text-xs text-gray-700 transition-all duration-300 hover:text-blue-600 hover:scale-105 active:scale-95">{item}</p>
                                )) }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header