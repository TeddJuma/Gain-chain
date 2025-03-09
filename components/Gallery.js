function Gallery() {
    try {
        const [activeIndex, setActiveIndex] = React.useState(null);
        const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
        const [showModal, setShowModal] = React.useState(false);
        const [isDragging, setIsDragging] = React.useState(false);
        const [startX, setStartX] = React.useState(0);
        const [scrollLeft, setScrollLeft] = React.useState(0);
        const carouselRef = React.useRef(null);

        React.useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth <= 768);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        const handleMouseDown = (e) => {
            setIsDragging(true);
            setStartX(e.pageX - carouselRef.current.offsetLeft);
            setScrollLeft(carouselRef.current.scrollLeft);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carouselRef.current.offsetLeft;
            const walk = (x - startX) * 2;
            carouselRef.current.scrollLeft = scrollLeft - walk;
        };

        const galleryItems = [
            {
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
                title: "Blockchain Technology",
                description: "Decentralized networks powering the future of digital transactions and trust."
            },
            {
                image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9",
                title: "Cryptocurrency Trading",
                description: "24/7 global markets revolutionizing financial accessibility and freedom."
            },
            {
                image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d",
                title: "Smart Contracts",
                description: "Self-executing contracts automating and securing digital agreements."
            },
            {
                image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
                title: "DeFi Solutions",
                description: "Decentralized finance reshaping traditional banking and lending systems."
            },
            {
                image: "https://images.unsplash.com/photo-1639762681057-408e52192e55",
                title: "NFT Marketplace",
                description: "Digital ownership and creativity merged in the blockchain ecosystem."
            }
        ];

        // Double the items for smooth infinite scroll
        const extendedItems = [...galleryItems, ...galleryItems];

        return (
            <section className="gallery-section" data-name="gallery-section">
                {isMobile ? (
                    <div className="mobile-gallery" data-name="mobile-gallery">
                        <div 
                            className="gallery-carousel"
                            ref={carouselRef}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            data-name="gallery-carousel"
                        >
                            {extendedItems.map((item, index) => (
                                <div 
                                    key={index}
                                    className="mobile-gallery-item"
                                    onClick={() => {
                                        if (!isDragging) {
                                            setActiveIndex(index % galleryItems.length);
                                            setShowModal(true);
                                        }
                                    }}
                                    data-name={`mobile-gallery-item-${index}`}
                                >
                                    <img src={item.image} alt={item.title} />
                                </div>
                            ))}
                        </div>
                        {showModal && (
                            <div 
                                className="mobile-modal"
                                onClick={() => setShowModal(false)}
                                data-name="mobile-gallery-modal"
                            >
                                <div className="modal-content">
                                    <img 
                                        src={galleryItems[activeIndex].image} 
                                        alt={galleryItems[activeIndex].title} 
                                    />
                                    <div className="modal-text">
                                        <h3>{galleryItems[activeIndex].title}</h3>
                                        <p>{galleryItems[activeIndex].description}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="desktop-gallery" data-name="desktop-gallery">
                        {galleryItems.map((item, index) => (
                            <div 
                                key={index}
                                className={`gallery-item ${activeIndex === index ? 'active' : ''}`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                                data-name={`desktop-gallery-item-${index}`}
                            >
                                <img src={item.image} alt={item.title} />
                                <div className="gallery-item-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        );
    } catch (error) {
        console.error('Gallery component error:', error);
        reportError(error);
        return null;
    }
}
