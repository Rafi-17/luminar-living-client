import axios from "axios";
import MemberRow from "./MemberRow";
import { useQuery } from "@tanstack/react-query";

const ManageMember = () => {
    const role='user'
    const {data: members=[]}=useQuery({
        queryKey:['members'],
        queryFn:async()=>{
            const res=await axios.get(`http://localhost:5000/users?role=${role}`)
            return res.data;
        }
    })
    return (
        <div>
            
            <div>
                <h2 className="text-3xl">All Members</h2>
                </div>
                <div className="overflow-x-auto">
  <table className="table w-full table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="w-full">
        {
            members.map(member =><MemberRow key={member._id} member={member}></MemberRow>)
        }
      
    </tbody>
  </table>
</div>
                
            
        </div>
    );
};

export default ManageMember;