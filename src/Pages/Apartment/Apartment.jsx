import { useEffect, useState } from "react";
import ApartmentCard from "./ApartmentCard";

const Apartment = () => {
    const [apartments, setApartments]= useState([]);
    useEffect(()=>{
        fetch('/apartments.json')
        .then(res=>res.json())
        .then(data=>setApartments(data))
    },[])
    return (
        <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-10 pt-20">All rooms information: </h2>
            <div className="grid grid-cols-3 gap-10">
                {
                    apartments.map(apartment=><ApartmentCard key={apartment._id} apartment={apartment}></ApartmentCard>)
                }
            </div>
        </div>
    );
};

export default Apartment;