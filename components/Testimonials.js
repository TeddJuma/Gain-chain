function Testimonials() {
    try {
        const testimonials = [
            {
                name: "Sarah Johnson",
                role: "Blockchain Developer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                content: "Gain Chain AI has revolutionized how I approach blockchain development. The AI-powered tools have significantly reduced development time while maintaining high quality."
            },
            {
                name: "Michael Chen",
                role: "Crypto Entrepreneur",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                content: "The platform's intuitive interface and comprehensive educational resources made my transition into Web3 seamless. It's a game-changer for blockchain adoption."
            },
            {
                name: "Emily Rodriguez",
                role: "DeFi Analyst",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
                content: "The integration of AI with blockchain technology is brilliant. Gain Chain AI has made complex DeFi concepts accessible to everyone."
            },
            {
                name: "David Kim",
                role: "Smart Contract Developer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                content: "The automated smart contract analysis tools have saved me countless hours of debugging. This platform is essential for modern blockchain development."
            },
            {
                name: "Lisa Thompson",
                role: "Crypto Investor",
                image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909",
                content: "The community support and educational resources have been invaluable in my crypto journey. Gain Chain AI truly democratizes access to blockchain technology."
            },
            {
                name: "James Wilson",
                role: "NFT Artist",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                content: "As an artist entering the NFT space, Gain Chain AI provided all the tools and knowledge I needed. Their platform made the technical aspects approachable."
            }
        ];

        return (
            <section className="testimonials-section section-padding" data-name="testimonials-section">
                <div className="container">
                    <h2 className="section-title mb-12" data-name="testimonials-title">
                        What Our Users Say
                    </h2>
                    <div className="testimonials-container" data-name="testimonials-container">
                        <div className="testimonials-scroll" data-name="testimonials-scroll">
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <div 
                                    key={index}
                                    className="testimonial-card"
                                    data-name={`testimonial-${index}`}
                                >
                                    <div className="testimonial-image">
                                        <img src={testimonial.image} alt={testimonial.name} />
                                    </div>
                                    <div className="testimonial-content">
                                        <p className="testimonial-text">{testimonial.content}</p>
                                        <div className="testimonial-author">
                                            <h3>{testimonial.name}</h3>
                                            <p>{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials component error:', error);
        reportError(error);
        return null;
    }
}
