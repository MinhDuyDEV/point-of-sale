import Image from "next/image";
import React from "react";

const PaymentPage = () => {
  return (
    <div className="relative flex items-center justify-center">
      <Image height={800} width={600} alt="qrCode" src="/qrcode.png"></Image>
    </div>
  );
};

export default PaymentPage;
