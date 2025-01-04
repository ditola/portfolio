import React from 'react';

const ExperienceCard = ({ experience }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
        <p className="text-blue-600">{experience.company}</p>
      </div>
      <span className="text-sm text-gray-500">{experience.period}</span>
    </div>
    <p className="text-gray-600 mb-4">{experience.description}</p>
    <ul className="list-disc list-inside space-y-2">
      {experience.achievements.map((achievement, index) => (
        <li key={index} className="text-gray-600">{achievement}</li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;