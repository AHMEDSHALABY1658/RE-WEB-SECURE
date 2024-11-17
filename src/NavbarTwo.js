import React from 'react';

export default function NavbarTwo({ setSelectedCategory }) {
    return (
        <>
            <button onClick={() => setSelectedCategory('FRONT END')}>FRONT END</button>
            <button onClick={() => setSelectedCategory('UX & UI')}>UX & UI</button>
            <button onClick={() => setSelectedCategory('BACK END')}>BACK END</button>
            <button onClick={() => setSelectedCategory('graphic design')}>graphic design</button>
            <button onClick={() => setSelectedCategory('cyber security')}>cyber security</button>
        </>
    );
}