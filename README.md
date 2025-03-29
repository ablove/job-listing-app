Job Dashboard - Next.js & Tailwind CSS

A job dashboard web application built with Next.js and Tailwind CSS to display job listings with descriptions and categories.

🚀 Features

Job Listings: Displays a list of jobs with details like title, company, location, and categories.

Job Details: Shows in-depth information about a selected job.

Styled UI: Responsive design with Tailwind CSS.

📂 Project Structure

📁 job-dashboard
│── 📂 components
│   │── JobCard.js  # Card component for job previews
│   │── JobDetail.js # Detailed job description component
│── 📂 pages
│   │── jobdashboard.js  # Main job dashboard page
│   │── index.js  # Home page (if needed)
│── 📂 public
│   │── avatar1.png
│   │── avatar2.jpeg
│   │── avatar3.jpeg
│── 📂 styles
│── 📄 package.json
│── 📄 README.md

🛠️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/job-dashboard.git
cd job-dashboard

Install dependencies:

yarn install  # or npm install

Run the development server:

yarn dev  # or npm run dev

Open http://localhost:3000 in your browser to see the app.

🏗️ Components

JobCard.js

Displays a brief preview of a job.

Includes job title, company name, location, and categories.

JobDetail.js

Displays full details of a selected job.

Includes responsibilities, qualifications, and application process.

jobdashboard.js

Main job listing page.

Maps over job data and renders JobCard components.

📜 License

This project is licensed under the MIT License.
## Screenshots  

### Job Card  
![Job Card](screenshoots/job-listing.png)  
