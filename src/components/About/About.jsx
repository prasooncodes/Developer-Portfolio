import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import AboutImage from '../../assets/images/about-image.jpg'; // Replace with your custom dev image

function About() {
    return (
        <section className="py-24 bg-gradient-to-br from-white via-green-50 to-green-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-16">
                
                {/* Left: Image */}
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={AboutImage}
                        alt="Developer working"
                        className="rounded-3xl shadow-xl w-full max-w-md mx-auto"
                        loading="lazy"
                    />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    className="w-full lg:w-1/2 space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-green-900">
                        👋 About Me
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        I'm <strong>Prasoon Mishra</strong>, an aspiring <strong>Full Stack Developer</strong> and <strong>Data Science</strong> enthusiast currently pursuing B.Tech in Computer Science. I love building scalable applications using <strong>MERN stack</strong> and exploring intelligent systems with <strong>Python & Machine Learning</strong>.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Recently, I’ve started diving into <strong>DevOps</strong> — learning how to automate, deploy, and optimize development workflows. I'm passionate about writing clean code, solving real-world problems, and continuously upskilling.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
                        <a
                            href="/Prasoon Mishra Resume (main) (4).pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition shadow"
                        >
                            <Download size={20} />
                            Download Resume
                        </a>
                        <span className="text-sm text-gray-500">Let’s build something great together.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
