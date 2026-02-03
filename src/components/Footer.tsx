import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-slate-950/30 backdrop-blur-md border-t border-slate-900/50 text-center">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-6 mb-8">
                    <a
                        href="https://github.com/Cawlino"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-violet-600 transition-all transform hover:scale-110"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/danielbarrionuevo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all transform hover:scale-110"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:danielbgomes11@gmail.com"
                        className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-red-500 transition-all transform hover:scale-110"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Daniel Barrionuevo. Built with <span className="text-violet-500">React</span> & <span className="text-indigo-500">Tailwind</span>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
