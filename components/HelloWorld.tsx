import React from 'react';

export const HelloWorld: React.FC = () => {
  return (
    <div className="max-w-md w-full bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl">
      <div className="p-8 text-center">
        <div className="mx-auto h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-indigo-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
          Hello, World!
        </h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Welcome to your new React application. This is a clean slate, ready for you to build something amazing.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors focus:ring-4 focus:ring-indigo-100">
            Get Started
          </button>
          <button className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors focus:ring-4 focus:ring-slate-100">
            Documentation
          </button>
        </div>
      </div>
      <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
        <span>React 18 + TypeScript</span>
        <span>Tailwind CSS</span>
      </div>
    </div>
  );
};