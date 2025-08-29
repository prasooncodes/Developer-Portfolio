import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import AboutImage from '../../assets/images/about-image.jpg'; // Replace with your dev image

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
                        I'm <strong>Prasoon Mishra</strong>, a passionate <strong>Computer Science Engineer</strong> currently in my final year of B.Tech. 
                        With hands-on experience in <strong>Full Stack Development (MERN)</strong>, <strong>Data Science</strong>, and <strong>Machine Learning</strong>, 
                        I love crafting scalable web applications and intelligent systems.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        I’ve on real-world projects ranging from <strong>inventory management systems</strong> to <strong>AI-powered chatbots</strong>. Alongside, I’ve built projects like <em>QuickMart</em>, <em>HarvestHub</em>, <em>MediOra</em>, and a 
                        <em> Delhi Metro Simulation </em>.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Currently, I’m expanding my expertise into <strong>DevOps</strong> — learning Docker, CI/CD, and cloud technologies 
                        (AWS, GCP). I also enjoy solving <strong>Data Structures & Algorithms</strong> problems to sharpen my problem-solving skills.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition shadow"
                            download
                        >
                            <Download size={20} />
                            Download Resume
                        </a>

                        <span className="text-sm text-gray-500">
                            Always curious, always building 🚀
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
