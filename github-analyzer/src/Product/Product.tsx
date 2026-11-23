import { laptops } from "../dataBase";
import { CalendarDays } from "lucide-react";
import { ShoppingCart } from "lucide-react";
function Product() {
    const result = laptops.slice(0, 10)
    return (
        <div className="overflow-x-auto w-full h-full mt-2.5 px-2 py-2">
            <div className="flex flex-row items-center gap-2 h-full">
                {result.map((item) => (
                    <div key={item.id} className="flex flex-col gap-2 items-center w-[195px] h-[287px] shrink-0 border border-gray-100 rounded-xl py-2.5 px-4 shadow-md">
                        <img src={item.photo} alt="" className="w-full h-full object-cover object-fit aspect-[4/3]" />
                        <div className="flex flex-col items-center gap-0.5">
                            <p className="text-center text-sm text-blue-500 font-semibold">{item.brand}</p>
                            <p className="text-center text-xs text-black font-semibold">{item.model}</p>
                        </div>
                        <ul className="flex flex-row-reverse text-[10px] text-gray-700 gap-2 ">
                            <li className="border-r border-r-gray-400 pr-2">{item.cpu}</li>
                            <li className="border-r border-r-gray-400 pr-2">{item.gpu}</li>
                            <li>{item.ram}</li>
                        </ul>
                        <div className="flex gap-4 items-center">
                            <p className="text-xs text-gray-700 flex items-center gap-0.5">{item.year}<CalendarDays size={18} /></p>
                            <p className="text-xs text-gray-900 [word-spacing:4px]">{item.price.toLocaleString("fa-IR")}تومان </p>
                        </div>

                        <button className="text-xs flex flex-row items-center gap-3 text-white bg-gray-800/90 px-3 py-1.5 rounded-lg"><ShoppingCart size={18} />افزودن به سبد خرید</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Product