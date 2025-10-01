
import React from 'react';
import { HandRaisedIcon } from './Icons';

const Palmistry: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto animate-slide-in-up">
            <h1 className="text-4xl font-serif font-bold text-mystic-gold text-center mb-8">The Art of Palmistry</h1>
            <p className="text-center text-gray-400 mb-12">
                Palmistry, with its two divisions of Cheirognomy and Cheiromancy, purports to define character and circumstance by the lines and markings of the hand.
            </p>
            
            <div className="bg-shadow-gray/30 p-8 rounded-lg border border-gray-700">
                <h2 className="text-2xl font-serif font-bold text-mystic-gold mb-4">Cheirognomy: The Types of Hands</h2>
                <div className="space-y-6 text-gray-400">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200">The Conical Hand</h3>
                        <p>Tapered fingertips and smooth joints. Denotes a love of art, refinement, and beauty. Subjects are intuitive, impressionable, and often impulsive. It is essentially Venusian.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200">The Square Hand</h3>
                        <p>Large, broad, with square fingertips. Belongs to those with a love of order, neatness, and punctuality. Logical and mathematical faculties are prominent. Justice is a strong point.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200">The Spatulate Hand</h3>
                        <p>Known by spade-like tips of the fingers. Possessed by people with practical ambitions. Essentially matter-of-fact and utilitarian, generally hard workers with a turn for mechanics.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200">The Philosophic Hand</h3>
                        <p>Known by protruding joints and a long middle finger. Shows a love of philosophy and a desire to know the "reason why." Concerned with the imponderables in Nature.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200">The Psychic Hand</h3>
                        <p>Allied to the conical, but with a long, narrow palm and tapering fingers. Denotes a sensitive, impressionable nature, fine nervous organism, and an idealistic temperament.</p>
                    </div>
                </div>
            </div>

             <div className="bg-shadow-gray/30 p-8 rounded-lg border border-gray-700 mt-8">
                <h2 className="text-2xl font-serif font-bold text-mystic-gold mb-4">The Principal Lines</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200">The Life Line</h3>
                        <p>Surrounds the Mount of Venus. Shows the constitution, vital powers, and probable duration of life.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200">The Head Line</h3>
                        <p>Stretches across the hand from the Life Line. Governs the intellect, mental attainments, and natural aptitudes.</p>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold text-gray-200">The Heart Line</h3>
                        <p>Arises on the percussion and crosses the hand. Governs the affections, emotions, and the condition of the vital organ.</p>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold text-gray-200">The Fate Line</h3>
                        <p>Rises from the wrist and proceeds up the palm. Denotes the course of destiny, the stages and crises of life.</p>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Palmistry;
