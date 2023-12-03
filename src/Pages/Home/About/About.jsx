import SeectionTitle from "../../../Components/SectionTitle/SeectionTitle";

const About = () => {
    return (
        <div className="my-24 px-2 lg:px-0">
            <SeectionTitle heading={'About Building'}></SeectionTitle>
            <div className="text-black">
                <p className="text-3xl font-bold mb-4">Welcome to <b className="text-green-500">Luminar Living</b>, where modern living meets timeless elegance. Our building stands as a testament to architectural brilliance and a commitment to providing unparalleled living experiences.</p>
                <h4 className="text-2xl font-semibold underline text-pink-800 mb-2">Architectural Marvel:</h4>
                <p className="font-medium">Designed with meticulous attention to detail, our building seamlessly blends aesthetic appeal with functionality. From the grand entrance to the thoughtfully crafted living spaces, every element is a testament to superior design and craftsmanship.</p>
                <h4 className="text-2xl font-semibold underline text-pink-800 mb-2">Exceptional Amenities:</h4>
                <p className="font-medium">We take pride in offering a range of amenities that elevate your lifestyle. From state-of-the-art fitness centers and relaxing recreational spaces to secure parking and 24/7 concierge services, <b>Luminar Living</b>is designed to cater to your every need.</p>
                <h4 className="text-2xl font-semibold underline text-pink-800 mb-2">Sustainability Focus:</h4>
                <p className="font-medium">At <b>Luminar Living</b>, we understand the importance of sustainable living. Our building incorporates eco-friendly features and energy-efficient systems to minimize our environmental footprint and contribute to a greener, healthier community.</p>
                <h4 className="text-2xl font-semibold underline text-pink-800 mb-2">Your Home, Your Sanctuary:</h4>
                <p className="font-medium">Whether you choose a cozy studio or a spacious penthouse, <b>Luminar Living</b> is more than just a residence; it is your sanctuary. Every apartment is designed to provide comfort, style, and a sense of home.</p>
                <p className="text-2xl font-medium mt-4">Discover a new standard of living at <b className="text-green-500">Luminar Living</b>. We invite you to explore the essence of our building and consider it not just as a place to live but as a lifestyle choice.</p>
            </div>
        </div>
    );
};

export default About;