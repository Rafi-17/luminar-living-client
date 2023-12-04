import axios from "axios";
import Swal from "sweetalert2";

const RequestedAgreementRow = ({agreement}) => {
    const {userName, email, floor_no, block_name, apartment_no, rent}= agreement;

    const handleAccept=(email)=>{
        axios.put(`http://localhost:5000/users/${email}`,{role:'member'})
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                Swal.fire({
                    title: 'Great!',
                    text: 'User created successfully',
                    icon:'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    const handleReject=()=>{

    }

    return (
    
    <tr>
      <td>{userName}</td>
      <td>{email}</td>
      <td>{floor_no}</td>
      <td>{block_name}</td>
      <td>{apartment_no}</td>
      <td>{rent}</td>
      <td><button onClick={handleAccept} className="p-3 bg-green-500 text-white">Accept</button></td>
      <td><button onClick={handleReject} className="p-3 bg-red-700 text-white">Reject</button></td>
    </tr>
    );
};

export default RequestedAgreementRow;