import React from 'react';
import mediOraIcon from '../../assets/icons/mediora.png';
import harvestHubIcon from '../../assets/icons/harvest-hub.png';
import quickMartIcon from '../../assets/icons/quick-mart.png';
import metroIcon from '../../assets/icons/delhi-metro.png';
import housePriceIcon from '../../assets/icons/house-price.png';
import placeholderIcon from '../../assets/icons/placeholder.png'; 

function Projects() {
  const projects = [
    {
      name: 'MediOra – AI-Powered Medical Chatbot',
      icon: mediOraIcon,
      description: 'End-to-end AI chatbot with RAG, Pinecone, HuggingFace, and Gemini API, deployed on Render/AWS.',
      link: 'https://github.com/prasooncodes/mediora', 
    },
    {
      name: 'HarvestHub – Crop Recommendation Platform',
      icon: harvestHubIcon,
      description: 'MERN + Flask crop recommendation platform with ML pipeline (XGBoost, Scikit-learn).',
      link: 'https://github.com/prasooncodes/harvest-hub',
    },
    {
      name: 'Quick Mart – Inventory Management System',
      icon: quickMartIcon,
      description: 'MERN stack system with real-time inventory, billing, and PDF invoice generation.',
      link: 'https://github.com/prasooncodes/quickmart',
    },
    {
      name: 'Delhi Metro Navigation',
      icon: metroIcon,
      description: 'C++ project using Dijkstra and BFS/DFS for metro route planning.',
      link: 'https://github.com/prasooncodes/delhi-metro-project',
    },
    {
      name: 'House Price Predictor',
      icon: housePriceIcon,
      description: 'Machine learning project predicting home prices using California dataset.',
      link: 'https://github.com/prasooncodes/house-price-predictor',
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
