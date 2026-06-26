import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Server, Database, Brain, Smartphone, Gamepad2, Layers } from 'lucide-react';

interface PhoneMockupProps {
    src?: string;
    alt: string;
    label: string;
}

// Sleek Samsung S24 Screen Mockup Frame (~19.5:9 aspect ratio)
const PhoneMockup = ({ src, alt, label }: PhoneMockupProps) => (
    <div className="relative mx-auto w-[240px] md:w-[270px] aspect-[9/19.5] bg-slate-950 rounded-[44px] border-[7px] border-slate-800 shadow-2xl shadow-violet-500/15 overflow-hidden group-hover:border-slate-700 transition-all flex flex-col">
        {/* Camera Punch Hole */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full z-30 ring-1 ring-white/15" />
        
        {/* Top Speaker Grill */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-800 rounded-full z-30" />

        {/* Screen Content */}
        <div className="relative w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden pt-6">
            {src ? (
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            ) : (
                <div className="text-center p-6 space-y-3 z-10">
                    <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto text-violet-400">
                        <Smartphone className="w-7 h-7 animate-pulse" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-200">{label}</p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-slate-800/90 text-violet-300 rounded-full text-[10px] border border-slate-700 font-mono">
                        Pronto para o print...
                    </span>
                </div>
            )}
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-20" />
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-12 md:py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Featured <span className="text-violet-500">Projects</span>
                    </h2>
                    <div className="h-1 w-20 bg-violet-500 rounded-full" />
                </motion.div>

                <div className="space-y-12 md:space-y-24">
                    {/* Featured Project 1 - PaceX AI (Web Platform) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group relative rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/10 overflow-hidden hover:border-violet-500/50 transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 text-violet-400 font-medium">
                                    <Sparkles className="w-4 h-4" />
                                    <span>Web Ecosystem</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white">PaceX AI</h3>

                                <p className="text-slate-400 leading-relaxed">
                                    Plataforma de Gestão de Treinos & IA. Aplicação Full Stack robusta para prescrição de treinos, integrando um módulo de Inteligência Artificial para suporte automatizado e insights personalizados.
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {['React.js', 'Node.js', 'AWS', 'Python'].map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4 py-4">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Brain className="w-4 h-4 text-violet-500" />
                                        <span className="text-sm">Agente de IA</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Database className="w-4 h-4 text-indigo-500" />
                                        <span className="text-sm">Real-time Dashboards</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Server className="w-4 h-4 text-violet-500" />
                                        <span className="text-sm">Scalable Architecture</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-2 relative z-20">
                                    <a href="https://pacexai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors font-medium">
                                        <ExternalLink className="w-4 h-4" />
                                        Ver site
                                    </a>
                                    <a href="https://github.com/Cawlino" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium border border-slate-700">
                                        <Github className="w-4 h-4" />
                                        Code
                                    </a>
                                </div>
                            </div>

                            {/* Responsive Browser Mockup */}
                            <motion.div 
                                className="relative md:h-full flex items-center justify-center p-2 md:p-4"
                                whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{ perspective: 1000 }}
                            >
                                <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/10 group-hover:border-violet-500/30 transition-colors">
                                    <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/80 backdrop-blur-md flex items-center px-4 gap-1.5 border-b border-white/5 z-10">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                        <div className="mx-auto flex items-center gap-1.5 px-3 py-1 bg-slate-900/50 rounded-md border border-white/5">
                                            <div className="w-2 h-2 rounded-full bg-violet-500/50" />
                                            <span className="text-[10px] text-slate-400 font-mono tracking-wider">pacexai.com</span>
                                        </div>
                                    </div>

                                    <div className="pt-8 h-full bg-slate-950 flex items-center justify-center overflow-hidden">
                                        <video 
                                            src={`${import.meta.env.BASE_URL}videoTelaPaceX.mp4`} 
                                            autoPlay 
                                            loop 
                                            muted 
                                            playsInline
                                            className="w-full h-full object-contain md:object-cover scale-[1.01]" 
                                        />
                                        
                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950 to-transparent opacity-60 pointer-events-none" />
                                        
                                        <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-lg text-xs text-slate-300 font-mono z-20">
                                            <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                                            Live Demo
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-30 pointer-events-none" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Featured Project 2 - PaceX Mobile (React Native) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="group relative rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/10 overflow-hidden hover:border-violet-500/50 transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12 items-center">
                            {/* Samsung S24 Phone Mockup Left */}
                            <motion.div 
                                className="relative flex items-center justify-center p-2 md:order-1"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <PhoneMockup 
                                    src={`${import.meta.env.BASE_URL}pacex_mobile_view.png`}
                                    alt="PaceX Mobile App na tela do Samsung S24"
                                    label="PaceX Mobile"
                                />
                            </motion.div>

                            <div className="space-y-6 md:order-2">
                                <div className="flex items-center gap-2 text-indigo-400 font-medium">
                                    <Smartphone className="w-4 h-4" />
                                    <span>Mobile App (React Native)</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white">PaceX Mobile</h3>

                                <p className="text-slate-400 leading-relaxed">
                                    Aplicativo nativo do ecossistema PaceX AI, desenvolvido em **React Native**. Oferece experiência de treino fluida na palma da mão com cálculos de carga em tempo real, sincronização com a nuvem e prescrições inteligentes com IA.
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {['React Native', 'TypeScript', 'Node.js', 'AWS'].map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4 py-4">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Smartphone className="w-4 h-4 text-indigo-500" />
                                        <span className="text-sm">Performance Nativa Fluida</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Brain className="w-4 h-4 text-violet-500" />
                                        <span className="text-sm">IA Treinador Integrado</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Layers className="w-4 h-4 text-indigo-500" />
                                        <span className="text-sm">Sincronização Cloud AWS</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-2 relative z-20">
                                    <a href="https://pacexai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors font-medium">
                                        <ExternalLink className="w-4 h-4" />
                                        Saiba mais
                                    </a>
                                    <a href="https://github.com/Cawlino" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium border border-slate-700">
                                        <Github className="w-4 h-4" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Featured Project 3 - Adventista Play (React Native) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group relative rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/10 overflow-hidden hover:border-violet-500/50 transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 text-violet-400 font-medium">
                                    <Sparkles className="w-4 h-4" />
                                    <span>Gamified Mobile App</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white">Adventista Play</h3>

                                <p className="text-slate-400 leading-relaxed">
                                    Plataforma gamificada mobile para estudo bíblico e lições da Escola Sabatina. Inspirada no Duolingo, construída totalmente em **React Native**, oferecendo lições interativas, sistema de ofensivas (streaks) e quizzes gerados por Inteligência Artificial.
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {['React Native', 'TypeScript', 'Supabase', 'Gemini AI'].map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4 py-4">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Gamepad2 className="w-4 h-4 text-violet-500" />
                                        <span className="text-sm">Gamificação (XP & Streaks)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Sparkles className="w-4 h-4 text-indigo-500" />
                                        <span className="text-sm">IA Quiz Generator</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Smartphone className="w-4 h-4 text-violet-500" />
                                        <span className="text-sm">Interface Mobile Nativa</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-2 relative z-20">
                                    <a href="https://adventista-play.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors font-medium">
                                        <ExternalLink className="w-4 h-4" />
                                        Testar App
                                    </a>
                                </div>
                            </div>

                            {/* Samsung S24 Phone Mockup Right */}
                            <motion.div 
                                className="relative flex items-center justify-center p-2"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <PhoneMockup 
                                    alt="Adventista Play App na tela do Samsung S24"
                                    label="Adventista Play"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
