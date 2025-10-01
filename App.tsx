
import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Astrology from './components/Astrology';
import Numerology from './components/Numerology';
import Palmistry from './components/Palmistry';
import MysticOracle from './components/MysticOracle';
import { SunIcon, MoonIcon, SparklesIcon, HandRaisedIcon, StarIcon } from './components/Icons';

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', name: 'Home', icon: <SunIcon /> },
        { path: '/astrology', name: 'Astrology', icon: <MoonIcon /> },
        { path: '/numerology', name: 'Numerology', icon: <SparklesIcon /> },
        { path: '/palmistry', name: 'Palmistry', icon: <HandRaisedIcon /> },
        { path: '/oracle', name: 'Mystic Oracle', icon: <StarIcon /> },
    ];

    return (
        <HashRouter>
            <div className="min-h-screen bg-celestial-blue text-gray-300 font-sans">
                <header className="bg-shadow-gray/50 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-mystic-gold/10">
                    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <div className="text-2xl font-serif font-bold text-mystic-gold">
                            Digital Grimoire
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map(link => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-2 transition-colors duration-300 hover:text-mystic-gold ${isActive ? 'text-mystic-gold' : 'text-gray-300'}`
                                    }
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </NavLink>
                            ))}
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                            </button>
                        </div>
                    </nav>
                    {isMenuOpen && (
                        <div className="md:hidden bg-shadow-gray pb-4">
                            {navLinks.map(link => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-3 px-6 py-3 transition-colors duration-300 hover:bg-celestial-blue ${isActive ? 'text-mystic-gold' : 'text-gray-300'}`
                                    }
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    )}
                </header>

                <main className="container mx-auto p-4 md:p-8 animate-fade-in">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/astrology" element={<Astrology />} />
                        <Route path="/numerology" element={<Numerology />} />
                        <Route path="/palmistry" element={<Palmistry />} />
                        <Route path="/oracle" element={<MysticOracle />} />
                    </Routes>
                </main>
                 <footer className="text-center py-4 text-gray-500 text-sm mt-8">
                    <p>&copy; {new Date().getFullYear()} Digital Grimoire. For entertainment purposes only.</p>
                </footer>
            </div>
        </HashRouter>
    );
};

export default App;
