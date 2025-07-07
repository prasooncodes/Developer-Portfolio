import React from 'react';
import harvestHubIcon from '../../assets/icons/harvest-hub.png';
import expenseEaseIcon from '../../assets/icons/expense-ease.png';
import metroIcon from '../../assets/icons/delhi-metro.png';
import housePriceIcon from '../../assets/icons/house-price.png';
import placeholderIcon from '../../assets/icons/placeholder.png'; // Placeholder image for future projects

function Projects() {
  const projects = [
    {
      name: 'Harvest Hub',
      icon: harvestHubIcon,
      description: 'Crop recommendation platform using ML, built with MERN & Flask.',
      link: 'https://github.com/prasooncodes/harvest-hub', // Update link if live
    },
    {
      name: 'Expense Ease',
      icon: expenseEaseIcon,
      description: 'Track your spending with real-time analytics. Built using the MERN stack.',
      link: 'https://github.com/prasooncodes/expense-ease',
    },
    {
      name: 'Delhi Metro Navigation',
      icon: metroIcon,
      description: 'C++ program using Dijkstra’s and BFS/DFS for metro route planning.',
      link: 'https://github.com/prasooncodes/delhi-metro-project',
    },
    {
      name: 'House Price Predictor',
      icon: housePriceIcon,
      description: 'ML project predicting home prices using California housing dataset.',
      link: 'https://github.com/prasooncodes/house-price-predictor',
    },
    {
      name: 'Coming Soon',
      icon: placeholderIcon,
      description: 'Stay tuned for another awesome project!',
      link: '#',
    },
    {
      name: 'Coming Soon',
      icon: placeholderIcon,
      description: 'Another exciting project will be added here shortly.',
      link: '#',
    },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-800">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 hover:scale-[1.02]"
            >
              <img
                src={project.icon}
                alt={project.name}
                className="w-28 h-28 object-contain mb-4"
                loading="lazy"
              />
              <span className="text-lg font-bold text-green-900 mb-2">{project.name}</span>
              <p className="text-sm text-gray-600 text-center">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
