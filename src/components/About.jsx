function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden bg-indigo-100 flex items-center justify-center">
              <img
                src="/image/your-photo.png"
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="md:w-2/3 md:pl-12">
            <p className="text-gray-600 mb-6 text-lg">
              Hello! I'm a passionate and motivated Computer Science graduate with hands-on experience in
              building web applications using Java, React.js, Spring Boot and MySQL Database. I enjoy solving
              problems and learning new technologies.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              During my studies and personal projects, I have developed skills in front-end and back-end
              development, database management, and responsive UI/UX design. I’m eager to contribute to
              real-world projects and grow as a full-stack developer.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and
              staying up-to-date with industry trends.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {/* Email */}
              <a
                href="mailto:yugalkosamshile2002@gmail.com"
                className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <svg
                  className="w-5 h-5 text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 13.065L.004 4.5V20h23.992V4.5L12 13.065zm0-2.13L23.992 2H.004L12 10.935z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
              >
                <svg
                  className="w-5 h-5 text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 
                      0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462
                      -.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832
                      .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 
                      0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 
                      0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844
                      c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025
                      .546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 
                      0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 
                      0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48
                      C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <svg
                  className="w-5 h-5 text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-1-.02-2.285-1.39-2.285
                      -1.39 0-1.601 1.087-1.601 2.21v4.253H8.014v-8.59h2.559v1.174h.037
                      c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711z
                      M5.005 6.575a1.548 1.548 0 11-.003-3.096 
                      1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59z
                      M17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 
                      2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 
                      18.402 1 17.668 1z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;   