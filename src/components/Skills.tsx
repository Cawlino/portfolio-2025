import { motion } from 'framer-motion';
import { Server, Cloud, Database, Layout } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend & Mobile App",
            icon: Layout,
            skills: ["React 19", "React Native", "Next.js", "TypeScript", "TanStack Router", "Tailwind CSS", "Expo", "Framer Motion"]
        },
        {
            title: "Backend & Database",
            icon: Server,
            skills: ["Node.js", "Python / Django", "PostgreSQL", "Drizzle ORM", "Supabase", "Docker", "REST APIs", "Stripe / AbacatePay"]
        },
        {
            title: "Cloud & AI Engineering",
            icon: Cloud,
            skills: ["Function Calling", "Gemini AI", "Grok AI", "OpenRouter", "AI Agents", "AWS Cloud", "Docker"]
        },
        {
            title: "Data Science & BI",
            icon: Database,
            skills: ["Power BI", "DAX", "Power Query", "SQL", "ETL Pipelines", "Python Analytics"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="py-12 md:py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Conhecimento <span className="text-accent-500">técnico</span>
                    </h2>
                    <div className="h-1 w-20 bg-accent-500 rounded-full md:mx-auto" />
                    <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">
                        Dominando o ecossistema moderno de desenvolvimento web com foco em performance, escalabilidade e inteligência artificial.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="bg-neutral-900/50  border border-neutral-800 p-6 rounded-xl hover:border-accent-500/30 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-500/20 group-hover:text-accent-400 transition-all text-neutral-400">
                                <category.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs font-medium px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-neutral-700/50"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
