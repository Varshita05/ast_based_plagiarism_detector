import { createPortal } from "react-dom";

const ReportModal = ({ result, onClose }) => {
  if (!result) return null;

  const percentage = Math.round(result.similarity_score * 100);

   const getVerdictStyle = () => {
    if (percentage > 75)
      return "bg-gradient-to-r from-red-500 to-pink-600 shadow-[0_0_20px_rgba(255,0,0,0.7)]";
    if (percentage > 40)
      return "bg-gradient-to-r from-yellow-400 to-orange-500 shadow-[0_0_20px_rgba(255,200,0,0.7)]";
    return "bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_0_20px_rgba(0,255,150,0.7)]";
  };

  return createPortal(
    <div>
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 w-[90%] max-w-md shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-red-400 transition"
        >
          ✖
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Analysis Report
        </h2>

       <div className="mb-6">
          <p className="text-lg font-semibold mb-3 text-white">Similarity Score</p>

          <div className="w-full bg-white/10 rounded-full h-7 overflow-hidden border border-white/20">
            <div
              className="h-full flex items-center justify-end pr-3 text-sm font-bold text-white transition-all duration-1000 ease-out bg-gradient-to-r from-cyan-500 to-purple-600"
              style={{ width: `${percentage}%` }}
            >
              {percentage}%
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-lg font-semibold mb-3 text-white">Verdict</p>
          <span
            className={`inline-block px-6 py-2 rounded-full text-white font-bold ${getVerdictStyle()}`}
          >
            {result.verdict}
          </span>
        </div>
        <button
          onClick={onClose}
          className="mt-10 w-48 mx-auto block py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition">
          Close
        </button>
      </div>
      </div>
    </div>,
    document.body
  );
};

export default ReportModal;