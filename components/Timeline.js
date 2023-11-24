import React from 'react';

const Timeline = ({ entries }) => (
  <div className="mt-16 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
    {entries.map((entry, index) => (
      <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-teal-600 text-gray-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="scale-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <polygon fill="var(--ci-primary-color, currentColor)" points="200.359 382.269 61.057 251.673 82.943 228.327 199.641 337.731 428.686 108.687 451.314 131.313 200.359 382.269" className="ci-primary"/>
            </svg>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded bg-white p-8">
              <div className='mb-4'>
                <div className="font-bold text-gray-800">{entry?.title}</div>
                <div>
                  <time className="font-bold text-teal-600">{entry?.date}</time>
                  <span className="font-base italic text-gray-400"> ({entry?.duration} kk)</span>
                </div>
              </div>
              <ul className="text-gray-700 pl-5 list-disc mb-4">
                {entry?.content?.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
              <div className='flex flex-wrap text-gray-700'>
                {entry?.badges?.map((badge, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">{badge}</span>
                ))}
              </div>
          </div>
      </div>
    ))}
  </div>

);

export default Timeline;