function TeamPage() {
    try {
        const team = [
            {
                name: "Simon Wandera",
                role: "Blockchain Developer & AI Engineer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
                description: "Simon Wandera is a full-stack blockchain developer proficient in AI integration and smart contract development. With a knack for blending cutting-edge technology with pragmatic solutions, Simon drives Gain Chain AI's technical backbone."
            },
            {
                name: "Joanne Wendoh",
                role: "Team Lead & Frontend Developer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300",
                description: "Joanne Wendoh infuses creativity and technology as a frontend developer, crafting intuitive and responsive user interfaces. Her designs pave the way for seamless interaction, ensuring that user experience is at the forefront of the Gain Chain AI platform."
            },
            {
                name: "Veronicah Anzimbu",
                role: "Backend Developer & System Architect",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300",
                description: "An expert in scalable architecture and system optimization, Veronicah Anzimbu strengthens Gain Chain AI's structural integrity. Her focus on efficiency and security ensures the robust functionality of the platform."
            },
            {
                name: "Tedd Juma",
                role: "Frontend Developer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300",
                description: "A frontend web developer with a keen eye for design and modern aesthetics, Tedd Juma brings Gain Chain AI to life with intuitive and visually stunning interfaces, enhancing the user experience and driving engagement through his passion for innovative design and seamless functionality."
            }
        ];

        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900">
                <nav className="navbar" data-name="team-page-nav">
                    <a href="/" className="navbar-brand">
                        <img 
                            src="images/Plain Logo.jpg" 
                            alt="Gain Chain AI Logo" 
                            className="navbar-logo"
                        />
                        Gain Chain AI
                    </a>
                </nav>
                
                <div className="container mx-auto px-4 py-24">
                    <h1 className="text-4xl font-bold text-center mb-12 text-white">Our Team</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div 
                                key={index}
                                className="team-card"
                                data-name={`team-member-${index}`}
                            >
                                <div className="team-image-container">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="team-image"
                                    />
                                </div>
                                <h3 className="team-name">{member.name}</h3>
                                <h4 className="team-role">{member.role}</h4>
                                <p className="team-description">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('TeamPage component error:', error);
        reportError(error);
        return null;
    }
}
