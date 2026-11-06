import { UserRound } from "lucide-react";
import { Menu } from "lucide-react"
import { Logs } from "lucide-react"
import { Laptop } from "lucide-react";
import { Search } from "lucide-react";
import photo1 from "./Photo/Neon Gaming Laptop on Rocky Ledge.png"
function Header() {
    return (
        <div className="w-full">
            <header className="w-full flex items-center justify-between px-3">
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
            <div className="w-full relative mt-3 px-3">
                <input type="text" placeholder="جستجو در لپتاب ها..." className="bg-gray-200 w-full rounded-lg py-1.5 px-12" />
                <p className="absolute top-2 right-5 text-gray-700"><Search size={19} /></p>
            </div>
            <div className="overflow-hidden relative mt-2.5 px-1">
                <img src={photo1} alt="laptob-photos" className="rounded-2xl" />
                <div className="flex flex-col gap-2 items-start absolute top-5 right-0 text-white px-3">
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
        </div>
    )
}
export default Header