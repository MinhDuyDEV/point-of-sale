"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
// import Gallery from "@/components/gallery";
// import Info from "@/components/info";
import Modal from "@/components/ui/modal";
import Info from "@/components/ui/info";
import Image from "next/image";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="flex items-center justify-start w-full gap-x-20">
        <div className="relative w-80 h-80">
          <Image
            src="https://source.unsplash.com/random"
            alt=""
            fill
            className="object-cover rounded-md aspect-square"
          />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
