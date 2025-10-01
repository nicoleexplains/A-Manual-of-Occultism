
import React from 'react';

type IconProps = {
  className?: string;
};

export const SunIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M19 3v4m2-2h-4m-3 10v4m-2 2h4m-3-12l-2-2m6 0l-2 2m-4 8l-2 2m6 0l-2-2" />
    </svg>
);

export const HandRaisedIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15V9m-2.25 7.5h4.5M9.75 9h4.5M10 3v1.5a1.5 1.5 0 003 0V3m-5.25 12v3a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-3M9 3h6a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z" transform="M12 12 S 8 13, 7 17 M12 12 S 16 13, 17 17 M12 12 V 9 M12 9 C 11 8, 10 8, 9 9 M12 9 C 13 8, 14 8, 15 9" />
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l-4 4m0-4l4 4m-4-4v-3a2 2 0 012-2h4a2 2 0 012 2v3m-6 4h6m-3-4V7m0 10v-3" />
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21.25a9.25 9.25 0 1 0-9.25-9.25M12 21.25A9.25 9.25 0 0 1 2.75 12M2.75 12a9.25 9.25 0 0 0 18.5 0M2.75 12h18.5M12 2.75a9.25 9.25 0 0 1 0 18.5" />
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-8v.5m.5-1H6.5m1.5 10v-3.5m0 3.5h.5m-.5 0h-.5m5-10v.5m0-1v1m0-1h-.5m.5 0h.5m-5 3v3.5m0-3.5h.5m-.5 0h-.5m2.5 6.5V14m0-1.5v-2m4-4h.5m-.5 0h-.5m-3 3h.5m-.5 0h-.5m0 4.5h.5m-.5 0h-.5" />
           <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-8V7h2v5h3v2h-3v3h-2v-3H8v-2h3z" clip-rule="evenodd" fill-rule="evenodd" />
            <path d="M 10,2.5 L 10,9 L 6,9 L 12.5,16 L 19,9 L 15,9 L 15,2.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.2 6.8a5.5 5.5 0 10-7.7 7.7 5.5 5.5 0 007.7-7.7zM12 17.5V19m0-15v1.5m7.5-1.5L18 3.5m-13 13l-1.5 1.5m13-1.5L18 16.5m-13-13l-1.5-1.5M4.5 12H3m18 0h-1.5"/>
    </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);
