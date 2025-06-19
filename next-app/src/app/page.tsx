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
      <div className="w-full relative flex items-center justify-center py-16">
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
            title="Project One"
            description="Description of your first project. What technologies did you use? What problems did it solve?"
            technologies={["React", "Node.js"]}
            demoUrl="https://demo.example.com"
            githubUrl="https://github.com/username/project"
            imageUrl="/mock.jpg"
            stickers={{
              topLeft: true,
              //bottomRight: true
            }}
          />
          <ProjectCard
            title="Project Two"
            description="Description of your second project. What was your role? What were the key features?"
            technologies={["Next.js", "TypeScript"]}
            demoUrl="https://demo.example.com"
            githubUrl="https://github.com/username/project"
            imageUrl="/mock.jpg"
            stickers={{
              //topRight: true,
              bottomRight: true
            }}
          />
        </div>
      </div>

      {/* About Me Section */}
      <div className="w-full relative flex items-center justify-center py-16">
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
              Hi! I'm Michelle, a passionate developer who loves creating beautiful and functional web experiences. 
              I specialize in building modern web applications using React and Next.js.
            </p>
            <p className="text-lg font-jetbrains-mono">
              When I'm not coding, you can find me [your interests/hobbies]. I believe in [your philosophy/approach to development].
            </p>
            <p className="text-lg font-jetbrains-mono">
              I'm always excited to take on new challenges and learn new technologies. Let's connect and create something amazing together!
            </p>
          </div>
          
          {/* About Me Photo */}
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 border-2 border-black rounded-lg">
              <Image
                src="/mock.jpg"
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
          href="mailto:your.email@example.com"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-jetbrains-mono hover:opacity-80 transition-opacity duration-300"
        >
          Contact Me →
        </a>
      </div>

      {/* Footer */}
      <footer className="w-full border-t-2 border-black py-8">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm font-jetbrains-mono">
              © 2024 Michelle. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-jetbrains-mono hover:underline"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-jetbrains-mono hover:underline"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/yourusername" 
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
