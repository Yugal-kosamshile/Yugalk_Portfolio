import React, { useState } from 'react';

const Contact = () => {
  // 1. State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // 2. State for form submission status/message
  const [formMessage, setFormMessage] = useState({
    text: '',
    isError: false,
    isVisible: false,
  });

  // 3. Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 4. Handle form submission (Simulated)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormMessage({
        text: 'Please fill out all fields.',
        isError: true,
        isVisible: true,
      });
      return;
    }

    // Simulate an API call or form submission logic
    console.log('Form Submitted:', formData);

    // Reset form and show success message
    setFormData({ name: '', email: '', message: '' });
    setFormMessage({
      text: 'Message sent successfully! We will get back to you soon. 😊',
      isError: false,
      isVisible: true,
    });

    // Optionally hide message after a few seconds
    setTimeout(() => {
      setFormMessage({ ...formMessage, isVisible: false });
    }, 5000);
  };

  // Helper for contact icons (Mail and Phone) - uses your SVG paths
  const EmailIcon = (props) => (
    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
      </path>
    </svg>
  );

  const PhoneIcon = (props) => (
    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
      </path>
    </svg>
  );

  const LocationIcon = (props) => (
    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
      </path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  );
  
  // Svg for social media icons (LinkedIn, GitHub, Email, Facebook, Instagram)
  const socialIcons = {
    linkedin: (
      <svg className="w-5 h-5 text-gray-700 hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.97 3.3 5.97 7.6V24h-5V16c0-1.91-.03-4.37-2.66-4.37-2.66 0-3.07 2.08-3.07 4.23V24h-5V8z" />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5 text-gray-700 hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49.998.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.295-1.23 3.295-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.297 24 12c0-6.63-5.373-12-12-12z" clipRule="evenodd" />
      </svg>
    ),
    mail: (
      <svg className="w-5 h-5 text-gray-700 hover:text-red-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 13.065L.004 4.5V20h23.992V4.5L12 13.065zm0-2.13L23.992 2H.004L12 10.935z" />
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5 text-gray-700 hover:text-blue-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.762v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.406 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5 text-gray-700 hover:text-pink-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 011.675 1.096 4.92 4.92 0 011.096 1.675c.17.46.354 1.26.41 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 01-1.096 1.675 4.92 4.92 0 01-1.675 1.096c-.46.17-1.26.354-2.43.41-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 01-1.675-1.096 4.92 4.92 0 01-1.096-1.675c-.17-.46-.354-1.26-.41-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.92 4.92 0 011.096-1.675 4.92 4.92 0 011.675-1.096c.46-.17 1.26-.354 2.43-.41C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.78.13 4.868.308 4.092.55a6.928 6.928 0 00-2.502 1.634A6.928 6.928 0 00.55 4.092c-.242.776-.42 1.688-.478 2.96C0 8.332 0 8.741 0 12s.014 3.668.072 4.948c.058 1.272.236 2.184.478 2.96a6.928 6.928 0 001.634 2.502 6.928 6.928 0 002.502 1.634c.776.242 1.688.42 2.96.478C8.332 24 8.741 24 12 24s3.668-.014 4.948-.072c1.272-.058 2.184-.236 2.96-.478a6.928 6.928 0 002.502-1.634 6.928 6.928 0 001.634-2.502c.242-.776.42-1.688.478-2.96.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.272-.236-2.184-.478-2.96a6.928 6.928 0 00-1.634-2.502 6.928 6.928 0 00-2.502-1.634c-.776-.242-1.688-.42-2.96-.478C15.668 0 15.259 0 12 0z" />
        <circle cx="12" cy="12" r="3.6" />
      </svg>
    ),
  };
  
  // Custom class for the message display
  const messageClass = formMessage.isError
    ? 'text-red-600 bg-red-100 p-3 rounded-md'
    : 'text-green-600 bg-green-100 p-3 rounded-md';

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Contact Form & Info Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
            <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Form Submission Message */}
            {formMessage.isVisible && (
              <div id="form-message" className={`mt-4 text-center ${messageClass}`}>
                {formMessage.text}
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Email Contact */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <EmailIcon />
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Email</p>
                  <p className="text-gray-600">ykosamshile@gmail.com</p>
                </div>
              </div>

              {/* Phone Contact */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <PhoneIcon />
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Phone</p>
                  <p className="text-gray-600">+91 992-337-5997</p>
                </div>
              </div>

              {/* Location Contact */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <LocationIcon />
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Location</p>
                  <p className="text-gray-600">Chandrapur, Maharashtra, India</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4">
                <p className="text-gray-700 mb-4">Connect with me on social media:</p>

                <div className="flex space-x-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/yugal-kosamshile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
                    aria-label="LinkedIn"
                  >
                    {socialIcons.linkedin}
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Yugal-kosamshile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                    aria-label="GitHub"
                  >
                    {socialIcons.github}
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:yugalkosamshile2002@gmail.com"
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
                    aria-label="Email"
                  >
                    {socialIcons.mail}
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                    aria-label="Facebook"
                  >
                    {socialIcons.facebook}
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
                    aria-label="Instagram"
                  >
                    {socialIcons.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;