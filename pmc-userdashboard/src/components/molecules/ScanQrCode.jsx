import Icons from "../atoms/Icons";
import { useState } from "react";
import Modal from "../templates/Modal";
import Image from "next/image";

const ScanQrCode = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <div className="grid grid-cols-[40px_1fr_auto] gap-5 p-3 rounded-md items-center bg-[#F5F5F5]">
        {/* Logo */}
        <Image src="/SVG/QrCode.svg" width={32} height={32} />

        {/* Title */}
        <p>Scan MY Qr code</p>

        {/* Arrow */}
        <Icons type="right" className="text-lg" />
      </div>

      {/* MOdal */}
      {isModal && (
        <Modal>
          <p className="bg-white">Modal</p>
        </Modal>
      )}
    </>
  );
};

export default ScanQrCode;
