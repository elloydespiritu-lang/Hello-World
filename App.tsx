import React from 'react';
import { HelloWorld } from './components/HelloWorld';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <HelloWorld />
    </main>
  );
};

export default App;