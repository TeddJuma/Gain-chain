function Footer() {
    try {
        return (
            <footer className="bg-gray-900 py-12" data-name="footer">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-name="footer-content">
                        <div data-name="footer-about">
                            <h3 className="text-xl font-bold mb-4">About Gain Chain AI</h3>
                            <p className="text-gray-400">
                                Democratizing access to Web3 technologies through AI-powered blockchain solutions.
                            </p>
                        </div>
                        <div data-name="footer-links">
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="index.html" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                                <li><a href="team.html" className="text-gray-400 hover:text-white">Our Team</a></li>
                            </ul>
                        </div>
                        <div data-name="footer-social">
                            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <a href="#https://x.com/gchainAI" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#https://linkedin.com/gchain-ai-9b850a33a/" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#https://instagram.com/Gain _ChainAI2" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                < a href="#https://github.com/gchain-ai" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-gitlab"></i>
                                </a>
                                <a href="mailto:gainchainai@gmail.com" className="text-gray-400 hover:text-white">
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center" data-name="footer-bottom">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} Gain Chain AI. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
