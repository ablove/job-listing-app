// src/app/pages/JobDashboard.js
"use client"; // Required for using React hooks

import React, { useState } from "react";
import JobCard from "../components/JobCard";
import JobDetail from "../components/JobDetail";

const JobDashboard = () => {
  // Hardcoded job data instead of importing from JSON
  const jobsData = {
    job_postings: [
      {
        title: "Social media manager",
        description:
          "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers. Your primary goal will be to enhance brand visibility, foster positive relationships with the audience, and drive engagement and conversions.",
        responsibilities: [
          "Community engagement to ensure that is supported and actively represented online",
          "Focus on social media content development and publication",
          "Marketing and strategy support",
          "Stay on top of trends on social media platforms, and suggest content ideas to the team",
          "Engage with online communities",
        ],
        ideal_candidate: {
          age: "18-24",
          gender: "Female",
          traits: [
            "Passionate & Reliable: Genuine interest in our mission and a strong desire to make a positive impact, responsible, and committed to fulfilling volunteer commitments.",
            "Adaptable, Team Player & Strong Communication Skills: Able to work effectively in diverse teams; and contributes positively. Flexible and open to embracing new challenges and shifting priorities; Clear verbal and written communication, active listening, and constructive feedback.",
            "Respectful: Embraces diversity, inclusive, and treats others with respect. Abides with all our rules and regulations.",
          ],
        },
        when_where:
          "The onboarding event for this event will take place on Jan 18th, 2023 in AAU Auditorium.",
        about: {
          posted_on: "Jul 1, 2023",
          deadline: "Jul 31, 2023",
          location: "Addis Ababa",
          start_date: "Aug 02, 2023",
          end_date: "Sep 02, 2023",
          categories: ["Marketing", "Design"],
          required_skills: ["Social Media Marketing", "English", "Copywriting"],
        },
        company: "ABC Media",
        image: "/job1.png",
      },
      {
        title: "Web developer",
        description:
          "As a Web Developer, you will be responsible for designing, coding, and modifying websites, from layout to function according to a client's specifications. You will create visually appealing sites that feature user-friendly design and clear navigation.",
        responsibilities: [
          "Write well designed, testable, efficient code by using best software development practices",
          "Create website layout/user interface by using standard HTML/CSS practices",
          "Integrate data from various back-end services and databases",
          "Gather and refine specifications and requirements based on technical needs",
          "Create and maintain software documentation",
        ],
        ideal_candidate: {
          age: "Any",
          gender: "Any",
          traits: [
            "Strong organizational skills to juggle multiple tasks within the constraints of timelines and budgets",
            "Ability to work and thrive in a fast-paced environment, learn rapidly, and master diverse web technologies and techniques",
            "Team player with a positive attitude and good interpersonal skills",
          ],
        },
        when_where:
          "The onboarding event for this event will take place on Feb 10th, 2023 in BBIT Building, Room 202.",
        about: {
          posted_on: "Jan 15, 2023",
          deadline: "Feb 5, 2023",
          location: "Addis Ababa, Ethiopia",
          start_date: "Feb 15, 2023",
          end_date: "Aug 15, 2023",
          categories: ["IT", "Development"],
          required_skills: ["HTML", "CSS", "JavaScript", "PHP"],
        },
        company: "Tech Innovators",
        image: "/job1.png",
      },
      // Add more jobs here if needed
    ],
  };

  const [selectedJob, setSelectedJob] = useState(null);
  const jobs = jobsData.job_postings;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {!selectedJob ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Job Listings</h1>
              <p className="mt-2 text-lg text-gray-600">
                Browse through our current job openings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, index) => (
                <div key={index} onClick={() => setSelectedJob(job)}>
                  <JobCard job={job} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <button
              onClick={() => setSelectedJob(null)}
              className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Jobs
            </button>
            <JobDetail job={selectedJob} />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDashboard;
