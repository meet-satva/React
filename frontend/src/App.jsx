import { useState,useCallback } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount(c => c + 1);
  }, [count]);
  
  return (
    <div className="flex items-center justify-center h-screen  from-indigo-500 via-purple-500 to-pink-500">
      <div className="backdrop-blur-md bg-white/10 px-12 py-8 rounded-3xl shadow-2xl text-center transform transition-all duration-700 animate-fade-in-up">
        <p>count: {count}</p>
        <button id="btn" className="button" onClick={handleCount}>Increment</button>
      </div>
    </div>
  );
}