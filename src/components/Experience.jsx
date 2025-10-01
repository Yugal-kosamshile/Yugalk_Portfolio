import React from 'react';

// Data structure for the experience items
const experienceData = [
  {
    id: 1,
    title: 'Java Full Stack Development Course',
    duration: 'Aug 2024 – Mar 2025',
    company: 'Satya Technologies',
    bullets: [
      'Completed 6-month Full Stack Development course covering front-end & back-end.',
      'Developed projects using Java, Spring Boot, Hibernate, REST APIs, MySQL.',
      'Proficient in Oracle databases, PL/SQL, stored procedures, and version control with GitHub.',
    ],
  },
  {
    id: 2,
    title: 'Web Designing Intern',
    duration: 'Apr 2023 – May 2023',
    company: 'Webakruti',
    bullets: [
      'Developed responsive websites using HTML, CSS, JavaScript & Bootstrap.',
      'Optimized website speed by 30% and ensured cross-browser compatibility.',
    ],
  },
  {
    id: 3,
    title: 'Web Development Intern',
    duration: 'Mar 2023 – Apr 2023',
    company: 'VaultofCodes',
    bullets: [
      'Created interactive Tic-Tac-Toe game using HTML, CSS, JS.',
      'Enhanced UI/UX with DOM manipulation and animations.',
    ],
  },
];

// Helper component for a single Experience Card (simplified for grid view)
const ExperienceCard = ({ item }) => {
  return (
    // Use flex-col and h-full to ensure cards have equal height in the grid row
    <div className="flex flex-col h-full">
      <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-blue-600 transition duration-300 hover:shadow-2xl hover:scale-90 transform flex flex-col flex-grow">
        
        {/* Header and Duration */}
        <div className="mb-2">
          <h4 className="text-xl font-semibold text-gray-800">
            {item.title}
          </h4>
          <div className="text-blue-600 font-medium text-sm mt-1">
            {item.duration}
          </div>
        </div>
        
        {/* Company and Bullets */}
        <div className="text-gray-600 mb-2 italic mt-2">{item.company}</div>
        
        <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm sm:text-base flex-grow">
          {item.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};

function Experience () {
  return (
    <section id="experience" className="py-20 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
        </div>

        {/* 3-Item Grid Container: stacks on small screens, one row on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experienceData.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;