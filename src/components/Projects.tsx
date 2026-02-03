import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Server, Database, Brain } from 'lucide-react';

// Use absolute paths for the generated images from artifacts
// Note: In a real Vite app, these would typically be in the public folder or imported assets.
// Since we are in this environment, we will use the file paths but Vite might not serve them directly if outside src/public.
// We should copy them to public first. Let's assume we will move them. 
// For now, I'll use placeholders that point to the artifact location if possible or just rely on the step where I move them.
// Actually, I need to move the images to the public folder first.

const Projects = () => {
    // No state needed for static visual
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

                {/* Featured Project - Layout diferente para destaque */}
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
                                <span>Featured Project</span>
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

                        {/* Abstract Visual - Code Snippet */}
                        <div className="relative h-64 md:h-full min-h-[300px] bg-slate-950 rounded-xl border border-slate-800 overflow-hidden group-hover:border-violet-500/30 transition-colors flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-transparent to-indigo-500/5" />

                            {/* Floating Code Card */}
                            <div className="relative w-full max-w-[320px] bg-slate-900/90 backdrop-blur border border-slate-800 rounded-lg p-5 shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
                                <div className="flex gap-1.5 mb-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                </div>
                                <div className="space-y-2.5 font-mono text-xs">
                                    <div className="flex">
                                        <span className="text-violet-400 mr-2">const</span>
                                        <span className="text-blue-400">PaceX</span>
                                        <span className="text-slate-500 mx-2">=</span>
                                        <span className="text-yellow-300">async</span>
                                        <span className="text-slate-300">()</span>
                                        <span className="text-slate-500 mx-2">=&gt;</span>
                                        <span className="text-slate-300">{`{`}</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-violet-400">await</span>
                                        <span className="text-blue-300 ml-2">trainAIModel</span>
                                        <span className="text-slate-300">({`{`}</span>
                                    </div>
                                    <div className="pl-8">
                                        <span className="text-slate-400">accuracy:</span>
                                        <span className="text-green-400 ml-2">99.9%</span>
                                        <span className="text-slate-500">,</span>
                                    </div>
                                    <div className="pl-8">
                                        <span className="text-slate-400">mode:</span>
                                        <span className="text-orange-300 ml-2">'pro-athlete'</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-slate-300">{`}`});</span>
                                    </div>
                                    <div className="pl-4 text-slate-500">// AI Personalized Workouts</div>
                                    <div className="pl-4">
                                        <span className="text-violet-400">return</span>
                                        <span className="text-blue-300 ml-2">performance</span>
                                        <span className="text-slate-300">;</span>
                                    </div>
                                    <div><span className="text-slate-300">{`}`}</span></div>
                                </div>
                            </div>

                            {/* Background decorative elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
                        </div>
                    </div>
                </motion.div>

                {/* Additional Projects Grid placeholder if needed in future */}
                {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">...</div> */}
            </div>
        </section>
    );
};

export default Projects;
