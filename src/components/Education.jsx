import React from 'react';

// Data structure for the education items
const educationData = [
  {
    id: 1,
    institution: 'P. R. Pote Patil College of Engineering, Amravati',
    duration: '2020 – 2024',
    university: 'Amravati University',
    degree: 'BE in Computer Science',
    details: '76.12% | Amravati, Maharashtra',
  },
  {
    id: 2,
    institution: 'Janata Junior College, Nagbhid',
    duration: '2019 – 2020',
    university: 'Nagpur University',
    degree: 'HSC',
    details: '68.77% | Chandrapur, Maharashtra',
  },
  {
    id: 3,
    institution: 'Janata M.H.S. School, Nagbhid',
    duration: '2017 – 2018',
    university: 'Nagpur University',
    degree: 'SSC',
    details: '89.60% | Chandrapur, Maharashtra',
  },
];

// Helper component for a single Education Card (simplified)
const EducationCard = ({ education }) => {
  return (
    // Use a flex container for consistent height across all three cards
    <div className="flex flex-col h-full">
      <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-blue-600 transition duration-300 hover:shadow-2xl hover:scale-90 transition-transform duration-300 flex flex-col flex-grow">
        
        {/* Header and Duration */}
        <div className="mb-2">
          <h4 className="text-lg font-semibold text-gray-800">
            {education.institution}
          </h4>
          <div className="text-blue-600 font-medium text-sm mt-1">
            {education.duration}
          </div>
        </div>
        
        {/* Details */}
        <div className="text-gray-600 mb-1 italic mt-2">{education.university}</div>
        <p className="text-gray-700 text-sm flex-grow">
          <strong>{education.degree}</strong>, {education.details}
        </p>

      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Education</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
        </div>

        {/* 3-Item Grid Container: uses a 3-column grid on all screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;