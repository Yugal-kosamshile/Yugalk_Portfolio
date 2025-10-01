import React from 'react';
// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// 2. Import Swiper modules
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';

// 3. Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

// Helper component for the individual skill cards
const SkillCard = ({ name, iconUrl }) => (
  <div
    className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-xl"
  >
    <img src={iconUrl} alt={`${name} icon`} className="w-12 h-12" />
    <p className="mt-3 text-gray-800 font-medium">{name}</p>
  </div>
);

function Skills () {
  const technicalSkills = [
    { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Bootstrap', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'React.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Spring Boot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Oracle SQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ];

  const toolSkills = [
    { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Eclipse', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg' },
    { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Spring Tool Suite', iconUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
  ];

  const softSkills = [
    { name: 'Problem Solving', color: 'indigo' },
    { name: 'Communication', color: 'purple' },
    { name: 'Teamwork', color: 'blue' },
    { name: 'Time Management', color: 'green' },
    { name: 'Adaptability', color: 'yellow' },
    { name: 'Creativity', color: 'red' },
    { name: 'Critical Thinking', color: 'indigo' },
    { name: 'Attention to Detail', color: 'purple' },
  ];

  const getSoftSkillClasses = (color) => `bg-${color}-50 text-${color}-700 px-4 py-2 rounded-full skill-pill transition-transform duration-300`;

  const swiperParams = {
    // 4. Pass modules you need
    modules: [Autoplay, Navigation, FreeMode],
    // 5. Pass Swiper options as props
    loop: true,
    freeMode: true,
    speed: 3000,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    // Breakpoints are handled correctly by the Swiper React component
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 15 },
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
    },
    // Navigation setup
    navigation: {
        nextEl: ".swiper-button-next-tech",
        prevEl: ".swiper-button-prev-tech",
    },
    className: "p-5", // Equivalent to p-5 class on the outer div
  };
  
  // Custom Autoplay settings for the Tools section (reversed)
  const swiperToolsParams = {
    ...swiperParams, // Reuse general settings
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true, // Specific setting for Tools
    },
    navigation: {
        nextEl: ".swiper-button-next-tools",
        prevEl: ".swiper-button-prev-tools",
    },
  }


  return (
    <section id="skills" className="py-20 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">My Skills</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            I've developed expertise in various technologies and methodologies
            throughout my career.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Technical Skills
          </h3>

          {/* Swiper Carousel Implementation */}
          <div className="relative">
            {/* Custom Navigation Arrows (Need to be outside the Swiper component) */}
            <div
              className="swiper-button-next-tech absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-100 text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow cursor-pointer hover:bg-indigo-600 hover:text-white transition z-10"
              aria-label="Next slide"
            >
              &lt;
            </div>
            <div
              className="swiper-button-prev-tech absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-100 text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow cursor-pointer hover:bg-indigo-600 hover:text-white transition z-10"
              aria-label="Previous slide"
            >
              &gt;
            </div>
            
            {/* The Swiper component handles the functionality */}
            <Swiper {...swiperParams}>
              {technicalSkills.map((skill) => (
                <SwiperSlide key={skill.name}>
                    <SkillCard name={skill.name} iconUrl={skill.iconUrl} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {softSkills.map((skill) => (
              <span key={skill.name} className={getSoftSkillClasses(skill.color)}>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Tools Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Tools & IDEs
          </h3>

          {/* Swiper Carousel Implementation */}
          <div className="relative">
            {/* Custom Navigation Arrows */}
            <div
              className="swiper-button-next-tools absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-100 text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow cursor-pointer hover:bg-indigo-600 hover:text-white transition z-10"
              aria-label="Next slide"
            >
              &lt;
            </div>
            <div
              className="swiper-button-prev-tools absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-100 text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow cursor-pointer hover:bg-indigo-600 hover:text-white transition z-10"
              aria-label="Previous slide"
            >
              &gt;
            </div>
            
            {/* The Swiper component handles the functionality */}
            <Swiper {...swiperToolsParams}>
              {toolSkills.map((skill) => (
                <SwiperSlide key={skill.name}>
                    <SkillCard name={skill.name} iconUrl={skill.iconUrl} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;