import SubmissionList from "../components/SubmissionList";

const History = () => {
  const submissions =
    JSON.parse(localStorage.getItem("submissions")) || [];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">

      <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Submission History
      </h1>

      <SubmissionList submissions={submissions} />

    </div>
  );
};

export default History;