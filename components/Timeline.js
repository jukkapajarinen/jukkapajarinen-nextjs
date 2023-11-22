import React from 'react';

const Timeline = ({ entries }) => (
  <div className="mx-auto max-w-2xl">
    {entries.map((entry, index) => (
      <div key={index} className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
          <div className="font-semibold">{entry.title}</div>
        </div>
        <div className="ml-7">
          <p className="mb-2 text-gray-600">{entry.date}</p>
          <p>{entry.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Timeline;