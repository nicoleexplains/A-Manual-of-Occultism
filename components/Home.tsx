
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MoonIcon, SparklesIcon, HandRaisedIcon, StarIcon } from './Icons';

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    path: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, path }) => {
    const navigate = useNavigate();
    return (
        <div 
            onClick={() => navigate(path)}
            className="bg-shadow-gray/50 p-6 rounded-lg border border-gray-700 hover:border-mystic-gold cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-mystic-gold/10 group animate-slide-in-up"
        >
            <div className="flex items-center justify-center mb-4 text-mystic-gold h-12 w-12 rounded-full bg-celestial-blue group-hover:bg-mystic-gold group-hover:text-celestial-blue transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-100 mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-mystic-gold mb-4 animate-fade-in">A Manual of Occultism</h1>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Explore the hidden sciences and unlock the secrets of the cosmos. Choose your path of inquiry from the disciplines below.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card 
                    title="Astrology" 
                    description="Uncover the influence of the celestial bodies on life and destiny. Learn the language of the heavens." 
                    icon={<MoonIcon />} 
                    path="/astrology"
                />
                <Card 
                    title="Numerology" 
                    description="Calculate the mystical significance of names and numbers to reveal character and fortune." 
                    icon={<SparklesIcon />} 
                    path="/numerology"
                />
                <Card 
                    title="Palmistry" 
                    description="Read the lines and mounts of the hand to understand personality, potential, and fate." 
                    icon={<HandRaisedIcon />} 
                    path="/palmistry"
                />
                <Card 
                    title="Mystic Oracle" 
                    description="Consult the digital ether. Ask a question and receive a mystical interpretation from the Gemini Oracle." 
                    icon={<StarIcon />} 
                    path="/oracle"
                />
            </div>
        </div>
    );
};

export default Home;
