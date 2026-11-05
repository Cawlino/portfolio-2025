import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Mail, MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-neutral-900/50 border border-neutral-800 text-accent-400 text-sm font-medium mb-6 ">
                        Tech Lead & Engenharia de Software Full Stack
                    </span>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        Daniel Barrionuevo<span className="block hero-subtitle">Engenharia de software, do produto à entrega.</span>
                    </h1>

                    <p className="text-base md:text-xl text-neutral-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
                        Desenvolvo aplicações web, mobile e sites para negócios. Trabalho com React, Node.js, dados e inteligência artificial, da definição do produto à implementação.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3.5 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-medium transition-all transform hover:scale-105 shadow-xl  flex items-center gap-2 group w-full sm:w-auto justify-center"
                        >
                            Ver Projetos
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/danielbarrionuevo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-accent-500 text-neutral-300 hover:text-white font-medium transition-all hover:bg-neutral-800 w-full sm:w-auto flex items-center justify-center gap-2"
                        >
                            <FileText className="w-4 h-4" />
                            LinkedIn
                        </a>

                        <div className="flex items-center gap-3 mt-4 sm:mt-0">
                            <a
                                href="https://github.com/Cawlino"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-accent-500 text-neutral-400 hover:text-white transition-all hover:bg-neutral-800 hover:scale-110"
                                title="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:danielbgomes11@gmail.com"
                                className="p-3.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-accent-500 text-neutral-400 hover:text-white transition-all hover:bg-neutral-800 hover:scale-110"
                                title="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                            <a
                                href="https://wa.me/5544999063897"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-accent-500 text-neutral-400 hover:text-white transition-all hover:bg-neutral-800 hover:scale-110"
                                title="WhatsApp"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-neutral-500 uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12   " />
            </motion.div>
        </section>
    );
};

export default Hero;
