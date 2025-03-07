function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [typingText, setTypingText] = React.useState('');
        const fullText = 'Get In Touch';
        const [isTyping, setIsTyping] = React.useState(true);
        const [formSubmitted, setFormSubmitted] = React.useState(false);

        React.useEffect(() => {
            let timeoutId;
            let currentIndex = 0;
            let isDeleting = false;

            const type = () => {
                if (!isDeleting && currentIndex <= fullText.length) {
                    setTypingText(fullText.slice(0, currentIndex));
                    currentIndex++;
                    timeoutId = setTimeout(type, 150);
                } else if (!isDeleting && currentIndex > fullText.length) {
                    isDeleting = true;
                    timeoutId = setTimeout(type, 1000);
                } else if (isDeleting && currentIndex > 0) {
                    currentIndex--;
                    setTypingText(fullText.slice(0, currentIndex));
                    timeoutId = setTimeout(type, 50);
                } else if (isDeleting && currentIndex === 0) {
                    isDeleting = false;
                    timeoutId = setTimeout(type, 500);
                }
            };

            timeoutId = setTimeout(type, 500);

            return () => clearTimeout(timeoutId);
        }, []);

        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        };

        const handleSubmit = async (event) => {
            event.preventDefault();
            setIsSubmitting(true);

            try {
                // Example using fetch to send form data to a backend or form service
                const response = await fetch('https://example.com/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    setFormSubmitted(true);
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    console.error('Failed to submit form');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setIsSubmitting(false);
            }
        };

        return (
            <section id="contact" className="contact-section" data-name="contact-section">
                <div className="contact-container" data-name="contact-container">
                    <h1 className="contact-title" data-name="contact-title">{typingText}</h1>
                    {formSubmitted ? (
                        <p>Form submitted successfully!</p>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form" data-name="contact-form">
                            <div className="form-group" data-name="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    aria-label="Full name"
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group" data-name="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    aria-label="Email address"
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group" data-name="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    aria-label="Your message"
                                    className="form-textarea"
                                />
                            </div>
                            <button type="submit" disabled={isSubmitting} className="submit-button">
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
