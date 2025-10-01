
import React, { useState } from 'react';

const letterValues: { [key: string]: number } = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 8, g: 3, h: 5, i: 1, j: 1, k: 2, l: 3, m: 4, n: 5, o: 7, p: 8, q: 1, r: 2, s: 3, t: 4, u: 6, v: 6, w: 6, x: 5, y: 1, z: 7
};

const numberMeanings: { [key: number]: string } = {
    1: 'Individuality, ambition, leadership, possible egotism.',
    2: 'Relationship, psychic attraction, emotionalism, sympathy, doubt.',
    3: 'Expansion, creativity, intellectual capacity, riches and success.',
    4: 'Realization, property, possessions, stability, materiality.',
    5: 'Reason, logic, travel, commerce, freedom.',
    6: 'Co-operation, marriage, harmony, art, music, reciprocity.',
    7: 'Equilibrium, contracts, agreements, spirituality, introspection.',
    8: 'Reconstruction, death, negation, power, material success.',
    9: 'Penetration, strife, energy, enterprise, humanitarianism.',
};

const reduceNumber = (num: number): number => {
    if (num < 10) return num;
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return reduceNumber(sum);
};

const Numerology: React.FC = () => {
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [result, setResult] = useState<{nameNumber: number, lifePathNumber: number} | null>(null);

    const calculateNumerology = () => {
        // Name Number
        const nameSum = name.toLowerCase().replace(/[^a-z]/g, '').split('').reduce((acc, char) => {
            return acc + (letterValues[char] || 0);
        }, 0);
        const nameNumber = reduceNumber(nameSum);

        // Life Path Number
        if (birthDate) {
            const dateSum = birthDate.replace(/-/g, '').split('').reduce((acc, digit) => acc + parseInt(digit), 0);
            const lifePathNumber = reduceNumber(dateSum);
            setResult({nameNumber, lifePathNumber});
        } else {
             setResult({nameNumber, lifePathNumber: 0});
        }
    };

    return (
        <div className="max-w-3xl mx-auto animate-slide-in-up">
            <h1 className="text-4xl font-serif font-bold text-mystic-gold text-center mb-8">The Calculatory Art of Numerology</h1>
            <p className="text-center text-gray-400 mb-12">
                "To understand the power of one’s own soul in the universe is the first essential of the magical art. To know that power, one must know his number." - A Manual of Occultism
            </p>

            <div className="bg-shadow-gray/30 p-8 rounded-lg border border-gray-700">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-mystic-gold mb-2">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-celestial-blue border border-gray-600 rounded-md px-3 py-2 text-gray-200 focus:ring-mystic-gold focus:border-mystic-gold"
                            placeholder="Enter your full birth name"
                        />
                    </div>
                    <div>
                        <label htmlFor="birthDate" className="block text-sm font-medium text-mystic-gold mb-2">Date of Birth</label>
                        <input
                            type="date"
                            id="birthDate"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="w-full bg-celestial-blue border border-gray-600 rounded-md px-3 py-2 text-gray-200 focus:ring-mystic-gold focus:border-mystic-gold"
                        />
                    </div>
                    <button
                        onClick={calculateNumerology}
                        className="w-full bg-mystic-gold text-celestial-blue font-bold py-3 px-4 rounded-md hover:bg-amber-400 transition-colors duration-300"
                    >
                        Reveal My Numbers
                    </button>
                </div>
            </div>

            {result && (
                <div className="mt-10 bg-parchment/10 p-8 rounded-lg border border-mystic-gold/30 animate-fade-in">
                    <h2 className="text-2xl font-serif text-mystic-gold text-center mb-6">Your Mystic Numbers</h2>
                    <div className="space-y-6">
                        {result.nameNumber > 0 && <div>
                            <h3 className="text-xl font-bold font-serif">Name Number (Destiny): {result.nameNumber}</h3>
                            <p className="text-gray-300 mt-2">{numberMeanings[result.nameNumber]}</p>
                        </div>}
                        {result.lifePathNumber > 0 && <div>
                            <h3 className="text-xl font-bold font-serif">Life Path Number: {result.lifePathNumber}</h3>
                            <p className="text-gray-300 mt-2">{numberMeanings[result.lifePathNumber]}</p>
                        </div>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Numerology;
