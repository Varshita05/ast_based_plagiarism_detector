const SimilarityTable = ({ result }) => {

    const getColor = () => {
        if (result.similarity_score >= 0.75) return 'bg-gradient-to-r from-red-500 via-pink-500 to-red-600 shadow-[0_0_20px_rgba(255,0,0,0.7)]';
        if (result.similarity_score >= 0.4) return 'bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 shadow-[0_0_20px_rgba(255,200,0,0.7)]';
        return 'bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 shadow-[0_0_20px_rgba(0,255,150,0.7)]';
    }

    const percentage = Math.round(result.similarity_score * 100);

    if (!result) return null;
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-3">
                    Similarity Score
                </h2>
                <div className="relative w-full">
                    {/* Track */}
                    <div className="w-full bg-white/10 backdrop-blur-md rounded-full h-7 overflow-hidden border border-white/20 shadow-inner">

                        {/* Animated Fill */}
                        <div
                        className={`h-full rounded-full flex items-center justify-end pr-4 text-sm font-bold text-white transition-all duration-1000 ease-out
                        ${getColor()}`}
                        style={{ width: `${percentage}%` }}
                        >
                        {percentage}%
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-3 mt-6">
                    Verdict
                    </h2>
                    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg">
                        {result.verdict}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SimilarityTable;