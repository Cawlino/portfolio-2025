import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, Award, X } from 'lucide-react';

const Experience = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        if (selectedImage) dialogRef.current?.showModal();
        else dialogRef.current?.close();
    }, [selectedImage]);

    const experiences = [
        {
            company: "PaceX AI & Freelance",
            role: "Tech Lead & Engenheiro de Software Full Stack",
            date: "2025 - Presente",
            description: [
                "Liderança de produto e desenvolvimento de ponta a ponta de plataformas completas em React/Next.js, Node.js e React Native.",
                "Implementação e integração de motores de IA (Gemini, OpenRouter) com foco em escalabilidade e interfaces dinâmicas.",
                "Arquiteturas backend robustas baseadas em PostgreSQL, Docker e integração de gateways de pagamento."
            ],
        },
        {
            company: "ROQT | Data & AI",
            role: "Analista de Dados / BI",
            date: "Jun 2025 - Ago 2025",
            description: [
                "Desenvolvimento e manutenção de dashboards interativos no Power BI com modelagem em DAX e Power Query.",
                "Criação de pipelines de dados e ETL utilizando SQL e Python para integração de múltiplas fontes.",
                "Geração de relatórios automatizados, análises preditivas e insights estratégicos em squads ágeis."
            ],
        },
        {
            company: "Ired Internet",
            role: "Suporte Técnico N2 e Estágio",
            date: "Nov 2023 - Jun 2025",
            description: [
                "Diagnóstico e resolução de incidentes complexos de conectividade e redes, desenvolvendo forte capacidade analítica.",
                "Atendimento direto para mitigação de lentidões em demandas de serviços financeiros e administrativos."
            ],
        }
    ];

    const education = [
        { institution: "Alura", degree: "Imersão Engenharia de Software: Dev na Era da IA", date: "04/11/2026", type: "certification", image: `${import.meta.env.BASE_URL}certificates/alura-engenharia-software.png` },
        { institution: "Samsung Ocean", degree: "Introdução à Otimização e Computação Evolucionária — Fundamentos de Otimização e Programação Linear", date: "13/10/2026 · 3 horas", type: "certification", image: `${import.meta.env.BASE_URL}certificates/samsung-ocean.png` },
        {
            institution: "UniCesumar",
            degree: "Bacharelado em Engenharia de Software",
            date: "Jan 2022 - Dez 2026",
            type: "education",
            image: `${import.meta.env.BASE_URL}certificates/unicesumar.jpg`
        },
        {
            institution: "UniCesumar",
            degree: "Master of Business Administration (MBA)",
            date: "Em andamento",
            type: "education"
        },
        {
            institution: "Udemy Alumni",
            degree: "Técnico em TI (Integrado em Tecnologia da Informação)",
            date: "Dez 2025 - Jan 2026",
            type: "certification"
        },
        {
            institution: "Udemy",
            degree: "Desenvolvimento Full Stack (The Complete Full-Stack Web Development Bootcamp)",
            date: "2025",
            type: "certification"
        },
        {
            institution: "Data Science Academy",
            degree: "Microsoft Power BI Para Business Intelligence e Data Science",
            date: "2025",
            type: "certification",
            image: `${import.meta.env.BASE_URL}certificates/power_bi.jpg`
        }
    ];

    const handleClick = (img: string) => setSelectedImage(img);
    const handleClose = () => setSelectedImage(null);

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
                        Minha <span className="text-accent-500">trajetória</span>
                    </h2>
                    <div className="h-1 w-20 bg-accent-500 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-8 text-neutral-200">
                            <Briefcase className="w-5 h-5 text-accent-500" />
                            <h3 className="text-xl font-bold">Experiência profissional</h3>
                        </div>

                        <div className="space-y-8 pl-4 border-l-2 border-neutral-800">
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
                                    <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-neutral-800 border-2 border-accent-500 group-hover:bg-accent-500 transition-colors" />

                                    <span className="text-sm font-medium text-accent-400 mb-1 block flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {exp.date}
                                    </span>
                                    <h4 className="text-lg font-bold text-white group-hover:text-accent-300 transition-colors">
                                        {exp.role}
                                    </h4>
                                    <p className="text-neutral-400 font-medium mb-2">{exp.company}</p>
                                    <ul className="text-neutral-400 text-sm leading-relaxed space-y-1.5 list-disc list-inside">
                                        {exp.description.map((bullet, i) => (
                                            <li key={i} className="text-neutral-400">{bullet}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-8 text-neutral-200">
                            <GraduationCap className="w-5 h-5 text-accent-500" />
                            <h3 className="text-xl font-bold">Formação e certificados</h3>
                        </div>

                        <div className="space-y-4">
                            {education.map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="bg-neutral-900/50  border border-neutral-800 p-6 rounded-xl hover:border-accent-500/30 transition-colors flex flex-col sm:flex-row items-start gap-4"
                                >
                                    <div className="flex-1 flex items-start gap-4">
                                        <div className="p-3 bg-neutral-800 rounded-lg text-accent-400 shrink-0">
                                            {edu.type === 'education' ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">{edu.degree}</h4>
                                            <p className="text-neutral-400">{edu.institution}</p>
                                            <p className="text-neutral-500 text-sm mt-1">{edu.date}</p>
                                        </div>
                                    </div>

                                    {edu.image && (
                                        <div className="w-full sm:w-32 shrink-0">
                                            <button type="button" aria-label={`Ampliar certificado: ${edu.degree}`}
                                                className="aspect-[4/3] rounded-lg overflow-hidden border border-neutral-700 hover:border-accent-500 transition-colors cursor-pointer group/img relative bg-neutral-800"


                                                onClick={() => handleClick(edu.image)}
                                            >
                                                <img
                                                    src={edu.image}
                                                    alt={edu.degree}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-accent-500/0 group-hover/img:bg-accent-500/10 transition-colors flex items-center justify-center">
                                                    <div className="opacity-0 group-hover/img:opacity-100 transform scale-90 group-hover/img:scale-100 transition-all bg-neutral-900/80 p-1.5 rounded-full ">
                                                        <Award className="w-4 h-4 text-accent-400" />
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <dialog ref={dialogRef} className="certificate-dialog" onCancel={handleClose} onClick={e=>{if(e.target===e.currentTarget)handleClose();}} onClose={handleClose} aria-label="Visualização do certificado">
                <button autoFocus onClick={handleClose} className="dialog-close" aria-label="Fechar certificado"><X /></button>
                {selectedImage && <><img src={selectedImage} alt="Certificado ampliado" /><a href={selectedImage.includes('alura-') ? `${import.meta.env.BASE_URL}certificates/alura-engenharia-software.pdf` : selectedImage} target="_blank" rel="noopener noreferrer">Abrir documento original ↗</a></>}
            </dialog>
        </section>
    );
};
export default Experience;
