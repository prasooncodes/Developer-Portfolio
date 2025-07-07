import React from 'react';
import { Github, Mail, MapPin, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-gradient-to-br from-sky-50 to-emerald-100 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="p-8 bg-white">
              <h1 className="text-4xl text-green-900 font-extrabold tracking-tight">
                Let’s Connect
              </h1>
              <p className="text-lg text-gray-600 mt-3">
                Have a project idea, collaboration request, or just want to say hi? Reach out!
              </p>

              <div className="flex items-center mt-8 text-gray-600">
                <MapPin className="w-6 h-6 text-green-700" />
                <span className="ml-4 font-medium">
                  Noida, Uttar Pradesh, India
                </span>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <Mail className="w-6 h-6 text-green-700" />
                <span className="ml-4 font-medium">
                  prasoonmishra9936@gmail.com
                </span>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <Github className="w-6 h-6 text-green-700" />
                <a
                  href="https://github.com/prasooncodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 font-medium hover:underline"
                >
                  github.com/prasooncodes
                </a>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <Linkedin className="w-6 h-6 text-green-700" />
                <a
                  href="https://www.linkedin.com/in/prasoon-mishra-ba6750262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 font-medium hover:underline"
                >
                  linkedin.com/in/prasoon-mishra-ba6750262
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form
                action="https://formspree.io/f/mzzglpbk"
                method="POST"
                className="p-8 bg-emerald-50 flex flex-col justify-center"
                >
                <div className="flex flex-col mb-4">
                    <label htmlFor="name" className="mb-1 font-semibold text-green-900">
                    Full Name
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                    className="py-3 px-4 rounded-md border border-gray-300 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="mb-1 font-semibold text-green-900">
                    Email Address
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    required
                    className="py-3 px-4 rounded-md border border-gray-300 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="message" className="mb-1 font-semibold text-green-900">
                    Message
                    </label>
                    <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    placeholder="Your message..."
                    className="py-3 px-4 rounded-md border border-gray-300 focus:border-green-600 focus:outline-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="mt-2 bg-green-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-800 transition"
                >
                    Send Message
                </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
