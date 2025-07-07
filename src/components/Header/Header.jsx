import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`shadow-md sticky top-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <nav className="px-4 lg:px-10 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          
          {/* Logo or Name */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              className="text-2xl font-bold text-green-700 dark:text-orange-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Prasoon Mishra
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 dark:text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6 transition-transform duration-300" />
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex text-base font-medium space-x-6">
              {navLinks.map(({ to, label }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `transition-colors duration-200 hover:text-orange-500 ${
                        isActive ? 'text-orange-500 font-semibold' : 'text-gray-700 dark:text-gray-300'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-800 dark:text-orange-300 hover:underline font-medium"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleDarkMode}
            whileTap={{ rotate: 180 }}
            className="hidden lg:inline-flex items-center transition text-gray-700 dark:text-white hover:text-orange-400"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.button>
        </div>

        {/* Mobile Navigation Links */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4"
            >
              <ul className="flex flex-col gap-4 px-2 text-base font-medium">
                {navLinks.map(({ to, label }) => (
                  <li key={label}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded transition duration-200 ${
                          isActive ? 'text-orange-500 font-semibold' : 'text-gray-700 dark:text-gray-300'
                        } hover:text-orange-500`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-green-800 dark:text-orange-300 hover:underline font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
