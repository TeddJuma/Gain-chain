// Previous Contact component code with updated typing effect
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

        // Rest of the Contact component code...
        // (Keep all the existing code for form handling, rendering, etc.)
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
