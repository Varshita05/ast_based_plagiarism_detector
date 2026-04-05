const SubmissionList = ({ submissions }) => {
  if (!submissions.length) {
    return (
      <p className="text-center text-gray-400">
        No submissions yet.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {submissions.map((submission) => (
        <div
          key={submission.id}
          className="bg-white/10 border border-white/20 rounded-xl p-5 flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">
              {submission.file1_name} vs {submission.file2_name}
            </p>
            <p className="text-sm text-gray-300">
              Verdict: {submission.verdict}
            </p>
          </div>

          <div className="text-lg font-bold text-cyan-400">
            {Math.round(submission.similarity_score * 100)}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubmissionList;