import { useState } from "react";
import FileUpload from "../components/FileUpload";
import SimilarityTable from "../components/SimilarityTable";
import ReportModal from "../components/ReportModal";
import { analyzeFiles } from "../services/api";
import { useNavigate } from "react-router-dom";

const Compare = () => {
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleAnalyze = async (file1, file2) => {
  try {
    const response = await analyzeFiles(file1, file2);

    setResult(response);
    setShowModal(true);

    // Save submission history
    const previous = JSON.parse(localStorage.getItem("submissions")) || [];

    const newSubmission = {
      id: Date.now(),
      similarity_score: response.similarity_score,
      verdict: response.verdict,
      file1_name: file1.name,
      file2_name: file2.name
    };

    const updated = [newSubmission, ...previous];

    localStorage.setItem("submissions", JSON.stringify(updated));

  } catch (error) {
    console.error("Error analyzing files:", error);
  }
};

 const handleReport = () => {
  if (!result) return;

  // clear old report
  localStorage.removeItem("reportData");

  // save new report
  localStorage.setItem("reportData", JSON.stringify(result));

  navigate("/report", { state: result });
};

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">

      <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Compare Files
      </h1>

      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20">
        <FileUpload onAnalyze={handleAnalyze} />
      </div>

      {result && (
        <div className="mt-10 backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20 animate-fadeIn">
          <SimilarityTable result={result} />
        </div>
      )}

      {showModal && (
        <ReportModal
          result={result}
          onClose={() => setShowModal(false)}
        />
      )}

      <button
        disabled={!result}
        onClick={handleReport}
        className="mt-10 w-[300px] py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition transform shadow-lg text-lg font-semibold mx-auto block disabled:opacity-50"
      >
        View Report
      </button>

    </div>
  );
};

export default Compare;