import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("");

  const handleStart = () => {
    if (!language) return alert("Please select a language");
    navigate("/compare", { state: { language } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[400px] text-center border border-white/20">

        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Plagiarism Detector
        </h1>

        <p className="mb-6 text-gray-300">
          Select your preferred language to begin comparison
        </p>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-3 rounded-lg bg-black/40 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <option value="">Choose Language</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="javascript">JavaScript</option>
        </select>

        <button
          onClick={handleStart}
          className="mt-6 w-full py-3 rounded-lg font-semibold text-white
                     bg-gradient-to-r from-cyan-500 to-purple-600
                     hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]
                     transition-all duration-300"
        >
          Start Comparing 
        </button>

      </div>
    </div>
  );
};

export default Home;

