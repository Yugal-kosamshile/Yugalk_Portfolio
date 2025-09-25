       
   // Contact form handling
        const contactForm = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !message) {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.className = 'mt-4 text-center text-red-600';
                formMessage.classList.remove('hidden');
                return;
            }

            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            formMessage.className = 'mt-4 text-center text-green-600';
            formMessage.classList.remove('hidden');

            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });

