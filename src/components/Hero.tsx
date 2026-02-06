import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Mail, MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background handled by global OceanBackground */}

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-900/50 border border-slate-800 text-violet-400 text-sm font-medium mb-6 backdrop-blur-sm">
                        Available for new opportunities
                    </span>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        Transformando problemas complexos em{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                            soluções escaláveis
                        </span>
                        .
                    </h1>

                    <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
                        Especialista em unir desenvolvimento Full Stack (React/Node) com Inteligência Artificial e Cloud Computing para criar produtos digitais robustos.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all transform hover:scale-105 shadow-xl shadow-violet-500/25 flex items-center gap-2 group w-full sm:w-auto justify-center"
                        >
                            Ver Projetos
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/danielbarrionuevo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 rounded-full bg-slate-900 border border-slate-700 hover:border-violet-500 text-slate-300 hover:text-white font-medium transition-all hover:bg-slate-800 w-full sm:w-auto flex items-center justify-center gap-2"
                        >
                            <FileText className="w-4 h-4" />
                            LinkedIn
                        </a>

                        <div className="flex items-center gap-3 mt-4 sm:mt-0">
                            <a
                                href="https://github.com/Cawlino"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3.5 rounded-full bg-slate-900 border border-slate-700 hover:border-violet-500 text-slate-400 hover:text-white transition-all hover:bg-slate-800 hover:scale-110"
                                title="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:danielbgomes11@gmail.com"
                                className="p-3.5 rounded-full bg-slate-900 border border-slate-700 hover:border-violet-500 text-slate-400 hover:text-white transition-all hover:bg-slate-800 hover:scale-110"
                                title="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                            <a
                                href="https://wa.me/5544999063897"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3.5 rounded-full bg-slate-900 border border-slate-700 hover:border-violet-500 text-slate-400 hover:text-white transition-all hover:bg-slate-800 hover:scale-110"
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
                <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
