function Hero() {
    try {
        return (
            <section id="hero" className="hero-section" data-name="hero-section">
                <div className="hero-image-container" data-name="hero-image-container">
                    <img 
                        src="images\Logo with text.jpg"
                        alt="Gain Chain AI Logo"
                        className="hero-logo-image"
                    />
                </div>
                <div className="hero-content" data-name="hero-content">
                    <h1 className="hero-title" data-name="hero-title">
                        <span className="gradient-text">Democratizing</span> Web3 Access
                    </h1>
                    <p className="hero-subtitle" data-name="hero-subtitle">
                    AI-driven blockchain platform enabling creativity, collaboration, and Web3 accessibility.
                    </p>
                    <div className="hero-buttons" data-name="hero-buttons">
                        <a
                            href="#features"
                            className="primary-button glow-effect"
                            data-name="hero-primary-button"
                        >
                            Explore Features
                            <span className="button-shine"></span>
                        </a>
                        <a
                            href="#contact"
                            className="secondary-button"
                            data-name="hero-secondary-button"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
                <div className="hero-decoration" data-name="hero-decoration">
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
