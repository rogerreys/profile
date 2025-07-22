import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative mt-20 py-6 px-4 border-t border-pink-900/30">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 via-purple-900/10 to-pink-900/10 backdrop-blur-md -z-10" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Roger Reyes | Todos los derechos reservados.
        </p>
        
        <div className="flex gap-4">
          <a 
            href="https://github.com/rogerreys" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            aria-label="GitHub"
          >
            <FaGithub />
            <span className="text-sm">GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/rogerreys" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
