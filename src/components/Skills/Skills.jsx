import React from "react";

function Skills() {
  const skillCategories = {
    "Frontend": [
      { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", link: "https://reactjs.org/" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Tailwind CSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg", link: "https://tailwindcss.com/" },
    ],
    "Backend & Databases": [
      { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", link: "https://nodejs.org/" },
      { name: "Express.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", link: "https://expressjs.com/" },
      { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", link: "https://www.mongodb.com/" },
      { name: "Flask", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", link: "https://flask.palletsprojects.com/" },
      { name: "Pinecone", icon: "https://avatars.githubusercontent.com/u/78025246?s=200&v=4", link: "https://www.pinecone.io/" },
    ],
    "Programming Languages": [
      { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", link: "https://www.python.org/" },
      { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", link: "https://cplusplus.com/" },
      { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", link: "https://www.oracle.com/java/" },
    ],
    "DevOps & Tools": [
      { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", link: "https://git-scm.com/" },
      { name: "GitHub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", link: "https://github.com/" },
      { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", link: "https://www.docker.com/" },
      { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", link: "https://aws.amazon.com/" },
      { name: "GCP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg", link: "https://cloud.google.com/" },
      { name: "Linux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", link: "https://www.linux.org/" },
      { name: "VS Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg", link: "https://code.visualstudio.com/" },
    ],
    "Data Science & ML": [
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", link: "https://scikit-learn.org/" },
      { name: "NumPy", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg", link: "https://numpy.org/" },
      { name: "Pandas", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg", link: "https://pandas.pydata.org/" },
      { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", link: "https://matplotlib.org/" },
    ],
  };

  return (
    <div className="py-16 px-6 bg-gradient-to-b from-white via-green-50 to-white text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-green-800">⚡ Tech Stack & Tools</h2>
        <div className="space-y-16">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-8 text-green-700">{category}</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {skills.map((skill, idx) => (
                  <a
                    key={idx}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center bg-white/70 backdrop-blur-lg rounded-xl shadow-md p-5 hover:shadow-2xl hover:scale-110 transition-all duration-300"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-14 h-14 object-contain mb-3 transition-transform duration-300 group-hover:rotate-12"
                      loading="lazy"
                    />
                    <span className="text-sm font-semibold text-green-900">{skill.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
