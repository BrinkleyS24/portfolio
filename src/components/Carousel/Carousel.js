import React from 'react';

const Carousel = ({ activeSection }) => {
    // Define the content for each carousel item based on activeSection
    const carouselItems = [
        {
            section: 'about',
            content: (
                <div className="carousel-item">
                    <h2>About Section</h2>
                    <p>This is the about section of the carousel.</p>
                </div>
            )
        },
        {
            section: 'projects',
            content: (
                <div className="carousel-item">
                    <h2>Projects Section</h2>
                    <p>This is the projects section of the carousel.</p>
                </div>
            )
        },
        // Add more carousel items for other sections as needed
    ];

    // Find the content for the active section
    const activeItem = carouselItems.find(item => item.section === activeSection);

    return (
        <div className="carousel">
            {/* Render the content of the active section */}
            {activeItem && activeItem.content}
        </div>
    );
};

export default Carousel;
