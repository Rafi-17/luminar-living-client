import { useEffect, useState } from "react";

const useApartment=(currentPage)=>{
    console.log(currentPage);
    const [apartments, setApartments]= useState([]);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        fetch(`http://localhost:5000/apartments?page=${currentPage}`)
        .then(res=>res.json())
        .then(data=>{
            setApartments(data);
            setLoading(false);
        })
    },[currentPage])
    return [apartments, loading]
}
export default useApartment;