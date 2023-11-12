import { create } from "zustand";
// import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

// import { Product } from '@/types';
import { AlertTriangle } from "lucide-react";
import { Product } from "@/types/types";
import toast from "react-hot-toast";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item: Product) => item.id === data.id
        );

        if (existingItem) {
          if (typeof existingItem.Quantity === "number") {
            existingItem.Quantity++;
          }
          set({
            items: [...get().items],
          });
          toast.success("Item added to cart");
        } else {
          set({ items: [...get().items, data] });
          toast.success("Item added to cart.");
        }
      },

      removeItem: (id: string) => {
        set({
          items: [
            ...get().items.filter((item: Product) => {
              if (item.id !== id) {
                return item;
              } else {
                item.Quantity = 1;
              }
            }),
          ],
        });
        toast.success("Item removed from cart.");
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
