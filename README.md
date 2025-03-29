📌 Job Dashboard - Next.js & Tailwind CSS
A job dashboard web application built with Next.js and Tailwind CSS to display job listings with descriptions and categories.

📸 Screenshot

 job-listing.png

🚀 Features
✅ Job Listings – Displays job details including title, company, location, and categories.
✅ Job Details – Shows in-depth information about a selected job.
✅ Styled UI – Fully responsive design with Tailwind CSS.

📂 Project Structure

job-dashboard/
│── components/
│   ├── JobCard.js       # Card component for job previews
│   ├── JobDetail.js     # Detailed job description component
│
│── pages/
│   ├── jobdashboard.js  # Main job dashboard page
│   ├── index.js        # Home page (if needed)
│
│── public/
│   ├── screenshot.png   # Project screenshot
│   ├── avatar1.png
│   ├── avatar2.jpeg
│   ├── avatar3.jpeg
│
│── styles/
│
│── package.json
│── README.md
🛠️ Installation & Setup
1️⃣ Clone the repository

git clone https://github.com/your-username/job-dashboard.git
cd job-dashboard
2️⃣ Install dependencies

yarn install  # or npm install
3️⃣ Run the development serverbash
Copy
Edit
yarn dev  # or npm run dev
Then open http://localhost:3000 in your browser to view the app.

🏗️ Components
🔹 JobCard.js
Displays a brief preview of a job.

Includes job title, company name, location, and categories.

🔹 JobDetail.js
Displays full details of a selected job.

Includes responsibilities, qualifications, and application process.

🔹 jobdashboard.js
Main job listing page.

Maps over job data and renders JobCard components.

