import React from 'react';
import { HelloWorld } from './components/HelloWorld';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center p-4">
      <HelloWorld />
    </main>
  );
};

export default App;