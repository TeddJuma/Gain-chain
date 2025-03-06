function Features() {
    try {
        const features = [
            {
                icon: "fa-robot",
                title: "AI-Powered Development",
                description: "Simplify blockchain development with our AI-driven tools, making it accessible to users of all skill levels."
            },
            {
                icon: "fa-users",
                title: "Community Ecosystem",
                description: "Join a vibrant community of developers and innovators, sharing knowledge and building together."
            },
            {
                icon: "fa-coins",
                title: "GCH Tokens",
                description: "Earn rewards for your contributions and participate in our self-sustaining ecosystem."
            },
            {
                icon: "fa-graduation-cap",
                title: "Educational Resources",
                description: "Access comprehensive courses and tutorials to master blockchain development."
            },
            {
                icon: "fa-shield-alt",
                title: "Secure Platform",
                description: "Built with advanced security measures to protect your assets and innovations."
            },
            {
                icon: "fa-chart-line",
                title: "Growth Opportunities",
                description: "Unlock new possibilities in the Web3 space with our innovative platform."
            },
            {
                icon: "fa-infinity",
                title: 'Internet Computer Protocol',
                description: 'Integrate blockchain solutions into the Internet Computer Protocol for enhanced decentralization and interoperability.'
            }
        ];

        const [isVisible, setIsVisible] = React.useState(false);
        const sectionRef = React.useRef(null);

        React.useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold: 0.1 }
            );

            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }

            return () => {
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
                }
            };
        }, []);

        return (
            <section 
                id="features" 
                className="features-section" 
                ref={sectionRef}
                data-name="features-section"
            >
                <div className="container">
                    <h2 
                        className={`text-4xl font-bold text-center mb-12 ${isVisible ? 'slide-up' : ''}`}
                        style={{ animationDelay: '0.1s' }}
                        data-name="features-title"
                    >
                        Empowering Features
                    </h2>
                    <div className="features-grid" data-name="features-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`feature-card parallax ${isVisible ? 'slide-up' : ''}`}
                                style={{ 
                                    transform: `translateZ(${(index + 1) * 20}px)`,
                                    animationDelay: `${(index + 2) * 0.1}s`
                                }}
                                data-name={`feature-card-${index}`}
                            >
                                <div 
                                    className="feature-icon float-animation"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                    data-name={`feature-icon-${index}`}
                                >
                                    <i className={`fas ${feature.icon} text-2xl text-white`}></i>
                                </div>
                                <h3 
                                    className="feature-title"
                                    data-name={`feature-title-${index}`}
                                >
                                    {feature.title}
                                </h3>
                                <p 
                                    className="feature-description"
                                    data-name={`feature-description-${index}`}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        reportError(error);
        return null;
    }
}
