import { useState } from "react";

const FileUpload = ({ onAnalyze }) => {
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    return (
        <div className="space-y-6">
            <div className="border-2 border-dashed border-cyan-400 p-8 rounded-xl text-center hover:bg-cyan-500/10 transition duration-300">
            <p className="text-lg font-medium">Upload File 1</p>
            <input
                type="file"
                accept=".py"
                onChange={(e) => setFile1(e.target.files[0])}
            />
            </div>
            <div className="border-2 border-dashed border-cyan-400 p-8 rounded-xl text-center hover:bg-cyan-500/10 transition duration-300">
            <p className="text-lg font-medium">Upload File 2</p>
            <input
                type="file"
                accept=".py"
                onChange={(e) => setFile2(e.target.files[0])}
            />
            </div>
            <button
                onClick={() => onAnalyze(file1, file2)}
                disabled={!file1 || !file2} className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition transform shadow-lg text-lg font-semibold">
                    Analyze Similarity</button>
        </div>
    );
};

export default FileUpload;