function Team() {
    try {
        const team = [
            {
                name: "Sarah Chen",
                role: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300",
                description: "A visionary leader with over 15 years of experience in blockchain technology and AI integration. Sarah drives the company's strategic direction and innovation initiatives."
            },
            {
                name: "Marcus Rodriguez",
                role: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
                description: "Leading our technical development, Marcus brings expertise in AI systems and blockchain architecture, ensuring our platform remains at the cutting edge of technology."
            },
            {
                name: "Dr. Emily Thompson",
                role: "Head of AI Research",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300",
                description: "With a Ph.D. in Artificial Intelligence, Emily leads our AI research team, developing innovative solutions for blockchain accessibility and optimization."
            },
            {
                name: "James Wilson",
                role: "Head of Community",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300",
                description: "A community builder at heart, James oversees our educational initiatives and community engagement programs, fostering a vibrant ecosystem of developers and users."
            },
            {
                name: "Diana Park",
                role: "Chief Security Officer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300",
                description: "With extensive experience in blockchain security, Diana ensures our platform maintains the highest standards of security while remaining accessible to all users."
            }
        ];

        return (
            <section id="team" className="team-section section-padding" data-name="team-section">
                <div className="container">
                    <h2 className="section-title mb-12" data-name="team-title">
                        Our Team
                    </h2>
                    <div className="team-grid" data-name="team-grid">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="team-card parallax"
                                style={{ transform: `translateZ(${(index + 1) * 20}px)` }}
                                data-name={`team-member-${index}`}
                            >
                                <div className="team-image-container" data-name={`team-image-${index}`}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="team-image"
                                    />
                                </div>
                                <h3 className="team-name" data-name={`team-name-${index}`}>
                                    {member.name}
                                </h3>
                                <h4 className="team-role" data-name={`team-role-${index}`}>
                                    {member.role}
                                </h4>
                                <p className="team-description" data-name={`team-description-${index}`}>
                                    {member.description}
                                </p>
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
