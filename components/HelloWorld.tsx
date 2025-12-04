import React from 'react';

export const HelloWorld: React.FC = () => {
  return (
    <div className="text-center font-sans">
      <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
        Hello, World.
      </h1>
      <p className="text-gray-500 text-lg">
        This is a blank canvas. Start editing to build something new.
      </p>
    </div>
  );
};