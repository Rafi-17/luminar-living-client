import {  useState } from "react";
import ApartmentCard from "./ApartmentCard";
import useApartment from "../../hooks/useApartment";
import { useLoaderData } from "react-router-dom";
import './Apartment.css'

const Apartment = () => {
    const [currentPage, setCurrentPage]= useState(1)
    const {count}= useLoaderData();
    const itemPerPage= 6;
    const numberOfPages= Math.ceil(count/itemPerPage);
    const [apartments]=useApartment(currentPage);

    const pages=[];
    for(let i=0;i<numberOfPages;i++){
        pages.push(i+1);
    }
    // const pages= [...Array(numberOfPages).keys()];
    // console.log(pages);

    // const [apartments, setApartments]= useState([]);
    // useEffect(()=>{
    //     fetch('/apartments.json')
    //     .then(res=>res.json())
    //     .then(data=>setApartments(data))
    // },[])
    return (
        <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-10 pt-20">All rooms information:{apartments.length} </h2>
            <div className="grid grid-cols-3 gap-10">
                {
                    apartments.map(apartment=><ApartmentCard key={apartment._id} apartment={apartment}></ApartmentCard>)
                }
            </div>
            <div className="pagination">
                <p>Current page: {currentPage}</p>
                <button>Previous</button>
                {
                    pages.map(page=><button className={currentPage===page && 'selected'} onClick={()=>setCurrentPage(page)} key={page}>{page}</button>)
                }
                <button>Next</button>
            </div>
        </div>
    );
};

export default Apartment;