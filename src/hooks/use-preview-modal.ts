import { create } from "zustand";

// import { Product } from '@/types';

interface PreviewModalStore {
  isOpen: boolean;
  data?: any;
  onOpen: () => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
