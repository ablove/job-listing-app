// src/App.js
import JobCard from "./components/JobCard";

function App() {
  // Three jobs with avatar images and colored categories
  const jobs = [
    {
      title: "Social Media Assistant",
      company: "Young Men Christians Association",
      location: "Addis Ababa, Ethiopia",
      description:
        "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.",
      categories: ["In Person", "Education", "IT"],
      image: "/avatar1.png", // Green avatar
    },
    {
      title: "Volunteer Teacher",
      company: "School Under The Tree",
      location: "Addis Ababa, Ethiopia",
      description:
        "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.",
      categories: ["In Person", "Education", "IT"],
      image: "/avatar2.jpeg", // Blue avatar
    },
    {
      title: "Social Media Assistant",
      company: "The Africa in me",
      location: "Addis Ababa, Ethiopia",
      description:
        "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.",
      categories: ["In Person", "Education", "Management"],
      image: "/avatar3.jpeg", // Yellow avatar
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Job Listings</h1>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
