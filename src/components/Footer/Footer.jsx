import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white border-t">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-10 lg:py-12">
                <div className="md:flex md:justify-between">
                    
                    {/* About / Logo */}
                    <div className="mb-6 md:mb-0 max-w-md">
                        <Link to="/" className="text-2xl font-bold text-orange-300">
                            Prasoon Mishra
                        </Link>
                        <p className="mt-4 text-sm text-gray-400">
                            Full Stack Developer passionate about building clean and scalable web applications. 
                            Let's turn ideas into reality!
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold uppercase text-orange-300">Quick Links</h2>
                            <ul className="text-gray-400 font-medium space-y-2">
                                <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                                <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                                <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
                                <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-sm font-semibold uppercase text-orange-300">Connect</h2>
                            <ul className="text-gray-400 font-medium space-y-2">
                                <li>
                                    <a href="https://github.com/prasooncodes" target="_blank" rel="noreferrer" className="hover:text-white flex items-center space-x-1">
                                        <Github size={16} /> <span>GitHub</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/prasoon-mishra-ba6750262/" target="_blank" rel="noreferrer" className="hover:text-white flex items-center space-x-1">
                                        <Linkedin size={16} /> <span>LinkedIn</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:prasoonmishra9936@gmail.com" className="hover:text-white flex items-center space-x-1">
                                        <Mail size={16} /> <span>Email</span>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-sm font-semibold uppercase text-orange-300">Legal</h2>
                            <ul className="text-gray-400 font-medium space-y-2">
                                <li><Link to="#" className="hover:text-white transition">Privacy Policy</Link></li>
                                <li><Link to="#" className="hover:text-white transition">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-700 sm:mx-auto" />

                {/* Footer Bottom */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-400 block mb-4 sm:mb-0">
                        © {new Date().getFullYear()} Prasoon Mishra. All rights reserved.
                    </span>
                    <span className="text-sm text-gray-300">
                        Made with ❤️ using React & Tailwind CSS
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
