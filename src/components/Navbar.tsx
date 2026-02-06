import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#hero' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
    ];

    return (
        <>
            {/* Standard Navbar - Visible only at Top */}
            <AnimatePresence>
                {!scrolled && (
                    <motion.nav
                        initial={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, pointerEvents: 'none' }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 w-full z-50 bg-transparent py-4 md:py-6"
                    >
                        <div className="container mx-auto px-6 flex justify-between items-center">
                            <a href="#" className="font-bold text-xl flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors">
                                <Code2 className="w-8 h-8" />
                                <span>Daniel.dev</span>
                            </a>

                            {/* Desktop Desktop Links */}
                            <div className="hidden md:flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-slate-300 hover:text-violet-400 font-medium transition-colors text-sm tracking-wide"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="https://wa.me/5544999063897"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all transform hover:scale-105 shadow-lg shadow-violet-500/20 text-sm"
                                >
                                    Contate-me
                                </a>
                            </div>

                            {/* Mobile Standard Toggle */}
                            <button
                                className="md:hidden text-slate-300 hover:text-white"
                                onClick={() => setIsOpen(true)}
                            >
                                <Menu />
                            </button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Floating Menu Button - Visible when Scrolled */}
            <AnimatePresence>
                {scrolled && (
                    <motion.button
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: -180 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed top-6 right-6 z-[1200] p-3 rounded-full bg-violet-600/90 hover:bg-violet-500 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110"
                    >
                        <Menu className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Menu Overlay (Used for both mobile initial and scrolled state) */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[1200]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-80 bg-slate-900 border-l border-slate-800 z-[1201] p-8 shadow-2xl flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <span className="text-xl font-bold text-violet-400">Menu</span>
                                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-medium text-slate-300 hover:text-violet-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="https://wa.me/5544999063897"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 px-4 py-3 rounded-xl bg-violet-600 text-white text-center font-bold hover:bg-violet-500 transition-all"
                                >
                                    Contate-me
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
