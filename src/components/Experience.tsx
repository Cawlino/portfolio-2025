import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
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
            type: "education"
        },
        {
            institution: "AWS",
            degree: "Certified AI Practitioner (AIFC-01)",
            date: "2025",
            type: "certification"
        }
    ];

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
                                    className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-xl hover:border-violet-500/30 transition-colors flex items-start gap-4"
                                >
                                    <div className="p-3 bg-slate-800 rounded-lg text-violet-400">
                                        {edu.type === 'education' ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{edu.degree}</h4>
                                        <p className="text-slate-400">{edu.institution}</p>
                                        <p className="text-slate-500 text-sm mt-1">{edu.date}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
