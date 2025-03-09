function Team() {
    try {
        const team = [
            {
                name: "Simon Wandera",
                role: "Blockchain Developer & AI Engineer",
                image: "images/simon.jpg",
                description: "Simon Wandera is a full-stack blockchain developer proficient in AI integration and smart contract development. With a knack for blending cutting-edge technology with pragmatic solutions, Simon drives Gain Chain AI's technical backbone.",
                links: {
                    portfolio: "https://simonwandera.com",
                    linkedin: "https://linkedin.com/in/simonwandera",
                    github: "https://github.com/simonwandera"
                }
            },
            {
                name: "Joanne Wendoh",
                role: "Team Lead & Frontend Developer",
                image: "images/joanne.jpg",
                description: "Joanne Wendoh infuses creativity and technology as a frontend developer, crafting intuitive and responsive user interfaces. Her designs pave the way for seamless interaction, ensuring that user experience is at the forefront of the Gain Chain AI platform.",
                links: {
                    portfolio: "https://mswendoh.world/",
                    linkedin: "https://linkedin.com/in/wendoh-joanne/",
                    github: "https://github.com/J-wendoh"
                }
            },
            {
                name: "Veronicah Anzimbu",
                role: "Backend Developer & System Architect",
                image: "images/veronicah.jpg",
                description: "An expert in scalable architecture and system optimization, Veronicah Anzimbu strengthens Gain Chain AI's structural integrity. Her focus on efficiency and security ensures the robust functionality of the platform.",
                links: {
                    portfolio: "https://veranzi.com/",
                    linkedin: "https://linkedin.com/in/veronicahanzimbu",
                    github: "https://github.com/veranzi"
                }
            },
            {
                name: "Tedd Juma",
                role: "Frontend Developer",
                image: "images/tedd.jpg",
                description: "A frontend web developer with a keen eye for design and modern aesthetics, Tedd Juma brings Gain Chain AI to life with intuitive and visually stunning interfaces, enhancing the user experience and driving engagement through his passion for innovative design and seamless functionality.",
                links: {
                    portfolio: "https://teddjuma.netlify.app/",
                    linkedin: "www.linkedin.com/in/tedd-juma",
                    github: "https://github.com/TeddJuma"
                }
            }
        ];

        return (
            <section id="team" className="team-section section-padding" data-name="team-section">
                <div className="container">
                    <h2 className="section-title" data-name="team-title">
                        Meet The Team
                    </h2>
                    <div className="team-grid" data-name="team-grid">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="team-card"
                                data-name={`team-member-${index}`}
                            >
                                <div className="team-image-container" data-name="team-image-container">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="team-image"
                                        data-name="team-image"
                                    />
                                </div>
                                <h3 className="team-name" data-name="team-name">{member.name}</h3>
                                <h4 className="team-role" data-name="team-role">{member.role}</h4>
                                <p className="team-description" data-name="team-description">
                                    {member.description}
                                </p>
                                <div className="team-links" data-name="team-links">
                                    <a href={member.links.portfolio} target="_blank" rel="noopener noreferrer" 
                                       className="team-link" data-name="team-portfolio-link">
                                        <i className="fas fa-user-astronaut"></i>
                                    </a>
                                    <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" 
                                       className="team-link" data-name="team-linkedin-link">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href={member.links.github} target="_blank" rel="noopener noreferrer" 
                                       className="team-link" data-name="team-github-link">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Team component error:', error);
        reportError(error);
        return null;
    }
}
