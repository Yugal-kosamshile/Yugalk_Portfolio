function Hero() {
  return (
    <section
      id="hero"
      className="animate-fadeIn relative bg-cover bg-center bg-no-repeat text-white py-10"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="./image/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Yugal Kosamshile</h1>
          <p className="font-medium text-xl md:text-2xl mb-8">
            Full Stack Developer | Java | Spring Boot | SQL | React.js | HTML | CSS | JS | MySQL
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Conscientious and detail-oriented Computer Science graduate with hands-on
            experience in building responsive, user-centric web applications. Skilled in Java,
            Spring Boot, React.js, and JavaScript, with strong UI/UX sensibilities and
            database management expertise.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="./assets/Yugal_Kosamshile_Resume.pdf"
              download="Yugal_Kosamshile_Resume.pdf"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium shadow-md transition hover:bg-indigo-50"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="border border-white text-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-lg font-medium shadow-md transition"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;