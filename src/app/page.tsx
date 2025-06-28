import Image from "next/image";
import MenuBar from "../components/MenuBar";
import ProjectCard from "../components/ProjectCard";

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
      <div className="w-full relative -mt-32">
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
          className="absolute bottom-[70%] left-[3%] w-[25%] h-auto hover:rotate-12 transition-transform duration-300"
        />
        <Image
          src="/char3.png"
          alt="Character 3"
          width={200}
          height={200}
          className="absolute bottom-[50%] left-[23%] w-[25%] h-auto hover:rotate-12 transition-transform duration-300"
        />
        <Image
          src="/char2.png"
          alt="Character 2"
          width={400}
          height={400}
          className="absolute bottom-[75%] right-[30%] w-[30%] h-auto hover:rotate-12 transition-transform duration-300"
        />
        <Image
          src="/char4.png"
          alt="Character 4"
          width={250}
          height={250}
          className="absolute bottom-[55%] right-[5%] w-[30%] h-auto hover:rotate-12 transition-transform duration-300"
        />
      </div>

      {/* Projects Section */}
      <div id="projects" className="w-full relative flex items-center justify-center py-16">
        <div className="text z-10 relative flex items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold font-jetbrains-mono mb-0 flex items-center">
            <span className="mr-[-0.2em]">pr</span>
            <Image
              src="/char1.png"
              alt="Character 1"
              width={250}
              height={250}
              className="w-[1.3em] h-auto hover:rotate-12 transition-transform duration-300"
            />
            <span className="ml-[-0.2em]">jects</span>
          </h1>
        </div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="mock it"
            description="Instantly generate LaTeX mock tests from your worksheets or tests."
            technologies={["Typescript", "Nexe.js", "Python", "Docker", "Google Cloud"]}
            demoUrl="https://simplymockit.com"
            githubUrl="https://github.com/mzhang055/mockmate"
            imageUrl="/mockit.png"
            stickers={{
              topLeft: true,
              //bottomRight: true
            }}
          />
          <ProjectCard
            title="stocked"
            description="Help users navigate public transit safely by providing real-time risk reports on stops and stations, enabling users to share their location, report suspicious activity, and notify authorities to reduce harassment and improve security for everyone."
            technologies={["Java", "Jsoup", "Maven", "ARIMA", "Alphavantage API"]}
            githubUrl="https://github.com/mzhang055/Stocked"
            imageUrl="/stocked.png"
            stickers={{
              //topRight: true,
              bottomRight: true
            }}
          />
          <ProjectCard
            title="nightlight"
            description="Help users navigate public transit safely by providing real-time risk reports on stops and stations, enabling users to share their location, report suspicious activity, and notify authorities to reduce harassment and improve security for everyone."
            technologies={["HTML", "CSS", "JS", "TailwindCSS"]}
            demoUrl = "https://devpost.com/software/nightlight-64g8wc"
            githubUrl="https://github.com/samanthavmac/nightlight"
            imageUrl="/nightlight.png"
            stickers={{
              //topRight: true,
              bottomRight: true
            }}
          />
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="w-full relative flex items-center justify-center py-16">
        <div className="text z-10 relative flex items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold font-jetbrains-mono mb-0 flex items-center">
            <span className="mr-[-0.3em]">ab</span>
            <Image
              src="/char4.png"
              alt="Character 4"
              width={250}
              height={250}
              className="w-[1.3em] h-auto hover:rotate-12 transition-transform duration-300"
            />
            <span className="ml-[-0.1em]">ut</span>
          </h1>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Me Text */}
          <div className="space-y-6">
            <p className="text-lg font-jetbrains-mono">
              Hi! I&apos;m Michelle, a 2nd year CS student at UofT. 
            </p>
            <p className="text-lg font-jetbrains-mono">
              I&apos;m passionate about software development, UI/UX design, and most importantly, eating yummy food.
            </p>
            <p className="text-lg font-jetbrains-mono">
            I&apos;m always excited to take on new challenges and learn new technologies. Let&apos;s connect and create something amazing together!
            </p>
          </div>
          
          {/* About Me Photo */}
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 border-2 border-black rounded-lg">
              <Image
                src="/me.jpg"
                alt="Michelle"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="w-full flex justify-center pb-16">
        <a 
          href="mailto:michellexy.zhang@mail.utoronto.ca"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-jetbrains-mono hover:opacity-80 transition-opacity duration-300"
        >
          contact me →
        </a>
      </div>

      {/* Footer */}
      <footer className="w-full border-t-2 border-black py-8">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm font-jetbrains-mono">
              © 2024 Michelle. made with -`♡´-
            </div>
            <div className="flex gap-6">
              <a 
                href="https://github.com/mzhang055" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-jetbrains-mono hover:underline"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/mzhang055" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-jetbrains-mono hover:underline"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/michellexyzhang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-jetbrains-mono hover:underline"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
