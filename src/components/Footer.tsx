import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-neutral-950/30  border-t border-neutral-900/50 text-center">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-6 mb-8">
                    <a
                        href="https://github.com/Cawlino"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-accent-600 transition-all transform hover:scale-110"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/danielbarrionuevo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-accent-600 transition-all transform hover:scale-110"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:danielbgomes11@gmail.com"
                        className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-red-500 transition-all transform hover:scale-110"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-neutral-500 text-sm">
                    © {new Date().getFullYear()} Daniel Barrionuevo. Built with <span className="text-accent-500">React</span> & <span className="text-accent-500">Tailwind</span>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
