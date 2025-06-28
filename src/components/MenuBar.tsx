import Image from "next/image";

export default function MenuBar() {
  return (
    <nav className="w-full p-2 sm:p-4 flex justify-between items-center bg-transparent absolute top-0 z-20">
      <div className="text-black text-xl sm:text-2xl md:text-3xl font-bold font-jetbrains-mono">
        <Image src="/char1.png" alt="Logo" width={68} height={68} className="w-22 h-22 object-contain" />
      </div>
      <ul className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
        <li><a href="#" className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-jetbrains-mono hover:underline">Home</a></li>
        <li><a href="#" className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-jetbrains-mono hover:underline">About</a></li>
        <li><a href="#" className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-jetbrains-mono hover:underline">Projects</a></li>
        <li><a href="#" className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-jetbrains-mono hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
} 