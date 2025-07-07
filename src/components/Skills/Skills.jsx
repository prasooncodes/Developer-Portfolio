import React from 'react';

function Skills() {
  const skills = [
    // Frontend
    {
      name: 'React',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      link: 'https://reactjs.org/',
    },
    {
      name: 'JavaScript',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'HTML5',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'CSS3',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://www.svgrepo.com/show/374118/tailwind.svg',
      link: 'https://tailwindcss.com/',
    },

    // Backend & APIs
    {
      name: 'Node.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      link: 'https://nodejs.org/',
    },
    {
      name: 'Express.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
      link: 'https://expressjs.com/',
    },
    {
      name: 'MongoDB',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
      link: 'https://www.mongodb.com/',
    },
    {
      name: 'Flask',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg',
      link: 'https://flask.palletsprojects.com/',
    },

    // Programming Languages
    {
      name: 'Python',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      link: 'https://www.python.org/',
    },
    {
      name: 'C++',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
      link: 'https://cplusplus.com/',
    },
    {
      name: 'Java',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      link: 'https://www.oracle.com/java/',
    },

    // Tools & DevOps
    {
      name: 'Git',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
      link: 'https://git-scm.com/',
    },
    {
      name: 'GitHub',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
      link: 'https://github.com/',
    },
    {
      name: 'Docker (Learning)',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
      link: 'https://www.docker.com/',
    },
    {
      name: 'GCP (Learning)',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg',
      link: 'https://cloud.google.com/',
    },
    {
      name: 'Linux',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
      link: 'https://www.linux.org/',
    },
    {
      name: 'VS Code',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
      link: 'https://code.visualstudio.com/',
    },

    // Data Science & ML
    {
      name: 'Scikit-learn',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
      link: 'https://scikit-learn.org/',
    },
    {
      name: 'NumPy',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg',
      link: 'https://numpy.org/',
    },
    {
      name: 'Pandas',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg',
      link: 'https://pandas.pydata.org/',
    },
    {
      name: 'Matplotlib',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/180px-Matplotlib_icon.svg.png?20150311090915',
      link: 'https://matplotlib.org/',
    },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-800">Tech Stack & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300 hover:scale-105"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-2"
                loading="lazy"
              />
              <span className="text-sm font-semibold text-green-900 text-center">
                {skill.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
