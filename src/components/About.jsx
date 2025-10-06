
function About() {
    // NOTE: 'animate-on-scroll' class was removed to ensure immediate visibility.
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-2 text-slate-800">About Me</h2>
                <div className="w-16 h-1 bg-sky-500 mx-auto mb-12 rounded-full"></div>
                <div className="max-w-4xl mx-auto">
                    <p className="text-slate-600 leading-relaxed text-lg">
                        I am a motivated Computer Science graduate with intensive training and hands-on experience in <strong className="font-semibold text-slate-800">Java Full Stack Development</strong>. I am proficient in creating <strong className="font-semibold text-slate-800">robust backend services</strong> with Java, Spring Boot, and REST APIs, and building <strong className="font-semibold text-slate-800">dynamic, user-friendly frontends</strong> using modern frameworks like React.js, alongside core web technologies (HTML5, CSS3, JavaScript).
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg mt-4">
                        My focus is on <strong className="font-semibold text-slate-800">clean code principles</strong>, <strong className="font-semibold text-slate-800">responsive design</strong>, and a <strong className="font-semibold text-slate-800">modular architecture</strong> that ensures maintainability and scalability. I thrive in end-to-end application development, seeing a project through from database design (MySQL, Oracle) to frontend polish. I am always seeking opportunities to leverage new technologies to solve complex problems efficiently.
                    </p>
                </div>
            </div>
        </section>
    );
} 
export default About;