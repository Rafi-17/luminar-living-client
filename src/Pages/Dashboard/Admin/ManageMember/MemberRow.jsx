
const MemberRow = ({member}) => {
    const handleRemove=()=>{
        
    }
    return (
            <tr className="bg-base-200">
            <th>{member.name}</th>
            <td>{member.email}</td>
            <td><button onClick={handleRemove} className="bg-red-600 p-2 rounded-md text-white">Remove</button></td>
      </tr>
    );
};

export default MemberRow;