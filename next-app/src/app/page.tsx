import Image from "next/image";
import MenuBar from "../components/MenuBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <MenuBar />
      <div className="flex-1 w-full relative flex items-center justify-center min-h-[50vh]">
        <div className="text-center z-10">
          <h1 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-semi-bold font-jetbrains-mono mb-0">hi im michelle</h1>
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-7xl xl:text-8xl font-bold font-jetbrains-mono mt-0">peek into my brain</h1>
        </div>
      </div>
      <div className="w-full relative">
        <Image
          src="/brain1.png"
          alt="Brain"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover object-bottom"
          priority
        />
        <Image
          src="/char1.png"
          alt="Character 1"
          width={250}
          height={250}
          className="absolute bottom-[70%] left-[3%] w-[30%] h-auto"
        />
        <Image
          src="/char3.png"
          alt="Character 3"
          width={200}
          height={200}
          className="absolute bottom-[50%] left-[23%] w-[30%] h-auto"
        />
        <Image
          src="/char2.png"
          alt="Character 2"
          width={400}
          height={400}
          className="absolute bottom-[80%] right-[30%] w-[30%] h-auto"
        />
        <Image
          src="/char4.png"
          alt="Character 4"
          width={250}
          height={250}
          className="absolute bottom-[55%] right-[5%] w-[30%] h-auto"
        />
      </div>
    </main>
  );
}
