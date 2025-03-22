function Hero() {
    try {
        // Array of title statements
        const titleStatements = [
            "Democratizing Web3 Access",
            "Empowering users with blockchain tools.",
            "Streamlining web3 development processes significantly.",
            "Fostering collaborative web3 innovation ecosystem.",
            "Democratizing access to web3 technologies.",
            "Enhancing user engagement through incentives.",
            "Promoting inclusive blockchain education initiatives.",
        ];

        // Function to cycle through titles
        function cycleTitles() {
            let currentTitleIndex = 0;
            setInterval(() => {
                currentTitleIndex = (currentTitleIndex + 1) % titleStatements.length;
                animateTitle(titleStatements[currentTitleIndex]);
            }, 6000); // Change title every 6 seconds (1 second longer than before)
        }

        cycleTitles();

        function animateTitle(newTitle) {
            const titleElement = document.querySelector('.hero-title span');

            // Fade out the current title
            titleElement.classList.add('fade-out');
            setTimeout(() => {
                // Update the text after fade-out completes
                titleElement.innerText = newTitle;

                // Fade in the new title
                titleElement.classList.remove('fade-out');
                titleElement.classList.add('fade-in');

                // Remove fade-in class after animation completes
                setTimeout(() => {
                    titleElement.classList.remove('fade-in');
                }, 2000); // Keep it visible for 2 seconds after fading in
            }, 2000); // Wait for fade-out to complete
        }

        return (
            <section id="hero" className="hero-section" data-name="hero-section">
                <div className="hero-image-container" data-name="hero-image-container">
                    <img 
                        src="images\logo.jpg"
                        alt="Gain Chain AI Logo"
                        className="hero-logo-image"
                    />
                </div>
                <div className="hero-content" data-name="hero-content">
                    <h1 className="hero-title" data-name="hero-title">
                        <span className="gradient-text">{titleStatements[0]}</span>
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
                            href="countdown.html"
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
