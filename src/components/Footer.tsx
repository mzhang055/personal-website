export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-black py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm font-jetbrains-mono">
            © 2025 Michelle. made with -`♡´-
          </div>
          <div className="flex gap-6">
            <a 
              href="https://github.com/michellexyzhang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-jetbrains-mono hover:underline"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/michellexyzhang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-jetbrains-mono hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 