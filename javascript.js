{
    "name": "Govarthanand",
    "contact": {
        "email": "govarthanan@gmail.com",
        "phone": "+91 9846374637",
        "linkedin": "https://www.linkedin.com/in/govarthanan"
    },
    "summary": "Experienced full-stack developer with a passion for creating efficient, scalable, and user-friendly web applications. Proficient in both front-end and back-end development technologies.",
    "skills": {
        "programmingLanguages": [
            "JavaScript",
            "Python",
            "Java"
        ],
        "frontend": [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Vue.js"
        ],
        "backend": [
            "Node.js",
            "Express.js"
        ],
        "databases": [
            "MongoDB",
            "MySQL"
        ],
        "tools": [
            "Git",
            "Docker",
            "Webpack",
            "NPM",
            "Jira"
        ]
    },
    "experience": [
        {
            "position": "Full-stack Developer",
            "company": "ABC Tech Solutions",
            "location": "New York, NY",
            "dates": "January 2020 - Present",
            "responsibilities": [
                "Developed responsive web applications using React.js and Node.js, resulting in a 30% increase in user engagement.",
                "Designed and implemented RESTful APIs using Express.js for seamless communication between front-end and back-end systems.",
                "Utilized Agile methodologies to collaborate with cross-functional teams, ensuring timely delivery of projects."
            ]
        },
        {
            "position": "Software Engineer Intern",
            "company": "XYZ Software",
            "location": "San Francisco, CA",
            "dates": "June 2019 - August 2019",
            "responsibilities": [
                "Assisted in the development of a scalable backend system using Django and PostgreSQL.",
                "Implemented front-end features using React.js, enhancing user experience and interface responsiveness.",
                "Participated in code reviews and contributed to the improvement of development processes."
            ]
        }
    ],
    "education": [
        {
            "degree": "Bachelor of Science in Computer Science",
            "university": "University of ABC",
            "location": "New York, NY",
            "dates": "2016 - 2020"
        }
    ]
}

// Iterate over skills
console.log("Skills:");
for (let category in resume.skills) {
  console.log("- " + category + ":");
  for (let skill of resume.skills[category]) {
    console.log("  - " + skill);
  }
}

// Iterate over experience
console.log("\nExperience:");
for (let job of resume.experience) {
  console.log("- Position:", job.position);
  console.log("  Company:", job.company);
  console.log("  Location:", job.location);
  console.log("  Dates:", job.dates);
  console.log("  Responsibilities:");
  for (let responsibility of job.responsibilities) {
    console.log("   - " + responsibility);
  }
}

// Iterate over education
console.log("\nEducation:");
for (let edu of resume.education) {
  console.log("- Degree:", edu.degree);
  console.log("  University:", edu.university);
  console.log("  Location:", edu.location);
  console.log("  Dates:", edu.dates);
}

//ForEach
// Printing personal details
console.log("Name:", resume.name);
console.log("Email:", resume.contact.email);
console.log("Phone:", resume.contact.phone);
console.log("LinkedIn:", resume.contact.linkedin);


// Printing experience
console.log("\nExperience:");
resume.experience.forEach(job => {
  console.log("Position:", job.position);
  console.log("Company:", job.company);
  console.log("Location:", job.location);
  console.log("Dates:", job.dates);
  console.log("Responsibilities:");
  job.responsibilities.forEach(responsibility => console.log("- " + responsibility));
});

// Printing education
console.log("\nEducation:");
resume.education.forEach(edu => {
  console.log("Degree:", edu.degree);
  console.log("University:", edu.university);
  console.log("Location:", edu.location);
  console.log("Dates:", edu.dates);
});