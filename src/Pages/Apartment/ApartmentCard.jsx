import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ApartmentCard = ({apartment}) => {
    const {user}= useContext(AuthContext);
    const {apartment_image, floor_no, block_name, apartment_no, rent}=apartment
    const handleAgreement=()=>{
        const newAgreement={userName: user.displayName, email:user.email, floor_no, block_name, apartment_no, rent, status: 'pending'}
        axios.post('http://localhost:5000/agreements',newAgreement)
        .then(data=>{
            console.log(data.data);
            if(data.data.insertedId){
                Swal.fire({
                    title: 'Great!',
                    text: 'Agreement request sent successfully',
                    icon:'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <div className="card h-60 w-full bg-base-100 shadow-xl image-full">
                <figure><img src={apartment_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Floor No: {floor_no}</h2>
                    <p>Block Name: {block_name}</p>
                    <p>Appartment No: {apartment_no}</p>
                    <p>Rent: BDT{rent}</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleAgreement} className="btn btn-primary">Agreement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;