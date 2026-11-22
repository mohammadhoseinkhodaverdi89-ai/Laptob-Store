import { laptops } from "../dataBase";
import React, { useRef } from "react";
function Product() {
    const result = laptops.slice(0, 10)
    const touchStart = useRef(0);
    const containerRef = useRef(null)

    const handleStart = (e : React.TouchEvent) => {
        touchStart.current = e.touches[0].clientX;
    }
    const handleMove = (e : React.TouchEvent) => {
        const touchCurrent = e.touches[0].clientX;
        const distance = touchStart.current - touchCurrent

        containerRef.current?.scrollBy({
            left : distance,
            behavior : "auto"
        })
        touchStart.current = touchCurrent
    }

    return (
        <div className="overflow-x-auto w-full">
            <div className="flex flex-row items-center gap-7"
            ref={containerRef}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            >
                {result.map((item) => (
                    <div key={item.id} className="flex flex-col items-center w-[180px] h-full shrink-0">
                        <img src={item.photo} alt="" className="w-full h-full object-center object-contain aspect-[4/3]" />
                        <p className="text-center text-sm text-blue-500 font-semibold">{item.brand}</p>
                        <p className="text-center text-xs text-black font-semibold">{item.model}</p>
                        <ul className="flex flex-row">
                            <li>{item.cpu}</li>
                            <li>{item.gpu}</li>
                            <li>{item.ram}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Product