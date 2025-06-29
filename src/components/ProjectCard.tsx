import Image from 'next/image';
import { FiGithub, FiExternalLink } from "react-icons/fi";

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
        <div className="absolute -top-8 -left-8 w-20 h-20 z-10">
          <Image
            src="/char1.png"
            alt="Character 1"
            fill
            className="object-contain hover:rotate-12 transition-transform duration-300"
          />
        </div>
      )}
      {stickers.topRight && (
        <div className="absolute -top-8 -right-8 w-20 h-20 z-10">
          <Image
            src="/char2.png"
            alt="Character 2"
            fill
            className="object-contain hover:rotate-12 transition-transform duration-300"
          />
        </div>
      )}
      {stickers.bottomLeft && (
        <div className="absolute -bottom-8 -left-8 w-20 h-20 z-10">
          <Image
            src="/char3.png"
            alt="Character 3"
            fill
            className="object-contain hover:rotate-12 transition-transform duration-300"
          />
        </div>
      )}
      {stickers.bottomRight && (
        <div className="absolute -bottom-8 -right-8 w-20 h-20 z-10">
          <Image
            src="/char4.png"
            alt="Character 4"
            fill
            className="object-contain hover:rotate-12 transition-transform duration-300"
          />
        </div>
      )}

      {imageUrl && (
        <div className="mb-4 relative w-full h-48 sm:h-64 md:h-72">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-jetbrains-mono font-semibold">{title}</h2>
        <div className="flex gap-3 ml-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="text-black hover:text-gray-700"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-black hover:text-gray-700"
            >
              <FiGithub className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <p className="text-black mb-4 font-jetbrains-mono font-thin text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 rounded-full text-sm font-jetbrains-mono"
            style={{ backgroundColor: '#f1e1ec', color: '#b289a5' }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
} 