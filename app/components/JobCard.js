// src/components/JobCard.js
const JobCard = ({ job }) => {
  // Category style mapping
  const categoryStyles = {
    "In Person": "border-green-700 bg-green-100 text-green-800",
    Education: "border-yellow-700 bg-yellow-50 text-yellow-800",
    IT: "border-blue-500 bg-blue-50 text-blue-800",
    Management: "border-blue-500 bg-blue-50 text-blue-800",
  };

  return (
    <div className="w-full bg-white rounded-lg p-6 mb-6 border border-gray-200">
      <div className="flex items-start gap-4">
        <img
          className="w-12 h-12 rounded-full object-cover border border-gray-200"
          src={job.image}
          alt={`${job.company} logo`}
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h2>
          <p className="text-gray-600 mb-4">
            {job.company} • {job.location}
          </p>

          <p className="text-gray-700 mb-4">{job.description}</p>

          <div className="flex gap-2">
            {job.categories.map((category, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm border ${
                  categoryStyles[category] || "bg-gray-100"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
