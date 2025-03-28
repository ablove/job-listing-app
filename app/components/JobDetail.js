// src/components/JobDetail.js
const JobDetail = ({ job }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 m-4">
      <h1 className="text-2xl font-bold mb-6">Application for {job.title}</h1>

      <div className="flex items-center mb-6">
        <img
          className="h-16 w-16 rounded-full object-cover mr-4"
          src={job.image}
          alt="Company logo"
        />
        <div>
          <h2 className="text-xl font-semibold">{job.company}</h2>
          <p className="text-gray-600">{job.about.location}</p>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700">{job.description}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
        <ul className="space-y-2">
          {job.responsibilities.map((item, index) => (
            <li key={index} className="flex items-start">
              <input type="checkbox" className="mr-2 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Rest of the sections remain the same as before */}
    </div>
  );
};

export default JobDetail;
