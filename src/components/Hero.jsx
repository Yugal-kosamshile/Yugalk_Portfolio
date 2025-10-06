import React from 'react';

function Hero() {
    // Custom styles containing keyframes and custom classes for the animations
    const customStyles = `
        /* Custom Gradient for Name */
        .text-gradient {
            background: linear-gradient(to right, #0ea5e9, #0ea5e9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Custom Pulse Effect for Profile Picture */
        @keyframes pulse-ring {
            0% {
                transform: scale(0.33);
                opacity: 1;
            }
            80%, 100% {
                opacity: 0;
            }
        }

        .hero-pulse::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: rgba(14, 165, 233, 0.4); /* sky-500 with opacity */
            top: 0;
            left: 0;
            z-index: -1;
            animation: pulse-ring 2.5s cubic-bezier(0.24, 0, 0.4, 1) infinite;
        }

        /* --- Animation for Letter Drop Effect --- */
        @keyframes letterDrop {
            0% {
                opacity: 0;
                transform: translateY(-50px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animated-word {
            display: inline-block; /* Essential to allow transform/translate on inline text */
            opacity: 0;
            /* Animation properties: name, duration, timing, fill mode (for persistence) */
            animation: letterDrop 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; /* Reduced duration for snappier letter drops */
        }
    `;

    // Define the segments for correct gradient styling
    // The spaces are included here for easier character splitting.
    const nameSegments = [
        "Hi, I'm ",
        "Yugal ", // This segment gets the gradient
        "Kosamshile"
    ];

    // Counter to control the animation stagger delay (used for keys and delay time)
    let delayCounter = 0;

    const AnimatedTitleContent = nameSegments.map((word, segmentIndex) => {
        // Determine if the current segment should be the gradient color
        const isGradient = segmentIndex === 1;

        // Split the segment into individual characters
        return word.split(' ').map((char) => {
            const delay = (delayCounter++) * 0.05; // Small increment (0.05s) for a fast cascade

            // Spaces should not drop, so we return a non-animated space immediately visible
            if (char === ' ') {
                return <span key={`char-${delayCounter}`} style={{ opacity: 1 }}>&nbsp;</span>;
            }

            // Wrap each letter in an animated span with calculated delay
            return (
                <span
                    key={`char-${delayCounter}`}
                    // Use a combination of animated-word for drop and the appropriate color class
                    // IMPORTANT: Changed text-slate-800 to text-white for better contrast against the video/overlay.
                    className={`animated-word inline-block ${isGradient ? 'text-gradient' : 'text-white'}`}
                    style={{ animationDelay: `${delay}s` }}
                >
                    {char}
                </span>
            );
        });
    }).flat(); // Flatten the array of arrays of characters into a single array for rendering

    return (
        // Added 'relative' to the section to ensure absolute children (video/overlay) are contained
        <section id="hero" className="min-h-screen flex items-center bg-slate-50 pt-32 pb-16 relative">

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

            {/* 🔥🔥 NEW: Video Overlay for Readability 🔥🔥 */}
            {/* The 'absolute' positioning covers the video, and 'z-0' puts it on top of the video (which is also z-0) 
                but below the content (which is z-10). The 'bg-black/50' is black with 50% opacity. */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-1" aria-hidden="true"></div>


            {/* INJECTED STYLES: This block includes the CSS definitions needed for text-gradient, hero-pulse, and the letterDrop animation to work. */}
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />


            {/* Main Content Container - The 'z-10' class is critical to lift this content above the video and the new overlay. */}
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between z-10">

                <div className="md:w-1/2 text-center md:text-left mt-12 md:mt-0">
                    {/* Changed color from text-sky-500 to text-sky-400 for better contrast on a dark background */}
                    <p className="text-lg font-semibold text-sky-400 mb-2 transition-colors duration-200 hover:text-sky-300 cursor-pointer">Java Full Stack Developer | CS Graduate</p>

                    {/* H1 content is already using AnimatedTitleContent, which now uses 'text-white' */}
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight cursor-pointer"
                    >
                        {AnimatedTitleContent}
                    </h1>

                    {/* Changed text-slate-600 to text-slate-200 for readability */}
                    <p className="text-lg text-slate-200 mt-4 max-w-lg">A motivated Computer Science graduate dedicated to building modern, efficient, and dynamic web applications from concept to deployment.</p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <a href="#projects" className="bg-sky-500 text-white font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-sky-600 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-2xl">View My Work</a>
                        <a
                            href="Yugal_Kosamshile_Resume.pdf"
                            download="Yugal_Kosamshile_Resume.pdf"
                            className="bg-slate-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-slate-800 transition-all duration-300 transform hover:scale-[1.05] flex items-center justify-center"
                        >
                            <i className="fas fa-download mr-2"></i> Download Resume
                        </a>
                    </div>
                    {/* Social Media Icons (The elements that were previously invisible) */}
                    {/* Changed color from text-slate-600 to text-slate-300 for readability */}
                    <div className="mt-8 flex justify-center md:justify-start space-x-6">
                        <a href="mailto:ykosamshile@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-500 text-3xl transition-transform duration-300 hover:scale-125"><i className="fas fa-envelope"></i></a>
                        <a href="https://www.linkedin.com/in/yugal-kosamshile/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-500 text-3xl transition-transform duration-300 hover:scale-125"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/YugalKosamshile" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-500 text-3xl transition-transform duration-300 hover:scale-125"><i className="fab fa-github"></i></a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-sky-300 to-sky-500 shadow-2xl p-3 relative overflow-hidden hero-pulse">
                        <img
                            src="./image/your-photo.png"
                            alt="Yugal Kosamshile Profile Picture"
                            className="w-full h-full object-cover rounded-full border-4 border-white"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;