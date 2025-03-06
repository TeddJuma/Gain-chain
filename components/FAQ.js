function FAQ() {
    try {
        const [activeIndex, setActiveIndex] = React.useState(null);

        const faqs = [
            {
                question: "What is Gain Chain AI?",
                answer: "Gain Chain AI is a blockchain-based platform that integrates artificial intelligence to democratize access to Web3 technologies. We simplify blockchain development and make it accessible to users with diverse backgrounds."
            },
            {
                question: "How does GCH Coins work?",
                answer: "GCH Coins are our platform's native tokens that incentivize user participation and engagement. They reward contributions and create a self-sustaining ecosystem for continuous growth and innovation."
            },
            {
                question: "What educational resources do you offer?",
                answer: "We provide comprehensive courses on blockchain and Web3 development, designed for all skill levels. Graduates receive GCH Coins as rewards, creating a skilled developer pipeline for our ecosystem."
            },
            {
                question: "How can I start using Gain Chain AI?",
                answer: "Getting started is simple! Create an account, explore our educational resources, and join our community. Our AI-driven tools will help you begin your blockchain journey regardless of your technical background."
            },
            {
                question: "What makes Gain Chain AI different?",
                answer: "Our unique combination of AI-powered development tools, educational resources, and community-driven ecosystem sets us apart. We focus on making blockchain technology accessible while maintaining high security and functionality standards."
            }
        ];

        const toggleFAQ = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
        };

        return (
            <section id="faq" className="section-padding" data-name="faq-section">
                <div className="container">
                    <h2 
                        className="text-4xl font-bold text-center mb-12 slide-up" 
                        data-name="faq-title"
                        style={{ animationDelay: '0.1s' }}
                    >
                        Frequently Asked Questions
                    </h2>
                    <div 
                        className="faq-section parallax" 
                        data-name="faq-list"
                        style={{ transform: 'translateZ(30px)' }}
                    >
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className="faq-item slide-up"
                                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                                data-name={`faq-item-${index}`}
                            >
                                <div
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                    data-name={`faq-question-${index}`}
                                >
                                    <h3 className="text-xl">{faq.question}</h3>
                                    <i className={`fas fa-chevron-down faq-icon ${activeIndex === index ? 'active' : ''}`}></i>
                                </div>
                                <div 
                                    className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
                                    data-name={`faq-answer-${index}`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('FAQ component error:', error);
        reportError(error);
        return null;
    }
}
