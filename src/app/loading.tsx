import Image from "next/image";
import logo from "../../public/logo.png";

export default function Loader() {
  return (
    <div className="bg-sand-50 fixed inset-0 z-99999 flex items-center justify-center">
      <Image
        src={logo}
        alt="Roshni Studio Logo"
        priority
        className="h-auto w-24"
      />
    </div>
  );
}
