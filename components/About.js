function About() {
    try {
        return (
            <section id="about" className="section-padding" data-name="about-section">
                <div className="container">
                    <h2 className="section-title mb-12" data-name="about-title">
                        About Gain Chain AI
                    </h2>
                    <div className="about-text space-y-6" data-name="about-text">
                        <p className="text-lg text-gray-200 slide-up" style={{ animationDelay: '0.1s' }}>
                            Gain Chain AI represents a revolutionary leap in blockchain technology, 
                            seamlessly integrating artificial intelligence to democratize access to 
                            Web3 technologies. Our platform breaks down traditional barriers in the 
                            blockchain space, making it accessible to users regardless of their 
                            technical expertise or background.
                        </p>
                        <p className="text-lg text-gray-200 slide-up" style={{ animationDelay: '0.2s' }}>
                            At our core, we believe in the power of community and education. 
                            Through our innovative AI-driven tools, we simplify blockchain 
                            development while maintaining the robust security and functionality 
                            that Web3 demands. Our platform enables users to focus on creativity 
                            and innovation, rather than getting bogged down by technical complexities.
                        </p>
                        <p className="text-lg text-gray-200 slide-up" style={{ animationDelay: '0.3s' }}>
                            With our GCH Coins tokenomics system, we've created a self-sustaining 
                            ecosystem that rewards participation and contribution. This approach 
                            not only incentivizes active engagement but also ensures the long-term 
                            sustainability and growth of our platform, benefiting all participants 
                            in our thriving community.
                        </p>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
