import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  stickers?: {
    topLeft?: boolean;
    topRight?: boolean;
    bottomLeft?: boolean;
    bottomRight?: boolean;
  };
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  demoUrl,
  githubUrl,
  stickers = {
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false
  }
}: ProjectCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-lg border-2 border-black relative">
      {/* Character Stickers */}
      {stickers.topLeft && (
        <div className="absolute -top-12 -left-12 w-32 h-32 z-10">
          <Image
            src="/char1.png"
            alt="Character 1"
            fill
            className="object-contain hover:rotate-12 transition-transform duration-300"
          />
        </div>
      )}
      {stickers.topRight && (
        <div className="absolute -top-12 -right-12 w-32 h-32 z-10">
          <Image
            src="/char2.png"
            alt="Character 2"
            fill
            className="object-contain hover:rotate-12 transition-transform duration-300"
          />
        </div>
      )}
      {stickers.bottomLeft && (
        <div className="absolute -bottom-12 -left-12 w-32 h-32 z-10">
          <Image
            src="/char3.png"
            alt="Character 3"
            fill
            className="object-contain hover:rotate-12 transition-transform duration-300"
          />
        </div>
      )}
      {stickers.bottomRight && (
        <div className="absolute -bottom-12 -right-12 w-32 h-32 z-10">
          <Image
            src="/char4.png"
            alt="Character 4"
            fill
            className="object-contain hover:rotate-12 transition-transform duration-300"
          />
        </div>
      )}

      {imageUrl && (
        <div className="mb-4 relative w-full h-90">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <h2 className="text-2xl font-jetbrains-mono font-semibold mb-4">{title}</h2>
      <p className="text-gray-300 mb-4 font-jetbrains-mono">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-jetbrains-mono"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {demoUrl && (
          <a 
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-400 font-jetbrains-mono"
          >
            Live Demo →
          </a>
        )}
        {githubUrl && (
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-400 font-jetbrains-mono"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
} 