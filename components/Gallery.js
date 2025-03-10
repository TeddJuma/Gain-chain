function Gallery() {
    try {
        const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
        const [activeInfo, setActiveInfo] = React.useState(null);
        const carouselRef = React.useRef(null);

        React.useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        const galleryItems = [
            {
                image: "https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D",
                title: "Blockchain Technology",
                description: "Decentralized networks powering the future of digital transactions and trust."
            },
            {
                image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29pbnN8ZW58MHx8MHx8fDA%3D",
                title: "GHC Tokens",
                description: "Users carn rewards for their contributions and participate in our self-sustaining ecosystem."
            },
            {
                image: "https://dashboard.hackenproof.com/uploads/bounty_program/logo/65cbbd92fd18041a388df256/logo.png",
                title: "Internet Computer Protocol",
                description: "Integrated with Internet Computer Protocol (ICP) for scalable and efficient Web 3 solutions."
            },
            {
                image: "https://plus.unsplash.com/premium_photo-1682309859694-a16c994206af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnQlMjBjb250cmFjdHN8ZW58MHx8MHx8fDA%3D",
                title: "Smart Contracts",
                description: "Automated and secure digital agreements transforming industries."
            },
            {
                image: "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QUl8ZW58MHx8MHx8fDA%3D",
                title: "AI Integration",
                description: "Machine learning meets decentralized tech to enhance productivity and usability."
            }
        ];

        const handleItemClick = (item) => {
            if (isMobile) {
                setActiveInfo(item);
            }
        };

        const closeOverlay = () => {
            setActiveInfo(null);
        };

        const renderGalleryItems = () => {
            const itemsToRender = isMobile
                ? [...galleryItems, ...galleryItems, ...galleryItems]
                : galleryItems;

            return itemsToRender.map((item, index) => (
                <div
                    key={index}
                    className="gallery-item"
                    onClick={() => handleItemClick(item)}
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="gallery-image"
                        loading="lazy"
                    />
                    {!isMobile && (
                        <div className="gallery-info">
                            <h3 className="gallery-title">{item.title}</h3>
                            <p className="gallery-description">{item.description}</p>
                        </div>
                    )}
                </div>
            ));
        };

        return (
            <section id="gallery" className="section-padding">
                <div className="container max-w-6xl mx-auto px-4">
                    {/* <h2 className="section-title mb-12 text-center">Gallery</h2> */}
                    <div
                        ref={carouselRef}
                        className={`gallery-carousel ${isMobile ? 'mobile-scroll' : 'desktop-gallery'}`}
                    >
                        {renderGalleryItems()}
                    </div>

                    {isMobile && activeInfo && (
                        <div className="overlay-modal" onClick={closeOverlay}>
                            <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
                                <h3 className="gallery-title">{activeInfo.title}</h3>
                                <p className="gallery-description">{activeInfo.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error("Error rendering Gallery section:", error);
        return null;
    }
}

export default Gallery;
