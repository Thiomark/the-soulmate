import BackButton from "../../components/BackButton";

export default function Contact() {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-2">
                GET IN TOUCH
              </h1>
              <div className="w-24 md:w-32 h-0.5 bg-gray-800"></div>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800">
              CONTACT
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
                  Let&apos;s collaborate
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                  Ready to create something extraordinary? Whether it&apos;s music production, 
                  fashion consultation, or creative direction, I&apos;m here to bring your vision to life. 
                  Let&apos;s connect and make magic happen.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#4A90C2] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Email</h3>
                    <a href="mailto:contact@jstrea.com" className="text-gray-600 hover:text-[#4A90C2] transition-colors">
                      contact@jstrea.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E67E50] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <path d="m9 9 5 3-5 3z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Instagram</h3>
                    <a href="https://instagram.com/jst.betsoe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E67E50] transition-colors">
                      @jst.betsoe
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">
                      Available globally for collaborations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-light text-gray-800 mb-6">Send a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4A90C2] focus:border-transparent outline-none transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4A90C2] focus:border-transparent outline-none transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4A90C2] focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4A90C2] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a project type</option>
                    <option value="music-production">Music Production</option>
                    <option value="fashion-consultation">Fashion Consultation</option>
                    <option value="creative-direction">Creative Direction</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4A90C2] focus:border-transparent outline-none transition-all resize-vertical"
                    placeholder="Tell me about your project and vision..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4A90C2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3A7BA8] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Additional Section */}
          <div className="mt-16 md:mt-20 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
                Ready to create together?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every great project starts with a conversation. Let&apos;s discuss how we can 
                bring your creative vision to life through music, fashion, and authentic storytelling.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
