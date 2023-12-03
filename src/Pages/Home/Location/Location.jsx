import SeectionTitle from "../../../Components/SectionTitle/SeectionTitle";
import location from '../../../assets/location.png'
const Location = () => {
    return (
        <div className="mb-24 px-2 lg:px-0">
            <SeectionTitle heading={'Apartment Location'}></SeectionTitle>
            <h4 className="text-2xl md:text-4xl font-bold mb-4"><b className="text-pink-700">Luminar Living</b> Location Details:</h4>
            <div className="grid grid-cols-2 gap-6">
                <div>
                <p className="mb-2"><span className="text-orange-400 font-medium underline">Address:</span> <br />
123 Elegant Street,<br />
Gulshan, Dhaka,<br />Bangladesh</p>
                <p className="mb-2"><span className="text-orange-400 font-medium underline">Coordinates:</span> <br />
Latitude: 23.7915° N <br />
Longitude: 90.4156° E</p>
            <p className="mb-1"><span className="text-orange-400 font-medium underline">Map Reference:</span> <br /></p>
                <img src={location} alt="" />
                </div>
            <div>
            <p className="mt-2"><span className="text-orange-400 font-medium underline">Nearest Landmarks:</span> <br /></p>
            <ul className="list-disc mb-2">
                <li>Gulshan Circle 1</li>
                <li>Gulshan Lake Park</li>            </ul>
            <p><span className="text-orange-400 font-medium underline">Parking:</span> <br />
Ample parking space available on-site for residents and visitors.</p>
            <p><span className="text-orange-400 font-medium underline">Visit Us:</span> <br />
We welcome you to visit &quot;Luminar Living&quot; and explore the prime location and amenities we offer. Schedule a tour to experience the epitome of luxury living in the heart of Gulshan.

</p>
            </div>
            </div>
        </div>
    );
};

export default Location;