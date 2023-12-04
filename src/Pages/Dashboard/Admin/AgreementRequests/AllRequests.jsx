import useRequestedAgreement from "../../../../hooks/useRequestedAgreement";
import RequestedAgreementRow from "./RequestedAgreementRow";

const AllRequests = () => {
    const [requestedAgreements]= useRequestedAgreement();
    console.log(requestedAgreements.length);
    

    return (
        <div className="overflow-x-auto">
    <table className="table">
        {/* head */}
        <thead className="font-bold text-black text-lg">
        <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Floor No</th>
            <th>Block Name</th>
            <th>Room no</th>
            <th>Rent</th>
            {/* <th></th>
            <th></th> */}
            
            {/* <th><button>Give mark</button></th> */}
        </tr>
        </thead>
        <tbody>
        {
            requestedAgreements.map(agreement =><RequestedAgreementRow agreement={agreement} key={agreement._id}></RequestedAgreementRow>)
        }
        
        </tbody>
    </table>
    </div>
    );
};

export default AllRequests;