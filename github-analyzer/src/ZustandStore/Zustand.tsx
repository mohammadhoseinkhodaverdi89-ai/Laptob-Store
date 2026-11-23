import { create } from "zustand";

interface CartItem {
  id: number;
  brand: string;
  model: string;
  price: number;
  photo?: string;
  quantity?: number;
}

interface CartState {
    product : CartItem[];
    addProduct : (item : Omit<CartItem,"quantity">) => void;
}

const useCounterStore = create<CartState>((set) => ({
    product: CartItem[],
    addProduct : (item) => 
        set((state) => {
            const isExist = state.product.find((p) => p.id === item.id)
            if(isExist) {
                return {
                    product : state.product.map((p) => 
                    p.id === item.id ? {...p,quantity : p.quantity + 1} : p
                    )
                }
            }
            return {product : [...state.product, {...item}]}
        })
}))