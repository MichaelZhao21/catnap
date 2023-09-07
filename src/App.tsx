import React from 'react';
import catnapLogo from './catnap.svg';

function App() {
    return (
        <div className="bg-primary h-full w-full flex flex-col items-center justify-center">
            <div className="w-20 mb-4">
                <img src={catnapLogo} />
            </div>
            <h1 className="font-display text-5xl text-white">Cat Nap</h1>
        </div>
    );
}

export default App;
