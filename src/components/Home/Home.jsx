import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroImage from '../../assets/images/hero-dev.png'; 

function Home() {
    return (
        <section className="w-full bg-gradient-to-br from-gray-50 to-green-100 py-20 sm:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                
                {/* Text Section */}
                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-900 leading-tight mb-6">
                        Hi, I'm <span className="text-orange-500">Prasoon Mishra</span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl text-gray-700 mb-6">
                        Full Stack Developer • DevOps Enthusiast • UI/UX Explorer
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-xl mb-8">
                        I design and build dynamic, high-performance web applications. Let’s create something impactful together.
                    </p>

                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <Link
                            to="/projects"
                            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="text-green-800 hover:underline font-medium"
                        >
                            Contact Me →
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 flex justify-center lg:justify-start gap-6 text-green-900">
                        <a
                            href="https://github.com/prasooncodes"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-orange-500 transition"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/prasooncodes"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-orange-500 transition"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:prasoon@example.com"
                            className="hover:text-orange-500 transition"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={HeroImage}
                        alt="Developer Illustration"
                        className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
