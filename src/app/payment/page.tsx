import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PaymentPage = () => {
  return (
    <div className="p-10">
      <Link href="/customers" className="p-4">
        <Logo></Logo>
      </Link>
      <div className="relative flex items-center justify-center">
        <Image height={800} width={600} alt="qrCode" src="/qrcode.png"></Image>
      </div>
    </div>
  );
};

export default PaymentPage;
