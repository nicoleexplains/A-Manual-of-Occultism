
import React, { useState } from 'react';

const zodiacSigns = [
    { name: 'Aries', date: 'Mar 21 - Apr 19', element: 'Fire', traits: 'Ambitious, independent, impatient' },
    { name: 'Taurus', date: 'Apr 20 - May 20', element: 'Earth', traits: 'Reliable, patient, practical' },
    { name: 'Gemini', date: 'May 21 - Jun 20', element: 'Air', traits: 'Curious, adaptable, expressive' },
    { name: 'Cancer', date: 'Jun 21 - Jul 22', element: 'Water', traits: 'Intuitive, sentimental, compassionate' },
    { name: 'Leo', date: 'Jul 23 - Aug 22', element: 'Fire', traits: 'Proud, bold, ambitious' },
    { name: 'Virgo', date: 'Aug 23 - Sep 22', element: 'Earth', traits: 'Practical, loyal, analytical' },
    { name: 'Libra', date: 'Sep 23 - Oct 22', element: 'Air', traits: 'Diplomatic, fair, social' },
    { name: 'Scorpio', date: 'Oct 23 - Nov 21', element: 'Water', traits: 'Passionate, stubborn, resourceful' },
    { name: 'Sagittarius', date: 'Nov 22 - Dec 21', element: 'Fire', traits: 'Extroverted, optimistic, funny' },
    { name: 'Capricorn', date: 'Dec 22 - Jan 19', element: 'Earth', traits: 'Serious, disciplined, independent' },
    { name: 'Aquarius', date: 'Jan 20 - Feb 18', element: 'Air', traits: 'Imaginative, original, uncompromising' },
    { name: 'Pisces', date: 'Feb 19 - Mar 20', element: 'Water', traits: 'Affectionate, empathetic, wise' },
];

const Astrology: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };
    
    return (
        <div className="max-w-4xl mx-auto animate-slide-in-up">
            <h1 className="text-4xl font-serif font-bold text-mystic-gold text-center mb-8">The Occult Science of Astrology</h1>
            <p className="text-center text-gray-400 mb-12">
                "THE astrologic art is held to be the key to all the occult sciences. Certainly it is the most ancient, and that which most readily lends itself to scientific demonstration." - A Manual of Occultism
            </p>
            
            <div className="space-y-4">
                <div className="bg-shadow-gray/30 rounded-lg border border-gray-700">
                    <button onClick={() => toggleSection('signs')} className="w-full text-left p-4 font-serif text-lg font-bold text-gray-100 flex justify-between items-center">
                        The Signs of the Zodiac
                        <span>{openSection === 'signs' ? '-' : '+'}</span>
                    </button>
                    {openSection === 'signs' && (
                        <div className="p-4 border-t border-gray-700">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {zodiacSigns.map(sign => (
                                    <div key={sign.name} className="bg-celestial-blue p-4 rounded-md border border-gray-600">
                                        <h3 className="font-bold text-mystic-gold">{sign.name}</h3>
                                        <p className="text-sm text-gray-400">{sign.date}</p>
                                        <p className="text-sm mt-1"><span className="font-semibold">Element:</span> {sign.element}</p>
                                        <p className="text-sm"><span className="font-semibold">Traits:</span> {sign.traits}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-shadow-gray/30 rounded-lg border border-gray-700">
                    <button onClick={() => toggleSection('planets')} className="w-full text-left p-4 font-serif text-lg font-bold text-gray-100 flex justify-between items-center">
                        The Planets
                        <span>{openSection === 'planets' ? '-' : '+'}</span>
                    </button>
                    {openSection === 'planets' && (
                        <div className="p-4 border-t border-gray-700 text-gray-400">
                            <p>The planets, including the Sun and Moon, are nine in number in traditional astrology. Each has its own characteristic:</p>
                            <ul className="list-disc list-inside mt-4 space-y-2">
                                <li><strong>The Moon:</strong> Change or mobility.</li>
                                <li><strong>Venus:</strong> Placidity or peace.</li>
                                <li><strong>Mercury:</strong> Activity.</li>
                                <li><strong>The Sun:</strong> Vitality.</li>
                                <li><strong>Mars:</strong> Energy.</li>
                                <li><strong>Jupiter:</strong> Expansion (The Greater Fortune).</li>
                                <li><strong>Saturn:</strong> Privation (The Greater Infortune).</li>
                                <li><strong>Uranus:</strong> Disruption.</li>
                                <li><strong>Neptune:</strong> Chaos.</li>
                            </ul>
                        </div>
                    )}
                </div>

                 <div className="bg-shadow-gray/30 rounded-lg border border-gray-700">
                    <button onClick={() => toggleSection('aspects')} className="w-full text-left p-4 font-serif text-lg font-bold text-gray-100 flex justify-between items-center">
                        The Aspects
                        <span>{openSection === 'aspects' ? '-' : '+'}</span>
                    </button>
                    {openSection === 'aspects' && (
                        <div className="p-4 border-t border-gray-700 text-gray-400">
                            <p>An aspect is the angular distance between two celestial bodies, which determines whether their influence is harmonious or challenging.</p>
                            <h4 className="font-bold text-gray-200 mt-4">Good Aspects:</h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li><strong>Trine (120°):</strong> Harmonizing and beneficial.</li>
                                <li><strong>Sextile (60°):</strong> Good, but less powerful than a trine.</li>
                                <li><strong>Semisextile (30°):</strong> Mildly propitious.</li>
                            </ul>
                            <h4 className="font-bold text-gray-200 mt-4">Evil Aspects:</h4>
                             <ul className="list-disc list-inside space-y-1">
                                <li><strong>Opposition (180°):</strong> Disunion and inharmonious results.</li>
                                <li><strong>Square (90°):</strong> Powerful for evil, creates tension.</li>
                                <li><strong>Sesquiquadrate (135°):</strong> Powerful for evil.</li>
                                <li><strong>Semisquare (45°):</strong> Mildly evil.</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Astrology;
