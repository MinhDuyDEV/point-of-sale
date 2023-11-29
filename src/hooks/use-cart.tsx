import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import toast from "react-hot-toast";
import { Product } from "@/types/general.types";

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
          (item: Product) => item._id === data._id
        );

        if (existingItem) {
          if (
            typeof existingItem.Quantity === "number" &&
            typeof existingItem.Flag === "number"
          ) {
            if (existingItem.Quantity > existingItem.Flag) {
              existingItem.Flag++;
            }
          }
          set({
            items: [...get().items],
          });
          toast.success("Item added to cart");
        } else {
          data.Flag++;
          set({ items: [...get().items, data] });
          toast.success("Item added to cart.");
        }
      },

      removeItem: (id: string) => {
        set({
          items: [
            ...get().items.filter((item: Product) => {
              if (item._id !== id) {
                return item;
              } else {
                item.Flag = 1;
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
