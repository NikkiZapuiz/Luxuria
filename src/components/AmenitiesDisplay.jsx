import React from 'react';

function AmenitiesDisplay() {
    return (
        <div className='pt-2' style={{ width: '100%' }}>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/amenities1.jpg" className="d-block w-100" alt="..." style={{ maxHeight: '50vh', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/amenities2.jpg" className="d-block w-100" alt="..." style={{ maxHeight: '50vh', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/amenities3.jpg" className="d-block w-100" alt="..." style={{ maxHeight: '50vh', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/amenities4.jpg" className="d-block w-100" alt="..." style={{ maxHeight: '50vh', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/amenities5.jpeg" className="d-block w-100" alt="..." style={{ maxHeight: '50vh', objectFit: 'cover' }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default AmenitiesDisplay;
