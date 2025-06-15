import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="w-full relative">
        <div className="absolute top-[25%] left-0 right-0 text-center z-10">
          <h1 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-semi-bold font-jetbrains-mono mb-0">hi im michelle</h1>
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-7xl xl:text-8xl font-bold font-jetbrains-mono mt-0">peek into my brain</h1>
        </div>
        <Image
          src="/brain.png"
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
          className="absolute bottom-[38%] left-[5%] w-[25%] h-auto"
        />
        <Image
          src="/char3.png"
          alt="Character 3"
          width={200}
          height={200}
          className="absolute bottom-[22%] left-[25%] w-[25%] h-auto"
        />
        <Image
          src="/char2.png"
          alt="Character 2"
          width={400}
          height={400}
          className="absolute bottom-[40%] right-[30%] w-[25%] h-auto"
        />
        <Image
          src="/char4.png"
          alt="Character 4"
          width={220}
          height={220}
          className="absolute bottom-[23%] right-[5%] w-[25%] h-auto"
        />
      </div>
    </main>
  );
}
