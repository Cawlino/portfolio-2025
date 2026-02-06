import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, Award, X } from 'lucide-react';

const Experience = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isLocked, setIsLocked] = useState(false);

    const experiences = [
        {
            company: "ROQT",
            role: "Analista de Dados & BI",
            date: "2025 - 2025",
            description: "Desenvolvimento de dashboards estratégicos em Power BI e implementação de pipelines ETL eficientes com Python e SQL para análise de dados.",
        },
        {
            company: "Ired Internet",
            role: "Suporte Técnico N2",
            date: "2023 - 2025",
            description: "Diagnóstico avançado de redes e resolução de incidentes críticos. Desenvolvimento rigoroso de capacidade analítica e troubleshooting.",
        }
    ];

    const education = [
        {
            institution: "UniCesumar",
            degree: "Engenharia de Software",
            date: "2025",
            type: "education",
            image: `${import.meta.env.BASE_URL}certificates/unicesumar.jpg`
        },
        {
            institution: "Unova Cursos",
            degree: "Inteligência Artificial",
            date: "2025",
            type: "certification",
            image: `${import.meta.env.BASE_URL}certificates/unova_ai.jpg`
        },
        {
            institution: "Data Science Academy",
            degree: "Microsoft Power BI Para Business Intelligence e Data Science",
            date: "2025",
            type: "certification",
            image: `${import.meta.env.BASE_URL}certificates/power_bi.jpg`
        }
    ];

    const handleMouseEnter = (img: string) => {
        if (!isLocked) setSelectedImage(img);
    };

    const handleMouseLeave = () => {
        if (!isLocked) setSelectedImage(null);
    };

    const handleClick = (img: string) => {
        setSelectedImage(img);
        setIsLocked(true);
    };

    const handleClose = () => {
        setSelectedImage(null);
        setIsLocked(false);
    };

    return (
        <section id="experience" className="py-12 md:py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Professional <span className="text-violet-500">Journey</span>
                    </h2>
                    <div className="h-1 w-20 bg-violet-500 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-8 text-slate-200">
                            <Briefcase className="w-5 h-5 text-violet-500" />
                            <h3 className="text-xl font-bold">Work Experience</h3>
                        </div>

                        <div className="space-y-8 pl-4 border-l-2 border-slate-800">
                            {experiences.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="relative pl-8 group"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-800 border-2 border-violet-500 group-hover:bg-violet-500 transition-colors" />

                                    <span className="text-sm font-medium text-violet-400 mb-1 block flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {exp.date}
                                    </span>
                                    <h4 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                                        {exp.role}
                                    </h4>
                                    <p className="text-slate-400 font-medium mb-2">{exp.company}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-8 text-slate-200">
                            <GraduationCap className="w-5 h-5 text-violet-500" />
                            <h3 className="text-xl font-bold">Education & Tech</h3>
                        </div>

                        <div className="space-y-4">
                            {education.map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-xl hover:border-violet-500/30 transition-colors flex flex-col sm:flex-row items-start gap-4"
                                >
                                    <div className="flex-1 flex items-start gap-4">
                                        <div className="p-3 bg-slate-800 rounded-lg text-violet-400 shrink-0">
                                            {edu.type === 'education' ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">{edu.degree}</h4>
                                            <p className="text-slate-400">{edu.institution}</p>
                                            <p className="text-slate-500 text-sm mt-1">{edu.date}</p>
                                        </div>
                                    </div>

                                    {edu.image && (
                                        <div className="w-full sm:w-32 shrink-0">
                                            <div
                                                className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-700 hover:border-violet-500 transition-colors cursor-pointer group/img relative bg-slate-800"
                                                onMouseEnter={() => handleMouseEnter(edu.image)}
                                                onMouseLeave={handleMouseLeave}
                                                onClick={() => handleClick(edu.image)}
                                            >
                                                <img
                                                    src={edu.image}
                                                    alt={edu.degree}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-violet-500/0 group-hover/img:bg-violet-500/10 transition-colors flex items-center justify-center">
                                                    <div className="opacity-0 group-hover/img:opacity-100 transform scale-90 group-hover/img:scale-100 transition-all bg-slate-900/80 p-1.5 rounded-full backdrop-blur-sm">
                                                        <Award className="w-4 h-4 text-violet-400" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className={`fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-all ${isLocked ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'
                            }`}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 10 }}
                            onClick={(e) => isLocked && e.stopPropagation()}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-auto max-w-[90vw] max-h-[90vh] bg-slate-900/90 rounded-2xl overflow-hidden shadow-2xl border border-violet-500/30 flex flex-col p-2 cursor-auto"
                        >
                            {/* Close Button - Only visible/clickable when locked */}
                            {isLocked && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleClose(); }}
                                    className="absolute top-2 right-2 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-violet-500 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}

                            <div className="overflow-hidden rounded-xl flex items-center justify-center bg-black/50 h-full w-full">
                                <img
                                    src={selectedImage}
                                    alt="Certificate Full View"
                                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
