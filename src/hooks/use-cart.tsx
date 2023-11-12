import { create } from "zustand";
// import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

// import { Product } from '@/types';
import { AlertTriangle } from "lucide-react";

interface CartStore {
  items: any;
  addItem: (data: any) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: any) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item: any) => item.id === data.id
        );

        if (existingItem) {
          // return toast("Item already in cart.");
        }

        set({ items: [...get().items, data] });
        // toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item: any) => item.id !== id)] });
        // toast.success("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
