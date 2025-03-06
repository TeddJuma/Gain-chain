function Navbar() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const scrollToSection = (sectionId, event) => {
            event.preventDefault();
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
            }
        };

        return (
            <nav className="navbar" data-name="navbar">
                <a href="#hero" onClick={(e) => scrollToSection('hero', e)} className="navbar-brand" data-name="navbar-brand">
                    <img 
                        src="images/Plain Logo.jpg" 
                        alt="Gain Chain AI Logo" 
                        className="navbar-logo"
                        data-name="navbar-logo"
                    />
                    Gain Chain AI
                </a>

                <button
                    className="mobile-menu-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    data-name="mobile-menu-button"
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                <div className={`navbar-nav ${isMenuOpen ? 'active' : ''}`} data-name="navbar-nav">
                    <a href="#hero" onClick={(e) => scrollToSection('hero', e)} className="nav-link" data-name="nav-link-home">
                        Home
                    </a>
                    <a href="#about" onClick={(e) => scrollToSection('about', e)} className="nav-link" data-name="nav-link-about">
                        About
                    </a>
                    <a href="#services" onClick={(e) => scrollToSection('services', e)} className="nav-link" data-name="nav-link-services">
                        Services
                    </a>
                    <a href="#features" onClick={(e) => scrollToSection('features', e)} className="nav-link" data-name="nav-link-features">
                        Features
                    </a>
                    <a href="#contact" onClick={(e) => scrollToSection('contact', e)} className="nav-link" data-name="nav-link-contact">
                        Contact
                    </a>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
