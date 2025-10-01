
import React, { useState } from 'react';
import { getMysticInterpretation } from '../services/geminiService';
import { StarIcon } from './Icons';

const MysticOracle: React.FC = () => {
    const [query, setQuery] = useState('');
    const [interpretation, setInterpretation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleQuery = async () => {
        if (!query.trim()) {
            setError('You must pose a question to the ether.');
            return;
        }
        setIsLoading(true);
        setError('');
        setInterpretation('');
        const result = await getMysticInterpretation(query);
        setInterpretation(result);
        setIsLoading(false);
    };

    const formatInterpretation = (text: string) => {
        const parts = text.split('\n').filter(p => p.trim() !== '');
        return parts.map((part, index) => {
             if (index === 0) {
                 return <h3 key={index} className="text-2xl font-serif font-bold text-mystic-gold mb-4 text-center">{part.replace(/\*/g, '')}</h3>;
             }
            return <p key={index} className="mb-4 leading-relaxed">{part}</p>;
        });
    };

    return (
        <div className="max-w-3xl mx-auto text-center animate-slide-in-up">
            <h1 className="text-4xl font-serif font-bold text-mystic-gold mb-4">The Mystic Oracle</h1>
            <p className="text-gray-400 mb-8">
                Quiet your mind, focus on your query, and present it to the Oracle. An interpretation drawn from the cosmic currents shall be revealed.
            </p>

            <div className="bg-shadow-gray/30 p-8 rounded-lg border border-gray-700">
                <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full bg-celestial-blue border border-gray-600 rounded-md px-3 py-2 text-gray-200 focus:ring-mystic-gold focus:border-mystic-gold resize-none"
                    rows={4}
                    placeholder="Ask about your path, your dream, your dilemma..."
                    disabled={isLoading}
                />
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                <button
                    onClick={handleQuery}
                    className="mt-4 w-full bg-mystic-gold text-celestial-blue font-bold py-3 px-4 rounded-md hover:bg-amber-400 transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Consulting the cosmos...
                        </>
                    ) : (
                       <>
                         <StarIcon className="mr-2" />
                         Receive Oracle's Insight
                       </>
                    )}
                </button>
            </div>

            {interpretation && (
                <div className="mt-10 bg-parchment/10 p-8 rounded-lg border-2 border-dashed border-mystic-gold/50 animate-fade-in text-left">
                    {formatInterpretation(interpretation)}
                </div>
            )}
        </div>
    );
};

export default MysticOracle;
