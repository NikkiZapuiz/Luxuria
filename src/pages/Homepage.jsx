
import AmenitiesDisplay from "../components/AmenitiesDisplay";
import '../css/DateAndPaxSelector.css'
import RoomDisplay from "../components/RoomDisplay";

function HomePage() {

    return (
        <>
            <div>
                <AmenitiesDisplay />
                <div className="container">
                    <div className="p-5 d-flex flex-column align-items-center" style={{ color: "#132b6d" }}>
                        <h4 className="mb-5"> Welcome to Luxuria - Where Dreams Find Luxury.</h4>
                        <p className="mb-3">Indulge in Elegance, Embrace Comfort, Experience Luxuria.</p>
                        <p>Discover a world of opulence and sophistication at Luxuria,
                            where every moment is a masterpiece and every stay is a story to remember.
                            Our exquisite oasis invites you to elevate your senses and immerse yourself in unparalleled luxury.
                            Step into a realm of lavish comfort with our meticulously designed rooms and suites. Each space is a sanctuary of style,
                            adorned with the finest furnishings, plush bedding, and modern amenities that cater to your every need.
                        </p>
                        <p>
                            Celebrate life's precious moments in grandeur at Luxuria. From weddings to corporate gatherings,
                            our elegant event spaces are the perfect backdrop for your most cherished occasions.
                            Our dedicated event team ensures that every detail is meticulously curated to perfection.
                        </p>
                    </div>
                    <h5 className="p-5 text-center" style={{ color: "#132b6d" }}>Luxuria's exquisite range of accommodations</h5>
                    <RoomDisplay />
                    <h5 className="mt-5 text-center" style={{ color: "#132b6d" }}>Luxuria: Where Every Amenity is an Experience</h5>
                    <div className="row align-items-center mt-5" style={{ color: "#132b6d" }}>
                        <div className="col-md-7 mb-4 mb-md-0">
                            <img src="/amenities1.jpg" className="img-fluid rounded" alt="bar" />
                        </div>
                        <div className="col-md-5 mt-5">
                            <h5 className="mb-5 text-center"> Unwind and Sip in Style at Luxuria's Exquisite Bar</h5>
                            <p className="mb-3">
                                Elevate your senses and escape to a realm of luxury at Luxuria's exclusive bar.
                                Nestled within our opulent haven, our bar offers an enchanting ambiance where sophistication meets relaxation.
                                Here, every drink becomes an experience, and every moment becomes a memory to cherish.
                            </p>
                            <p className="mt-3">
                                Step into a world of refined elegance as you enter Luxuria Bar. The tastefully designed space exudes an air of grandeur,
                                boasting plush seating, exquisite lighting, and a captivating atmosphere that's perfect for unwinding after a day of exploration.
                            </p>
                            <p>
                                Whether you're celebrating a special occasion or simply enjoying a night out, Luxuria Bar sets the stage for unforgettable moments.
                                Our attentive staff ensures that every glass is raised in celebration, making your time with us truly exceptional.
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-center" style={{ color: "#132b6d" }}>
                        <div className="col-md-5 mt-5">
                            <h5 className="mb-5 text-center"> Dive into Luxury at Luxuria's Breathtaking Poolside Oasis</h5>
                            <p className="mb-3">
                                Escape the ordinary and immerse yourself in a world of serenity and splendor at Luxuria's stunning poolside paradise.
                                Our meticulously designed aquatic haven invites you to unwind, rejuvenate, and make memories that shimmer as brightly as the sun-kissed waters.
                            </p>
                            <p className="mb-3">
                                Whether you're seeking a peaceful escape or a vibrant social scene, our pool area caters to your desires. Bask in the golden rays of the sun,
                                take a refreshing dip in the crystal-clear waters, or simply unwind with a good book as you experience the ultimate in relaxation.
                            </p>
                            <p>
                                As the day fades into twilight, Luxuria Pool transforms into an enchanting evening retreat. Sip on cocktails by the pool's edge,
                                watch the city lights come alive, and revel in the captivating atmosphere that embraces you.
                            </p>
                        </div>
                        <div className="col-md-7 mb-4 mb-md-0">
                            <img src="/amenities2.jpg" className="img-fluid rounded" alt="bar" />
                        </div>
                    </div>
                    <div className="row align-items-center" style={{ color: "#132b6d" }}>
                        <div className="col-md-7 mb-4 mb-md-0">
                            <img src="/amenities3.jpg" className="img-fluid rounded" alt="bar" />
                        </div>
                        <div className="col-md-5 mt-5">
                            <h5 className="mb-5 text-center"> Elevate Your Wellness Journey at Luxuria's State-of-the-Art Gym</h5>
                            <p className="mb-3">
                                Experience a fitness haven equipped with top-of-the-line exercise equipment, designed to cater to every aspect of your workout routine.
                                From cardio to strength training, our gym is your playground for achieving your fitness goals.
                            </p>
                            <p className="mb-3">
                                Embark on a personalized fitness journey with the guidance of our experienced trainers. Whether you're a seasoned athlete or new to fitness,
                                our experts will create a tailored plan to help you optimize your workouts and reach new heights.
                            </p>
                            <p>
                                Whether you're aiming to increase your strength, boost your energy, or simply maintain a healthy lifestyle,
                                Luxuria Gym is your partner on this transformative journey. Reimagine fitness in an environment where luxury and well-being intertwine seamlessly.
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-center" style={{ color: "#132b6d" }}>
                        <div className="col-md-5 mt-5">
                            <h5 className="mb-5 text-center"> Indulge in Culinary Excellence at Luxuria's Exquisite Restaurant</h5>
                            <p className="mb-3">
                                Savor the art of fine dining at Luxuria's extraordinary restaurant, where every bite is a masterpiece and every meal is an unforgettable experience.
                                Step into a world of delectable flavors, impeccable service, and an ambiance that defines luxury dining.
                            </p>
                            <p className="mb-3">
                                Elevate your meal with a selection from our extensive wine and beverage list. Our sommeliers have meticulously curated pairings to complement the diverse flavors on your plate,
                                enhancing the pleasure of every bite.
                            </p>
                            <p>
                                Experience the epitome of exclusivity in our private dining areas. Perfect for intimate celebrations or important business gatherings,
                                these secluded spaces ensure that every moment is personalized to your desires.
                            </p>
                        </div>
                        <div className="col-md-7 mb-4 mb-md-0">
                            <img src="/amenities4.jpg" className="img-fluid rounded" alt="bar" />
                        </div>
                    </div>
                    <div className="row align-items-center" style={{ color: "#132b6d" }}>
                        <div className="col-md-7 mb-4 mb-md-0">
                            <img src="/amenities5.jpg" className="img-fluid rounded" alt="bar" />
                        </div>
                        <div className="col-md-5 mt-5">
                            <h5 className="mb-5 text-center"> Luxuria: Where Your Events Shine Brightest</h5>
                            <p className="mb-3">
                                Host your most memorable occasions in grandeur and elegance at Luxuria Hotel's spectacular event hall. Whether it's a dream wedding,
                                a corporate conference, or a celebratory gala, our versatile and luxurious spaces are ready to transform your vision into reality.
                            </p>
                            <p className="mb-3">
                                With its spacious layout and exquisite ambiance, Luxuria Event Hall sets the stage for extraordinary moments.
                                Our team of event specialists is dedicated to crafting seamless experiences, leaving you and your guests with memories that last a lifetime.
                            </p>
                            <p>
                                Luxuria Event Hall offers versatile spaces that can be transformed to accommodate events of all sizes.
                                Our commitment to excellence and attention to detail guarantees that your event will unfold flawlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage